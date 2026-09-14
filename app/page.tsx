import { Hero } from "@/components/sections/hero"
import { ProblemSection } from "@/components/sections/problem-section"
import { SolutionSection } from "@/components/sections/solution-section"
import { HowItWorks } from "@/components/sections/how-it-works"
import { FeatureShowcase } from "@/components/sections/feature-showcase"
import { MobileScreenCarousel } from "@/components/sections/mobile-screen-carousel"
import { Benefits } from "@/components/sections/benefits"
import { ComparisonSection } from "@/components/sections/comparison-section"
import { AudienceSection } from "@/components/sections/audience-section"
import { TrustSection } from "@/components/sections/trust-section"
import { Faq } from "@/components/sections/faq"
import { FinalCta } from "@/components/sections/final-cta"

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <FeatureShowcase />
      <MobileScreenCarousel />
      <Benefits />
      <ComparisonSection />
      <AudienceSection />
      <TrustSection />
      <Faq />
      <FinalCta />
    </>
  )
}
