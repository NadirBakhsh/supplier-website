"use client"

import { useState } from "react"
import { motion, type PanInfo } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { PHONE_MOCKUP_WIDTH } from "@/components/product/phone-mockup"
import { ScreenshotCarousel } from "@/components/product/screenshot-carousel"
import { cn } from "@/lib/utils"
import {
  CAROUSEL_BADGE,
  CAROUSEL_HEADLINE,
  CAROUSEL_SCREENS,
  CAROUSEL_SUBHEADLINE,
} from "@/lib/content/carousel-screens"

const SWIPE_THRESHOLD = 60

export function MobileScreenCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const active = CAROUSEL_SCREENS[activeIndex]

  const goTo = (index: number, dir: number) => {
    setDirection(dir)
    setActiveIndex((index + CAROUSEL_SCREENS.length) % CAROUSEL_SCREENS.length)
  }

  const handlePanEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x <= -SWIPE_THRESHOLD) {
      goTo(activeIndex + 1, 1)
    } else if (info.offset.x >= SWIPE_THRESHOLD) {
      goTo(activeIndex - 1, -1)
    }
  }

  return (
    <section id="app-preview" className="bg-brand-50/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={CAROUSEL_BADGE}
          title={CAROUSEL_HEADLINE}
          description={CAROUSEL_SUBHEADLINE}
        />

        <div className="mt-14 grid grid-cols-1 items-stretch gap-10 md:grid-cols-[auto_1fr] md:gap-16">
          <div className="mx-auto flex w-full max-w-50 flex-col items-center gap-4 sm:mx-0 sm:w-auto sm:max-w-none sm:flex-row sm:gap-3">
            <motion.div
              onPanEnd={handlePanEnd}
              className={cn(
                PHONE_MOCKUP_WIDTH.md,
                "max-w-full shrink-0 cursor-grab touch-pan-y active:cursor-grabbing sm:order-2"
              )}
            >
              <ScreenshotCarousel
                screens={CAROUSEL_SCREENS}
                activeIndex={activeIndex}
                direction={direction}
                size="md"
              />
            </motion.div>

            <div className="flex items-center gap-3 sm:contents">
              <button
                type="button"
                onClick={() => goTo(activeIndex - 1, -1)}
                aria-label="Previous screen"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-white text-foreground shadow-sm transition-colors hover:border-brand-300 hover:text-brand-700 sm:order-1"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={() => goTo(activeIndex + 1, 1)}
                aria-label="Next screen"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-white text-foreground shadow-sm transition-colors hover:border-brand-300 hover:text-brand-700 sm:order-3"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-sm font-medium text-muted-foreground">
              {active ? active.description : ""}
            </p>
            <div
              className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0"
              role="tablist"
              aria-label="App screens"
            >
              {CAROUSEL_SCREENS.map((screen, index) => (
                <button
                  key={screen.id}
                  type="button"
                  role="tab"
                  aria-selected={index === activeIndex}
                  onClick={() => goTo(index, index > activeIndex ? 1 : -1)}
                  className={cn(
                    "shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                    index === activeIndex
                      ? "border-brand-500 bg-brand-500 text-white"
                      : "border-border bg-white text-muted-foreground hover:border-brand-300 hover:text-brand-700"
                  )}
                >
                  {screen.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
