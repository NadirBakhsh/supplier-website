"use client"

import { SectionHeader } from "@/components/ui/section-header"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { PROBLEM_BADGE, PROBLEM_HEADLINE, PROBLEM_SUBHEADLINE, PROBLEMS } from "@/lib/content/problems"

export function ProblemSection() {
  const containerRef = useScrollReveal(".problem-card")

  return (
    <section id="problem" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={PROBLEM_BADGE}
          title={PROBLEM_HEADLINE}
          description={PROBLEM_SUBHEADLINE}
        />

        <div
          ref={containerRef}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {PROBLEMS.map((problem) => (
            <div
              key={problem.title}
              className="problem-card flex flex-col gap-4 rounded-2xl border border-border bg-muted/40 p-6 transition-colors hover:border-brand-200 hover:bg-brand-50/60"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-brand-600 ring-1 ring-border">
                <problem.icon className="h-5 w-5" />
              </span>
              <h3 className="text-base font-semibold text-foreground">{problem.title}</h3>
              <p className="text-sm leading-6 text-muted-foreground">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
