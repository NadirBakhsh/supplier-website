"use client"

import { SectionHeader } from "@/components/ui/section-header"
import { PHONE_MOCKUP_WIDTH } from "@/components/product/phone-mockup"
import { PhoneScreenshot } from "@/components/product/phone-screenshot"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { HOW_IT_WORKS_BADGE, HOW_IT_WORKS_HEADLINE, HOW_IT_WORKS_STEPS } from "@/lib/content/how-it-works"
import { cn } from "@/lib/utils"

export function HowItWorks() {
  const containerRef = useScrollReveal(".how-step")

  return (
    <section id="how-it-works" className="bg-muted/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader badge={HOW_IT_WORKS_BADGE} title={HOW_IT_WORKS_HEADLINE} />

        <div
          ref={containerRef}
          className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
        >
          {HOW_IT_WORKS_STEPS.map((step) => (
            <div
              key={step.number}
              className="how-step flex flex-col items-center text-center opacity-0 translate-y-8 motion-reduce:opacity-100 motion-reduce:translate-y-0"
            >
              <PhoneScreenshot
                src={step.screenshot}
                alt={step.alt}
                size="sm"
                className={cn("mb-6", PHONE_MOCKUP_WIDTH.sm)}
              />
              <span className="text-sm font-bold text-brand-600">{step.number}</span>
              <h3 className="mt-2 text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 max-w-[16rem] text-sm leading-6 text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
