import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { SectionHeader } from "@/components/ui/section-header"
import { JsonLd } from "@/components/seo/json-ld"
import { FAQS, FAQ_BADGE, FAQ_HEADLINE } from "@/lib/content/faq"
import { faqJsonLd } from "@/lib/seo"

export function Faq() {
  return (
    <section id="faq" className="bg-white py-20 sm:py-28">
      <JsonLd data={faqJsonLd(FAQS)} />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeader badge={FAQ_BADGE} title={FAQ_HEADLINE} />

        <Accordion defaultValue={[0]} className="mt-12">
          {FAQS.map((faq, index) => (
            <AccordionItem key={faq.question} value={index} className="py-1">
              <AccordionTrigger className="text-base">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p>{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
