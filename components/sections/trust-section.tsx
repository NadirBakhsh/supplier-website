import { MessageSquareQuote } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import {
  TRUST_BADGE,
  TRUST_HEADLINE,
  TRUST_PILLARS,
  TRUST_PLACEHOLDER_NOTE,
  TRUST_SUBHEADLINE,
} from "@/lib/content/trust"

export function TrustSection() {
  return (
    <section className="bg-muted/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={TRUST_BADGE}
          title={TRUST_HEADLINE}
          description={TRUST_SUBHEADLINE}
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {TRUST_PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-white p-6"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <pillar.icon className="h-5 w-5" />
              </span>
              <h3 className="text-base font-semibold text-foreground">{pillar.title}</h3>
              <p className="text-sm leading-6 text-muted-foreground">{pillar.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-dashed border-border bg-white/60 p-6 text-sm text-muted-foreground">
          <MessageSquareQuote className="mt-0.5 h-5 w-5 shrink-0 text-brand-300" />
          <p>{TRUST_PLACEHOLDER_NOTE}</p>
        </div>
      </div>
    </section>
  )
}
