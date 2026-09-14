"use client"

import { Check } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { PhoneScreenshot } from "@/components/product/phone-screenshot"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { cn } from "@/lib/utils"
import {
  FEATURES,
  FEATURES_BADGE,
  FEATURES_HEADLINE,
  FEATURES_SUBHEADLINE,
} from "@/lib/content/features"

export function FeatureShowcase() {
  const containerRef = useScrollReveal(".feature-row")

  return (
    <section id="features" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={FEATURES_BADGE}
          title={FEATURES_HEADLINE}
          description={FEATURES_SUBHEADLINE}
        />

        <div ref={containerRef} className="mt-16 flex flex-col gap-20 sm:gap-28">
          {FEATURES.map((feature, index) => {
            const reversed = index % 2 === 1

            return (
              <div
                key={feature.label}
                className={cn(
                  "feature-row grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16"
                )}
              >
                <div className={cn(reversed && "md:order-2")}>
                  <span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold tracking-wide text-brand-700 uppercase">
                    {feature.label}
                  </span>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                    {feature.headline}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-muted-foreground">
                    {feature.description}
                  </p>
                  <ul className="mt-6 flex flex-col gap-3">
                    {feature.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2.5 text-sm text-foreground">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-green-500/10 text-brand-green-700">
                          <Check className="h-3 w-3" />
                        </span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={cn("mx-auto w-full max-w-[280px]", reversed && "md:order-1")}>
                  <PhoneScreenshot src={feature.screenshot} alt={feature.alt} size="md" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
