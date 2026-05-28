import Layout from '@/components/Layout'
import ScrollDots from '@/components/ScrollDots'
import HeroSection from '@/sections/HeroSection'
import ScienceCredentialsSection from '@/sections/ScienceCredentialsSection'
import HowItWorksSection from '@/sections/HowItWorksSection'
import SkinDiscoverySection from '@/sections/SkinDiscoverySection'
import ModernSkinSection from '@/sections/ModernSkinSection'
import BeforeAfterSection from '@/sections/BeforeAfterSection'
import CelluliteBodySection from '@/sections/CelluliteBodySection'
import PainAndCancerSection from '@/sections/PainAndCancerSection'
import CompetitiveFramingSection from '@/sections/CompetitiveFramingSection'
import ClinicalEvidenceSection from '@/sections/ClinicalEvidenceSection'
import ExpertQuotesSection from '@/sections/ExpertQuotesSection'
import NasaDetailSection from '@/sections/NasaDetailSection'
import NobelDetailSection from '@/sections/NobelDetailSection'
import FDADetailSection from '@/sections/FDADetailSection'
import TreatmentCostSection from '@/sections/TreatmentCostSection'
import FAQSection from '@/sections/FAQSection'
import PainFAQSection from '@/sections/PainFAQSection'
import ContactSection from '@/sections/ContactSection'

export default function Home() {
  return (
    <>
      <ScrollDots />
      <Layout>
        <HeroSection />
        <ScienceCredentialsSection />
        <HowItWorksSection />
        <SkinDiscoverySection />
        <ModernSkinSection />
        <BeforeAfterSection />
        <CelluliteBodySection />
        <PainAndCancerSection />
        <CompetitiveFramingSection />
        <ClinicalEvidenceSection />
        <ExpertQuotesSection />
        <NasaDetailSection />
        <NobelDetailSection />
        <FDADetailSection />
        <TreatmentCostSection />
        <FAQSection />
        <PainFAQSection />
        <ContactSection />
      </Layout>
    </>
  )
}
