import { cn } from "@/lib/utils"

type SectionHeaderProps = {
  badge?: string
  title: string
  description?: string
  align?: "left" | "center"
  as?: "h2" | "h3"
  className?: string
  titleClassName?: string
}

export function SectionHeader({
  badge,
  title,
  description,
  align = "center",
  as: Heading = "h2",
  className,
  titleClassName,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {badge ? (
        <span className="inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold tracking-wide text-brand-700 uppercase">
          {badge}
        </span>
      ) : null}
      <Heading
        className={cn(
          "max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl",
          titleClassName
        )}
      >
        {title}
      </Heading>
      {description ? (
        <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}
