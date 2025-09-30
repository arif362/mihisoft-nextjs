import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import ProjectsSection from '@/components/ProjectsSection'
import ChairmanMessageSection from '@/components/ChairmanMessageSection'
import TeamSection from '@/components/TeamSection'
import CareerSection from '@/components/CareerSection'
import ClientsSection from '@/components/ClientsSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="boxed_wrapper">
      <Header />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ChairmanMessageSection />
      <ServicesSection />
      <ProjectsSection />
      <TeamSection />
      <CareerSection />
      <ClientsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}