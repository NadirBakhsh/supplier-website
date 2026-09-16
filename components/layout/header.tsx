"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { DownloadButtons } from "@/components/ui/download-buttons"
import { MobileNav } from "@/components/layout/mobile-nav"
import { NAV_LINKS, SITE_NAME } from "@/lib/content/site"
import { cn } from "@/lib/utils"

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-md">
      <div
        data-header-bar
        className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 sm:h-20 sm:px-6 lg:px-8"
      >
        <Link
          href="/"
          className="flex shrink-0 items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo.png"
            alt={`${SITE_NAME} logo`}
            width={1907}
            height={447}
            loading="eager"
            fetchPriority="high"
            sizes="(min-width: 640px) 220px, 176px"
            className="h-10 w-auto object-contain object-left sm:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-muted-foreground transition-colors after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-brand-500 after:transition-transform after:duration-300 hover:text-foreground hover:after:scale-x-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 motion-reduce:after:transition-none"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <DownloadButtons className="*:py-2" />
        </div>

        <div className="hidden items-center md:flex lg:hidden">
          <Link href="/#download" className={cn(buttonVariants({ size: "default" }), "h-11 px-4")}>
            Download
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <MobileNav open={open} onClose={() => setOpen(false)} />
    </header>
  )
}
