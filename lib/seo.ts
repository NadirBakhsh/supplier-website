import { OPERATOR_NAME, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/content/site"
import { SOCIAL_LINKS } from "@/lib/constants/links"
import type { FaqItem } from "@/lib/content/faq"

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: OPERATOR_NAME,
    url: "https://nsians.com",
    logo: `${SITE_URL}/logo.png`,
    sameAs: [SOCIAL_LINKS.linkedin, SOCIAL_LINKS.facebook, SOCIAL_LINKS.instagram],
  }
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  }
}

export function softwareApplicationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE_NAME,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Android, iOS",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    image: `${SITE_URL}/logo.png`,
    publisher: {
      "@type": "Organization",
      name: OPERATOR_NAME,
    },
  }
}

export function faqJsonLd(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}
