"use client"

import Link from "next/link"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { DownloadButtons } from "@/components/ui/download-buttons"
import { NAV_LINKS } from "@/lib/content/site"

type MobileNavProps = {
  open: boolean
  onClose: () => void
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="overflow-hidden border-b border-border bg-background md:hidden"
        >
          <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="rounded-lg px-3 py-2.5 text-base font-medium text-foreground hover:bg-brand-50 hover:text-brand-700"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-3 px-3">
              <DownloadButtons className="flex-col items-stretch *:justify-center" />
            </div>
          </nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
