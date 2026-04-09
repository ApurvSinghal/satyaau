"use client";

import Image from "next/image";
import { useState } from "react";
import { serviceOffers } from "@/content/services";
import { CheckoutStatusBanner } from "./checkout-status-banner";
import { Suspense } from "react";

type WizardStep = "service-selection" | "booking-form";

export function BookingWizard() {
  const [step, setStep] = useState<WizardStep>("service-selection");
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  const selectedService = selectedServiceId ? serviceOffers.find((s) => s.id === selectedServiceId) : null;

  const handleServiceSelect = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setStep("booking-form");
  };

  const handleBackToServices = () => {
    setStep("service-selection");
    setSelectedServiceId(null);
  };

  return (
    <section className="section-space">
      <div className="mx-auto w-full max-w-6xl space-y-8">
        <Suspense
          fallback={
            <div className="surface-card border border-[#d8ddd7] bg-[#f9fbf8] p-4 text-sm font-semibold text-[#1f6f45]">
              Loading booking status...
            </div>
          }
        >
          <CheckoutStatusBanner />
        </Suspense>

        {step === "service-selection" ? (
          <div className="space-y-8">
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="relative overflow-hidden rounded-[2rem] border border-[#d8ddd7] bg-[#111714] px-6 py-8 text-white shadow-[0_30px_80px_-40px_rgba(10,30,18,0.7)] md:px-8 md:py-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(98,191,132,0.28),_transparent_42%),linear-gradient(140deg,_rgba(255,255,255,0.05),_rgba(255,255,255,0))]" />
                <div className="relative space-y-6">
                  <div className="flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#9ed8b3]">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Certified Personal Trainer</span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Senior IT Professional at Tennis Australia</span>
                  </div>

                  <div className="space-y-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#9ed8b3]">Book With Satya</p>
                    <h2 className="max-w-3xl font-[var(--font-barlow)] text-5xl font-extrabold uppercase leading-[0.92] md:text-7xl">
                      Fitness For People Building A Strong Life, Not Just A Better Body
                    </h2>
                    <p className="max-w-2xl text-sm leading-6 text-[#d9e3db] md:text-base">
                      Satya is building a modern fitness brand around one idea: balanced living. Professional ambition,
                      physical strength, and mental wellbeing should work together. This experience is designed to help
                      people of all ages, genders, and backgrounds train with structure, confidence, and purpose.
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-[11px] uppercase tracking-[0.22em] text-[#9ed8b3]">Training Reach</p>
                      <p className="mt-2 text-sm font-semibold text-white">Monash, Whitehorse, Manningham</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-[11px] uppercase tracking-[0.22em] text-[#9ed8b3]">Style</p>
                      <p className="mt-2 text-sm font-semibold text-white">Inclusive, practical, sustainable</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-[11px] uppercase tracking-[0.22em] text-[#9ed8b3]">Focus</p>
                      <p className="mt-2 text-sm font-semibold text-white">Lifestyle, strength, consistency</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[2rem] border border-[#d8ddd7] bg-[#eef3ee] shadow-[0_30px_80px_-50px_rgba(17,23,20,0.55)]">
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_15%,rgba(0,0,0,0.5)_100%)]" />
                <Image
                  src="/transformations/photo-2.jpg"
                  alt="Satya posing at Hyrox finish wall"
                  fill
                  sizes="(min-width: 1024px) 34vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#9ed8b3]">Independent Fitness Influencer</p>
                  <p className="mt-2 max-w-xs text-sm font-semibold leading-6">
                    Personal Training, Bootcamp, and Work Out With Me sessions built to feel accessible, motivating, and transformative.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 rounded-[2rem] border border-[#d8ddd7] bg-white p-6 shadow-[0_24px_70px_-55px_rgba(17,23,20,0.45)] md:grid-cols-3 md:p-8">
              <div>
                <p className="label-kicker">Step 1</p>
                <h3 className="mt-3 font-[var(--font-barlow)] text-4xl font-extrabold uppercase text-[#1d241f]">Pick Your Format</h3>
              </div>
              <p className="text-sm leading-6 text-[#4f584f]">
                Start with the training style that suits your life right now. Every option is built to make fitness feel like part of your identity, not an interruption to it.
              </p>
              <p className="text-sm leading-6 text-[#4f584f]">
                Select a service below to explore your options, then complete one short booking form before secure payment.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {serviceOffers.map((service) => (
                <button
                  key={service.id}
                  onClick={() => handleServiceSelect(service.id)}
                  className="group relative overflow-hidden rounded-[2rem] border border-[#d8ddd7] bg-white text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#adc8b4] hover:shadow-[0_30px_80px_-50px_rgba(17,23,20,0.55)]"
                >
                  {service.featured && (
                    <div className="absolute right-4 top-4 z-10 rounded-full bg-[#1f6f45] px-4 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white">
                      Most Popular
                    </div>
                  )}

                  <div className="relative h-52 overflow-hidden">
                    <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 z-[2] p-5 text-white">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9ed8b3]">{service.name}</p>
                      <p className="mt-2 max-w-xs text-sm font-medium leading-6 text-white/90">{service.summary}</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-5 p-6">
                    <ul className="space-y-3 text-sm font-medium text-[#2a322a]">
                      {service.points.map((point) => (
                        <li key={point} className="flex items-start gap-3">
                          <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#edf5ef] text-[10px] font-bold text-[#1f6f45]">+</span>
                          <span className="leading-6 text-[#3e473f]">{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="grid gap-2 rounded-2xl bg-[#f6f8f4] p-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#5f665f]">Available Options</p>
                      {service.options.map((option) => (
                        <div key={option.id} className="flex items-center justify-between text-sm font-semibold text-[#2a322a]">
                          <span>{option.label}</span>
                          <span className="text-[#1f6f45]">{option.price}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between border-t border-[#e1e7e0] pt-4">
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.22em] text-[#5f665f]">From</p>
                        <p className="mt-1 text-xl font-bold text-[#1f6f45]">{service.options[0]?.price}</p>
                      </div>
                      <span className="rounded-full bg-[#1f6f45] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white transition-colors group-hover:bg-[#183f2b]">
                        Select
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="surface-card p-5 text-sm text-[#4f584f]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#5f665f]">Who This Is For</p>
                <p className="mt-3 leading-6">People balancing work, family, and ambition who want a fitness system they can actually sustain.</p>
              </div>
              <div className="surface-card p-5 text-sm text-[#4f584f]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#5f665f]">Brand Vision</p>
                <p className="mt-3 leading-6">A globally recognised fitness brand built on inclusivity, balanced living, and meaningful transformation.</p>
              </div>
              <div className="surface-card p-5 text-sm text-[#4f584f]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#5f665f]">Availability</p>
                <p className="mt-3 leading-6">Limited monthly intake to keep each client experience personal, focused, and high quality.</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="rounded-[2rem] border border-[#d8ddd7] bg-white p-6 shadow-[0_24px_70px_-55px_rgba(17,23,20,0.45)] md:p-8">
              <button
                onClick={handleBackToServices}
                className="text-sm font-semibold text-[#1f6f45] transition-colors hover:text-[#1a5638]"
              >
                ← Back to Services
              </button>
              <p className="label-kicker mt-4">Step 2</p>
              <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
                <div>
                  <h2 className="mt-2 font-[var(--font-barlow)] text-4xl font-extrabold uppercase text-[#1d241f] md:text-5xl">Build Your Booking</h2>
                  <p className="mt-4 max-w-2xl text-sm leading-6 text-[#4f584f]">
                    You selected <span className="font-semibold text-[#1f6f45]">{selectedService?.name}</span>. Choose the exact option,
                    share your goals, and move to secure payment.
                  </p>
                </div>
                <div className="rounded-2xl bg-[#f4f7f2] px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#1f6f45]">
                  Balanced living. Stronger training.
                </div>
              </div>
            </div>

            {selectedService && (
              <div className="overflow-hidden rounded-[2rem] border border-[#d8ddd7] bg-white shadow-[0_24px_70px_-55px_rgba(17,23,20,0.45)]">
                <div className="grid gap-6 md:grid-cols-[380px_1fr]">
                  <div className="relative hidden h-full w-full md:block">
                    <Image
                      src={selectedService.image}
                      alt={selectedService.name}
                      fill
                      sizes="400px"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-col justify-center gap-6 p-6 md:p-8">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#5f665f]">Selected Service</p>
                      <h3 className="mt-2 font-[var(--font-barlow)] text-3xl font-extrabold uppercase text-[#2a322a]">
                        {selectedService.name}
                      </h3>
                      <p className="mt-3 max-w-xl text-sm leading-6 text-[#4f584f]">{selectedService.summary}</p>
                      {selectedService.note && (
                        <p className="mt-2 text-xs font-semibold text-[#1f6f45]">{selectedService.note}</p>
                      )}
                    </div>

                    <ul className="space-y-2 text-sm font-medium text-[#2a322a]">
                      {selectedService.points.map((point) => (
                        <li key={point} className="flex items-start gap-2">
                          <span className="mt-1 text-[#1f6f45]">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
              <form action="/api/checkout" method="POST" className="space-y-6 rounded-[2rem] border border-[#d8ddd7] bg-white p-6 shadow-[0_24px_70px_-55px_rgba(17,23,20,0.45)] md:p-8">
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-[0.24em] text-[#5f665f]">Select Your Option</label>
                    <p className="mt-2 text-sm leading-6 text-[#4f584f]">Choose the version of this service that best matches where and how you want to train.</p>
                  </div>

                  <div className="grid gap-3">
                    {selectedService?.options.map((option) => (
                      <label
                        key={option.id}
                        className="flex cursor-pointer items-center gap-4 rounded-2xl border-2 border-[#d8ddd7] bg-[#fbfcfa] px-4 py-4 transition-all duration-200 hover:border-[#1f6f45] hover:bg-white has-[:checked]:border-[#1f6f45] has-[:checked]:bg-[#eff6f1]"
                      >
                        <input
                          required
                          type="radio"
                          name="selection"
                          value={`${selectedService.id}::${option.id}`}
                          className="h-5 w-5 accent-[#1f6f45]"
                        />
                        <div className="flex flex-1 items-center justify-between gap-4">
                          <div>
                            <p className="font-semibold text-[#2a322a]">{option.label}</p>
                            <p className="mt-1 text-xs text-[#5f665f]">Direct booking with secure card checkout</p>
                          </div>
                          <p className="text-sm font-bold text-[#1f6f45]">{option.price}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 border-t border-[#e3e8e2] pt-6">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-[0.24em] text-[#5f665f]">Your Information</label>
                    <p className="mt-2 text-sm leading-6 text-[#4f584f]">Share a few details so Satya can understand your goals before your first session or program begins.</p>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="fullName" className="text-xs font-semibold uppercase tracking-wider text-[#5f665f]">
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      required
                      className="mt-2 w-full rounded-lg border border-[#d8ddd7] bg-white px-4 py-3 text-sm transition-colors focus:border-[#1f6f45] focus:outline-none focus:ring-1 focus:ring-[#1f6f45]/20"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-[#5f665f]">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="mt-2 w-full rounded-lg border border-[#d8ddd7] bg-white px-4 py-3 text-sm transition-colors focus:border-[#1f6f45] focus:outline-none focus:ring-1 focus:ring-[#1f6f45]/20"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-[#5f665f]">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      required
                      className="mt-2 w-full rounded-lg border border-[#d8ddd7] bg-white px-4 py-3 text-sm transition-colors focus:border-[#1f6f45] focus:outline-none focus:ring-1 focus:ring-[#1f6f45]/20"
                      placeholder="+61 2 1234 5678"
                    />
                  </div>

                  <div>
                    <label htmlFor="notes" className="text-xs font-semibold uppercase tracking-wider text-[#5f665f]">
                      Goal / Notes
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      required
                      rows={4}
                      className="md:col-span-2 mt-2 w-full rounded-lg border border-[#d8ddd7] bg-white px-4 py-3 text-sm transition-colors focus:border-[#1f6f45] focus:outline-none focus:ring-1 focus:ring-[#1f6f45]/20"
                      placeholder="Tell us about your fitness goals, current level, and availability..."
                    />
                  </div>
                </div>

                <textarea
                  name="notesExtended"
                  rows={3}
                  className="hidden"
                />
                </div>

                <div className="flex flex-col gap-3 rounded-2xl bg-[#f5f8f4] p-4 md:flex-row md:items-center md:justify-between">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5f665f]">
                    Secure Stripe checkout at the end
                  </p>
                  <button
                    type="submit"
                    className="cta-primary w-full rounded-xl bg-[#1f6f45] px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white transition-all duration-200 hover:bg-[#1a5638] hover:shadow-lg md:w-auto"
                  >
                    Continue To Payment
                  </button>
                </div>
              </form>

              <aside className="space-y-5 rounded-[2rem] border border-[#d8ddd7] bg-[#111714] p-6 text-white shadow-[0_24px_70px_-55px_rgba(17,23,20,0.55)] md:p-8">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#9ed8b3]">What Happens Next</p>
                  <h3 className="mt-3 font-[var(--font-barlow)] text-3xl font-extrabold uppercase">A Clear Start, Not A Generic Funnel</h3>
                </div>

                <div className="space-y-4 text-sm leading-6 text-[#d5dfd7]">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="font-semibold text-white">1. Submit your preferred option</p>
                    <p className="mt-2">Choose the service and format that fit your life right now.</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="font-semibold text-white">2. Complete payment securely</p>
                    <p className="mt-2">You will be redirected to Stripe to finish checkout safely.</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="font-semibold text-white">3. Receive follow-up and next steps</p>
                    <p className="mt-2">Satya receives your booking details and prepares your onboarding or session planning.</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-[#31533f] bg-[#163222] p-4 text-sm leading-6 text-[#dff2e4]">
                  This brand is being built to show that fitness can support ambition, mental wellbeing, and everyday life at the same time.
                </div>
              </aside>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
