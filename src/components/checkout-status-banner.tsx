"use client";

import { useSearchParams } from "next/navigation";

const statusMap: Record<string, { tone: string; message: string }> = {
  success: {
    tone: "border-[#b7e2c9] bg-[#eef8f2] text-[#1f6f45]",
    message: "Payment successful. Your booking has been received.",
  },
  cancelled: {
    tone: "border-[#e5d8a8] bg-[#fff8df] text-[#7a5b00]",
    message: "Checkout cancelled. You can select an option and try again.",
  },
  invalid: {
    tone: "border-[#e8c2c2] bg-[#fff1f1] text-[#8a2f2f]",
    message: "Invalid booking option selected. Please choose again.",
  },
  "not-configured": {
    tone: "border-[#e8c2c2] bg-[#fff1f1] text-[#8a2f2f]",
    message: "Payments are temporarily unavailable. Please try again shortly.",
  },
  error: {
    tone: "border-[#e8c2c2] bg-[#fff1f1] text-[#8a2f2f]",
    message: "Something went wrong while creating checkout. Please retry.",
  },
};

export function CheckoutStatusBanner() {
  const searchParams = useSearchParams();
  const key = searchParams.get("checkout") ?? "";

  if (!key || !statusMap[key]) {
    return (
      <div className="surface-card border border-[#d8ddd7] bg-[#f9fbf8] p-4 text-sm font-semibold text-[#1f6f45]">
        Select your preferred option, complete your details, and finish payment at checkout.
      </div>
    );
  }

  const status = statusMap[key];

  return (
    <div className={`surface-card border p-4 text-sm font-semibold ${status.tone}`}>
      {status.message}
    </div>
  );
}
