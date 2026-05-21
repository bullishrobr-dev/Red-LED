import Layout from '@/components/Layout'
import HeroSection from '@/sections/HeroSection'
import WhatIsSection from '@/sections/WhatIsSection'
import SkinBenefitsSection from '@/sections/SkinBenefitsSection'
import BodySection from '@/sections/BodySection'
import NASASection from '@/sections/NASASection'
import HowItWorksSection from '@/sections/HowItWorksSection'
import PainBenefitsSection from '@/sections/PainBenefitsSection'
import WavelengthSection from '@/sections/WavelengthSection'
import ClinicalEvidenceSection from '@/sections/ClinicalEvidenceSection'
import ROISection from '@/sections/ROISection'
import ProfessionalsSection from '@/sections/ProfessionalsSection'
import FAQSection from '@/sections/FAQSection'
import ContactSection from '@/sections/ContactSection'

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <WhatIsSection />
      <SkinBenefitsSection />
      <BodySection />
      <NASASection />
      <HowItWorksSection />
      <PainBenefitsSection />
      <WavelengthSection />
      <ClinicalEvidenceSection />
      <ROISection />
      <ProfessionalsSection />
      <FAQSection />
      <ContactSection />
    </Layout>
  )
}
