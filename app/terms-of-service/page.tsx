import type { Metadata } from "next"
import { LegalPage } from "@/components/legal/legal-page"
import { LEGAL_LAST_UPDATED, TERMS_SECTIONS } from "@/lib/content/legal"
import { SITE_NAME } from "@/lib/content/site"

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `The terms that govern access to and use of the ${SITE_NAME} mobile application.`,
  alternates: {
    canonical: "/terms-of-service",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsOfServicePage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      intro={`These Terms & Conditions govern access to and use of the ${SITE_NAME} mobile application across the supplier, customer, and delivery-person portals.`}
      lastUpdated={LEGAL_LAST_UPDATED}
      sections={TERMS_SECTIONS}
    />
  )
}
