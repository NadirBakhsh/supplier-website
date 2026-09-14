"use client"

import Link from "next/link"
import Image from "next/image"
import { motion, useReducedMotion, type Variants } from "framer-motion"
import { ArrowRight, TrendingDown, TrendingUp, Package } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { DownloadButtons } from "@/components/ui/download-buttons"
import { PhoneMockup } from "@/components/product/phone-mockup"
import { HERO_CONTENT } from "@/lib/content/hero"
import { cn } from "@/lib/utils"

const CARD_ICONS = [Package, TrendingDown, TrendingUp]

function getContainerVariants(reduceMotion: boolean): Variants {
  return {
    hidden: {},
    show: {
      transition: reduceMotion
        ? { staggerChildren: 0, delayChildren: 0 }
        : { staggerChildren: 0.12, delayChildren: 0.05 },
    },
  }
}

function getItemVariants(reduceMotion: boolean): Variants {
  return {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: reduceMotion ? { duration: 0.01 } : { duration: 0.6, ease: "easeOut" },
    },
  }
}

export function Hero() {
  // useReducedMotion() reads matchMedia and can only be trusted after mount;
  // its value must never change the `initial` prop (that would create a
  // server/client hydration mismatch). It's only used below to shorten or
  // disable `animate`/`transition` behavior once mounted.
  const shouldReduceMotion = useReducedMotion() ?? false
  const containerVariants = getContainerVariants(shouldReduceMotion)
  const itemVariants = getItemVariants(shouldReduceMotion)

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand-200/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute top-40 -left-24 h-72 w-72 rounded-full bg-brand-green-500/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24 lg:px-8">
        <motion.div
          initial="hidden"
          animate="show"
          variants={containerVariants}
          className="flex flex-col gap-6"
        >
          <motion.span
            variants={itemVariants}
            className="inline-flex w-fit items-center rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold tracking-wide text-brand-700 uppercase"
          >
            {HERO_CONTENT.eyebrow}
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            {HERO_CONTENT.headline}
          </motion.h1>

          <motion.p variants={itemVariants} className="max-w-xl text-lg text-muted-foreground">
            {HERO_CONTENT.subheadline}
          </motion.p>

          <motion.div
            id="download"
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <DownloadButtons />
          </motion.div>

          <motion.div variants={itemVariants}>
            <Link
              href={HERO_CONTENT.secondaryCtaHref}
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "group px-0 text-brand-700 hover:bg-transparent hover:text-brand-800"
              )}
            >
              {HERO_CONTENT.secondaryCta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>

        <div className="flex flex-col gap-6">
          <div className="relative mx-auto h-[420px] w-full max-w-sm sm:h-[480px]">
            <motion.div
              initial={{ opacity: 0, x: 30, rotate: 6 }}
              animate={{ opacity: 1, x: 0, rotate: 6 }}
              transition={
                shouldReduceMotion
                  ? { duration: 0.01 }
                  : { duration: 0.7, delay: 0.15, ease: "easeOut" }
              }
              className="absolute top-4 right-0 hidden w-[62%] opacity-90 md:block"
            >
              <PhoneMockup size="md">
                <Image
                  src="/screenshots/supplier/supplier-customer-list-screen.png"
                  alt="4Supplier customer list screen"
                  fill
                  sizes="220px"
                  className="object-cover object-top"
                />
              </PhoneMockup>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={
                shouldReduceMotion
                  ? { duration: 0.01 }
                  : { duration: 0.7, delay: 0.3, ease: "easeOut" }
              }
              className="absolute bottom-0 left-0 w-[68%]"
            >
              <PhoneMockup size="lg">
                <Image
                  src="/screenshots/supplier/supplier-home-screen.png"
                  alt="4Supplier supplier dashboard home screen"
                  fill
                  sizes="280px"
                  priority
                  className="object-cover object-top"
                />
              </PhoneMockup>
            </motion.div>

            {HERO_CONTENT.floatingCards.map((card, index) => {
              const Icon = CARD_ICONS[index] ?? Package
              const position = [
                "top-2 -left-6",
                "bottom-10 -right-4",
                "top-1/2 -right-10",
              ][index]

              return (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={
                    shouldReduceMotion
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 1, scale: 1, y: [0, -6, 0] }
                  }
                  transition={
                    shouldReduceMotion
                      ? { duration: 0.01 }
                      : {
                          opacity: { duration: 0.5, delay: 0.55 + index * 0.1 },
                          scale: { duration: 0.5, delay: 0.55 + index * 0.1 },
                          y: {
                            duration: 3.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.4,
                          },
                        }
                  }
                  className={cn(
                    "absolute hidden w-40 rounded-2xl border border-border bg-white/95 p-3 shadow-lg backdrop-blur sm:block",
                    position
                  )}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={cn(
                        "flex h-7 w-7 items-center justify-center rounded-full",
                        card.tone === "outstanding" && "bg-red-50 text-outstanding",
                        card.tone === "positive" && "bg-brand-green-500/10 text-brand-green-700",
                        !card.tone && "bg-brand-50 text-brand-700"
                      )}
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-[11px] font-medium text-muted-foreground">
                      {card.label}
                    </span>
                  </div>
                  <p
                    className={cn(
                      "mt-1.5 text-lg font-semibold text-foreground",
                      card.tone === "outstanding" && "text-outstanding",
                      card.tone === "positive" && "text-brand-green-700"
                    )}
                  >
                    {card.value}
                  </p>
                  <p className="text-[11px] text-muted-foreground">{card.sublabel}</p>
                </motion.div>
              )
            })}
          </div>

          <div className="flex gap-3 overflow-x-auto pb-1 sm:hidden">
            {HERO_CONTENT.floatingCards.map((card, index) => {
              const Icon = CARD_ICONS[index] ?? Package

              return (
                <div
                  key={card.label}
                  className="flex shrink-0 items-center gap-2.5 rounded-xl border border-border bg-white px-3 py-2 shadow-sm"
                >
                  <span
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
                      card.tone === "outstanding" && "bg-red-50 text-outstanding",
                      card.tone === "positive" && "bg-brand-green-500/10 text-brand-green-700",
                      !card.tone && "bg-brand-50 text-brand-700"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <div className="flex flex-col leading-tight whitespace-nowrap">
                    <span className="text-[11px] font-medium text-muted-foreground">
                      {card.label}
                    </span>
                    <span
                      className={cn(
                        "text-sm font-semibold text-foreground",
                        card.tone === "outstanding" && "text-outstanding",
                        card.tone === "positive" && "text-brand-green-700"
                      )}
                    >
                      {card.value}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
