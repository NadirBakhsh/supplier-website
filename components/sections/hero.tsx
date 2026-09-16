"use client"

import Link from "next/link"
import Image from "next/image"
import { motion, useReducedMotion, type Variants } from "framer-motion"
import { ArrowRight, TrendingDown, TrendingUp, Package } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { DownloadButtons } from "@/components/ui/download-buttons"
import { PHONE_MOCKUP_MAX_WIDTH, PhoneMockup } from "@/components/product/phone-mockup"
import { HERO_CONTENT } from "@/lib/content/hero"
import { cn } from "@/lib/utils"

const CARD_ICONS = [Package, TrendingDown, TrendingUp]

const CARD_POSITIONS = [
  "top-0 -left-1 sm:top-3 sm:left-0",
  "bottom-2 -right-1 sm:bottom-6 sm:right-0",
  "top-[38%] -right-2 sm:top-[40%] sm:right-0",
] as const

const HEADLINE_LINES = HERO_CONTENT.headline
  .split(". ")
  .map((line) => (line.endsWith(".") ? line : `${line}`))

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
    <section className="relative pt-10 overflow-hidden bg-linear-to-b from-brand-50 via-white to-white">
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand-200/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute top-40 -left-24 h-72 w-72 rounded-full bg-brand-green-500/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:gap-10 sm:px-6 sm:py-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:px-8 lg:py-16 xl:gap-16 xl:py-20">
        <motion.div
          initial="hidden"
          animate="show"
          variants={containerVariants}
          className="flex min-w-0 flex-col items-start gap-4 sm:gap-5"
        >
          <motion.span
            variants={itemVariants}
            className="inline-flex w-fit items-center rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold tracking-wide text-brand-700 uppercase"
          >
            {HERO_CONTENT.eyebrow}
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="text-[clamp(1.75rem,1.05rem+2.8vw,3.5rem)] font-semibold leading-[1.12] tracking-tight text-foreground"
          >
            {HEADLINE_LINES.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8"
          >
            {HERO_CONTENT.subheadline}
          </motion.p>

          <motion.div variants={itemVariants} className="flex w-full flex-col items-start gap-3 pt-1 sm:gap-4">
            <div id="download" className="w-full max-w-md sm:w-auto sm:max-w-none">
              <DownloadButtons className="w-full sm:w-auto" />
            </div>
            <Link
              href={HERO_CONTENT.secondaryCtaHref}
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "group min-h-11 px-0 text-brand-700 hover:bg-transparent hover:text-brand-800"
              )}
            >
              {HERO_CONTENT.secondaryCta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" />
            </Link>
          </motion.div>
        </motion.div>

        <div className="flex w-full flex-col gap-4 sm:gap-5">
          <div
            className={cn(
              "relative mx-auto w-full px-1 pt-2 sm:px-0 sm:pt-6 lg:ml-auto lg:pt-8",
              PHONE_MOCKUP_MAX_WIDTH.lg
            )}
          >
              <motion.div
                initial={{ opacity: 0, x: 30, rotate: 6 }}
                animate={{ opacity: 1, x: 0, rotate: 6 }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0.01 }
                    : { duration: 0.7, delay: 0.15, ease: "easeOut" }
                }
                className="absolute top-0 right-0 hidden w-[56%] opacity-90 sm:block md:w-[52%] lg:w-[54%]"
              >
                <PhoneMockup size="md">
                  <Image
                    src="/screenshots/supplier/supplier-customer-list-screen.png"
                    alt="4Supplier customer list screen"
                    fill
                    sizes="(min-width: 1280px) 220px, 180px"
                    loading="eager"
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
                className="relative mx-auto w-[72%] sm:mx-0 sm:w-[66%] md:w-[62%] lg:w-[64%]"
              >
                <PhoneMockup size="lg">
                  <Image
                    src="/screenshots/supplier/supplier-home-screen.png"
                    alt="4Supplier supplier dashboard home screen"
                    fill
                    sizes="(min-width: 1280px) 280px, (min-width: 640px) 220px, 200px"
                    priority
                    className="object-cover object-top"
                  />
                </PhoneMockup>
              </motion.div>

              {HERO_CONTENT.floatingCards.map((card, index) => {
                const Icon = CARD_ICONS[index] ?? Package

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
                      "absolute z-10 w-29 rounded-xl border border-border bg-white/95 p-2 shadow-lg backdrop-blur sm:w-32 sm:rounded-2xl sm:p-2.5 md:w-34 lg:w-36 lg:p-3 xl:w-40",
                      CARD_POSITIONS[index]
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className={cn(
                          "flex h-7 w-7 shrink-0 items-center justify-center rounded-full",
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
                        "mt-1 text-base font-semibold text-foreground sm:mt-1.5 sm:text-lg",
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
        </div>
      </div>
    </section>
  )
}
