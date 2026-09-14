import { SectionHeader } from "@/components/ui/section-header"
import {
  AUDIENCE_BADGE,
  AUDIENCE_CATEGORIES,
  AUDIENCE_HEADLINE,
  AUDIENCE_SUBHEADLINE,
} from "@/lib/content/audience"

export function AudienceSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={AUDIENCE_BADGE}
          title={AUDIENCE_HEADLINE}
          description={AUDIENCE_SUBHEADLINE}
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {AUDIENCE_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="flex flex-col items-center gap-4 rounded-2xl border border-border p-6 text-center transition-colors hover:border-brand-200 hover:bg-brand-50/50"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                <category.icon className="h-6 w-6" />
              </span>
              <h3 className="text-base font-semibold text-foreground">{category.title}</h3>
              <p className="text-sm leading-6 text-muted-foreground">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
