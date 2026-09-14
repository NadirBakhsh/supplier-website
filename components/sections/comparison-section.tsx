import { Check, X } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import {
  COMPARISON_BADGE,
  COMPARISON_HEADLINE,
  COMPARISON_SUBHEADLINE,
  WITHOUT_APP_POINTS,
  WITH_APP_POINTS,
} from "@/lib/content/comparison"

export function ComparisonSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={COMPARISON_BADGE}
          title={COMPARISON_HEADLINE}
          description={COMPARISON_SUBHEADLINE}
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-border bg-white p-8">
            <h3 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
              Without 4Supplier
            </h3>
            <ul className="mt-6 flex flex-col gap-4">
              {WITHOUT_APP_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-50 text-outstanding">
                    <X className="h-3 w-3" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative rounded-3xl border border-brand-200 bg-brand-900 p-8 text-white shadow-xl shadow-brand-900/20">
            <h3 className="text-sm font-semibold tracking-wide text-brand-200 uppercase">
              With 4Supplier
            </h3>
            <ul className="mt-6 flex flex-col gap-4">
              {WITH_APP_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-white/90">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-green-500/20 text-brand-green-500">
                    <Check className="h-3 w-3" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
