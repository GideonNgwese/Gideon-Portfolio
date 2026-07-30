import { SmoothScroll } from '@/components/providers/smooth-scroll'
import { CustomCursor } from '@/components/ui/custom-cursor'
import dynamic from 'next/dynamic'
import { PremiumNavbar } from '@/components/ui/premium-navbar'
import { CinematicHero } from '@/components/sections/cinematic-hero'
import { ImmersiveAbout } from '@/components/sections/immersive-about'
import { InteractiveSkills } from '@/components/sections/interactive-skills'
import { AppleProjects } from '@/components/sections/apple-projects'
import { CinematicExperience } from '@/components/sections/cinematic-experience'
import { ContentCreation } from '@/components/sections/content-creation'
import { AIShowcase } from '@/components/sections/ai-showcase'
import { CertificatesCarousel } from '@/components/sections/certificates-carousel'
import { InteractiveContact } from '@/components/sections/interactive-contact'
import { Footer } from '@/components/sections/footer'

// Lazy load heavy components
const UniverseBackground = dynamic(() => import('@/components/ui/universe-background').then(mod => ({ default: mod.UniverseBackground })), {
  loading: () => <div className="fixed inset-0 -z-10 bg-black" />,
})

export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-black">
        <CustomCursor />
        <UniverseBackground />
        <PremiumNavbar />
        <CinematicHero />
        <ImmersiveAbout />
        <InteractiveSkills />
        <AppleProjects />
        <CinematicExperience />
        <ContentCreation />
        <AIShowcase />
        <CertificatesCarousel />
        <InteractiveContact />
        <Footer />
      </main>
    </SmoothScroll>
  )
}
