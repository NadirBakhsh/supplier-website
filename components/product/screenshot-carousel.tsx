"use client"

import Image from "next/image"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { PhoneMockup } from "@/components/product/phone-mockup"

type Screen = {
  id: string
  screenshot: string
  alt: string
}

type ScreenshotCarouselProps = {
  screens: Screen[]
  activeIndex: number
  size?: "sm" | "md" | "lg"
  className?: string
}

/**
 * Renders a single PhoneMockup whose screen content cross-fades/scales
 * between screenshots as `activeIndex` changes. Fully controlled — the
 * parent (MobileScreenCarousel) owns the active index and swipe/click logic.
 */
export function ScreenshotCarousel({
  screens,
  activeIndex,
  size = "lg",
  className,
}: ScreenshotCarouselProps) {
  const shouldReduceMotion = useReducedMotion()
  const active = screens[activeIndex]

  if (!active) return null

  return (
    <PhoneMockup size={size} className={className}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={active.id}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.35, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={active.screenshot}
            alt={active.alt}
            fill
            sizes="(max-width: 768px) 70vw, 320px"
            className="object-cover object-top"
          />
        </motion.div>
      </AnimatePresence>
    </PhoneMockup>
  )
}
