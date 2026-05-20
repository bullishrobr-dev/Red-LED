import Layout from '@/components/Layout'
import HeroSection from '@/sections/HeroSection'
import WhatIsSection from '@/sections/WhatIsSection'
import HowItWorksSection from '@/sections/HowItWorksSection'
import SkinBenefitsSection from '@/sections/SkinBenefitsSection'
import PainBenefitsSection from '@/sections/PainBenefitsSection'
import WavelengthSection from '@/sections/WavelengthSection'
import ClinicalEvidenceSection from '@/sections/ClinicalEvidenceSection'
import FAQSection from '@/sections/FAQSection'
import ContactSection from '@/sections/ContactSection'

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <WhatIsSection />
      <HowItWorksSection />
      <SkinBenefitsSection />
      <PainBenefitsSection />
      <WavelengthSection />
      <ClinicalEvidenceSection />
      <FAQSection />
      <ContactSection />
    </Layout>
  )
}
