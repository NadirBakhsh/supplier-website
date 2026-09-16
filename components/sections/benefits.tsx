"use client"

import { motion, useReducedMotion, type Variants } from "framer-motion"
import { SectionHeader } from "@/components/ui/section-header"
import { BENEFITS, BENEFITS_BADGE, BENEFITS_HEADLINE } from "@/lib/content/benefits"
import { SECTION_VIEWPORT_CLASS } from "@/lib/constants/layout"
import { cn } from "@/lib/utils"

function getContainerVariants(reduceMotion: boolean): Variants {
  return {
    hidden: {},
    show: { transition: { staggerChildren: reduceMotion ? 0 : 0.08 } },
  }
}

function getCardVariants(reduceMotion: boolean): Variants {
  return {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: reduceMotion ? { duration: 0.01 } : { duration: 0.5, ease: "easeOut" },
    },
  }
}

export function Benefits() {
  // See Hero for why this must never change the `initial` prop directly.
  const shouldReduceMotion = useReducedMotion() ?? false
  const containerVariants = getContainerVariants(shouldReduceMotion)
  const cardVariants = getCardVariants(shouldReduceMotion)

  return (
    <section className={cn(SECTION_VIEWPORT_CLASS, "bg-muted/40 py-20 sm:py-28")}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader badge={BENEFITS_BADGE} title={BENEFITS_HEADLINE} />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {BENEFITS.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={cardVariants}
              className="flex flex-col gap-4 rounded-2xl border border-border p-6 transition-shadow hover:shadow-md"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500 text-white">
                <benefit.icon className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-semibold text-foreground">{benefit.title}</h3>
              <p className="text-sm leading-6 text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
