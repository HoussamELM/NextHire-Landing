import { ErrorBoundary } from "@/components/ErrorBoundary"
import { SEO } from "@/components/SEO"
import { Header } from "@/components/Header"
import { HeroSection } from "@/sections/HeroSection"
import { AboutSection } from "@/sections/AboutSection"
import { ServicesSection } from "@/sections/ServicesSection"
import { HowItWorksSection } from "@/sections/HowItWorksSection"
import { WhyChooseUsSection } from "@/sections/WhyChooseUsSection"
import { TestimonialsSection } from "@/sections/TestimonialsSection"
import { CTASection } from "@/sections/CTASection"
import { Footer } from "@/sections/Footer"
import { ScrollToTop } from "@/components/ScrollToTop"

function App() {
  return (
    <ErrorBoundary>
      <SEO />
      <div className="min-h-screen bg-background custom-scrollbar">
        <Header />
        <main role="main">
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <HowItWorksSection />
          <WhyChooseUsSection />
          <TestimonialsSection />
          <CTASection />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </ErrorBoundary>
  )
}

export default App
