import type { Metadata } from "next"
import { LegalPage } from "@/components/legal/legal-page"
import { LEGAL_LAST_UPDATED, PRIVACY_POLICY_SECTIONS } from "@/lib/content/legal"
import { SITE_NAME } from "@/lib/content/site"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${SITE_NAME} collects, uses, and protects information for suppliers, customers, and delivery persons.`,
  alternates: {
    canonical: "/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro={`This Privacy Policy explains how ${SITE_NAME} collects, uses, discloses, and protects information across the supplier, customer, and delivery-person portals.`}
      lastUpdated={LEGAL_LAST_UPDATED}
      sections={PRIVACY_POLICY_SECTIONS}
    />
  )
}
