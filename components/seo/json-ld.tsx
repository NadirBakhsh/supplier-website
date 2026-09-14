type JsonLdProps = {
  data: Record<string, unknown>
}

/** Renders a single `<script type="application/ld+json">` block. */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
