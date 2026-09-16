import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { DownloadButtons } from "@/components/ui/download-buttons"
import { PhoneMockup } from "@/components/product/phone-mockup"
import { cn } from "@/lib/utils"

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-700 via-brand-600 to-brand-900 py-20 text-white sm:py-28">
      <div
        aria-hidden="true"
        className="absolute -top-20 left-1/4 h-80 w-80 rounded-full bg-white/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-brand-green-500/15 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 md:grid-cols-[1.1fr_auto] lg:px-8">
        <div className="flex flex-col items-start gap-6 text-left">
          <h2 className="max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Ready to Simplify the Way You Manage Your Business?
          </h2>
          <p className="max-w-lg text-base text-white/75 sm:text-lg">
            Bring your customers, orders, and delivery workflow into one simple supplier
            management experience.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <DownloadButtons tone="dark" />
          </div>
          <Link
            href="/#how-it-works"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "group px-0 text-white hover:bg-transparent hover:text-white/80"
            )}
          >
            See How It Works
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mx-auto w-full max-w-[240px]">
          <PhoneMockup size="md">
            <Image
              src="/screenshots/supplier/supplier-menu-screen.png"
              alt="4Supplier supplier menu screen"
              fill
              sizes="240px"
              className="object-cover object-top"
            />
          </PhoneMockup>
        </div>
      </div>
    </section>
  )
}
