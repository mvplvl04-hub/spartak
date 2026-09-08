import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { AdvantagesSection } from '@/components/advantages-section'
import { TrustSection } from '@/components/trust-section'
import { ContactsSection } from '@/components/contacts-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <AdvantagesSection />
        <TrustSection />
        <ContactsSection />
      </main>
      <SiteFooter />
    </>
  )
}
