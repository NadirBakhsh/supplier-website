import type { LegalSection } from "@/lib/content/legal"

function renderBody(body: string) {
  const blocks = body.split(/\n\n+/).filter(Boolean)

  return blocks.map((block, blockIndex) => {
    const lines = block.split("\n").filter(Boolean)
    const isList = lines.length > 0 && lines.every((line) => line.trim().startsWith("•"))

    if (isList) {
      return (
        <ul key={blockIndex} className="my-4 flex flex-col gap-2">
          {lines.map((line, lineIndex) => (
            <li key={lineIndex} className="flex gap-2 text-sm leading-6 text-muted-foreground">
              <span className="text-brand-400">•</span>
              <span>{line.replace(/^•\s*/, "")}</span>
            </li>
          ))}
        </ul>
      )
    }

    return (
      <p key={blockIndex} className="text-sm leading-7 text-muted-foreground">
        {lines.map((line, lineIndex) => (
          <span key={lineIndex}>
            {line}
            {lineIndex < lines.length - 1 ? <br /> : null}
          </span>
        ))}
      </p>
    )
  })
}

type LegalPageProps = {
  title: string
  intro: string
  lastUpdated: string
  sections: LegalSection[]
}

export function LegalPage({ title, intro, lastUpdated, sections }: LegalPageProps) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <header className="flex flex-col gap-3 border-b border-border pb-8">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h1>
        <p className="text-sm text-muted-foreground">Last updated: {lastUpdated}</p>
        <p className="text-base text-muted-foreground">{intro}</p>
      </header>

      <div className="mt-10 flex flex-col gap-10">
        {sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-lg font-semibold text-foreground">{section.heading}</h2>
            <div className="mt-3 flex flex-col gap-3">
              {section.body ? renderBody(section.body) : null}
            </div>
          </section>
        ))}
      </div>
    </article>
  )
}
