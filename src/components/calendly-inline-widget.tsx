"use client";

import { useEffect, useRef } from "react";

type CalendlyInlineWidgetProps = {
  url: string;
  className?: string;
};

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void;
    };
  }
}

function loadCalendlyScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (window.Calendly?.initInlineWidget) {
      resolve();
      return;
    }

    const existing = document.querySelector('script[data-calendly-script="true"]') as
      | HTMLScriptElement
      | null;

    if (existing) {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error("Calendly script failed to load")), {
        once: true,
      });
      return;
    }

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.dataset.calendlyScript = "true";
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Calendly script failed to load"));
    document.body.appendChild(script);
  });
}

export function CalendlyInlineWidget({ url, className = "" }: CalendlyInlineWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;

    const initWidget = async () => {
      await loadCalendlyScript();

      if (cancelled || !containerRef.current || !window.Calendly?.initInlineWidget) {
        return;
      }

      containerRef.current.innerHTML = "";
      window.Calendly.initInlineWidget({
        url,
        parentElement: containerRef.current,
      });
    };

    initWidget().catch(() => {
      // Fail silently and let the fallback direct Calendly link handle access.
    });

    return () => {
      cancelled = true;
    };
  }, [url]);

  return (
    <div
      ref={containerRef}
      className={`calendly-inline-widget relative w-full overflow-hidden rounded-xl border border-[#d8ddd7] ${className}`}
      style={{ minWidth: "320px", height: "700px" }}
    />
  );
}
