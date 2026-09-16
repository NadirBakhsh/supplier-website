"use client"

import Image from "next/image"
import { PHONE_MOCKUP_MAX_WIDTH, PhoneMockup } from "@/components/product/phone-mockup"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import {
  SOLUTION_BADGE,
  SOLUTION_HEADLINE,
  SOLUTION_POINTS,
  SOLUTION_SUBHEADLINE
} from "@/lib/content/solution"

export function SolutionSection() {
  const containerRef = useScrollReveal(".solution-point")

  return (
    <section
      id="solution"
      className="relative overflow-hidden bg-gradient-to-b from-brand-900 to-brand-800 py-20 text-white sm:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 h-[28rem] w-[28rem] rounded-full bg-brand-green-500/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 md:grid-cols-1 md:items-center lg:px-8">
        <div>
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold tracking-wide text-white/80 uppercase">
            {SOLUTION_BADGE}
          </span>
          <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            {SOLUTION_HEADLINE}
          </h2>
          <p className="mt-4 max-w-xl text-base text-white/80 sm:text-lg">
            {SOLUTION_SUBHEADLINE}
          </p>

          <div ref={containerRef} className="mt-10 grid gap-4 grid-cols-1 lg:grid-cols-3">
            <div className="grid gap-4 grid-rows-3 ">
              {SOLUTION_POINTS.slice(0, 3).map((point) => (
                <div
                  key={point.title}
                  className="solution-point flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 opacity-0 translate-y-8 motion-reduce:opacity-100 motion-reduce:translate-y-0"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-brand-200">
                    <point.icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-sm font-semibold text-white">
                    {point.title}
                  </h3>
                  <p className="text-sm leading-6 text-white/80">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
            <div className={`mx-auto grid w-full grid-rows-1 gap-4 ${PHONE_MOCKUP_MAX_WIDTH.lg}`}>
              <PhoneMockup size="lg">
                <Image
                  src="/screenshots/supplier/supplier-wallet-screen.png"
                  alt="4Supplier wallet screen showing income, expense, and balance"
                  fill
                  sizes="320px"
                  className="object-cover object-top"
                />
              </PhoneMockup>
            </div>
            <div className="grid gap-4 grid-rows-3 ">
              {SOLUTION_POINTS.slice(3, 6).map((point) => (
                <div
                  key={point.title}
                  className="solution-point flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 opacity-0 translate-y-8 motion-reduce:opacity-100 motion-reduce:translate-y-0"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-brand-200">
                    <point.icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-sm font-semibold text-white">
                    {point.title}
                  </h3>
                  <p className="text-sm leading-6 text-white/80">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
