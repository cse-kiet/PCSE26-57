import Hero from "@/components/hero"
import Features from "@/components/features"
import Courses from "@/components/courses"
import AdminFeatures from "@/components/admin-features"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"
import Analytics from "@/components/analytics"
import TechnologiesSection from "@/components/technologies"
import Navbar from "@/components/navbar"
import ClientShowcase from "@/components/client"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar/>
      <Hero />
      <Features />
      <Courses />
      <AdminFeatures />
      <TechnologiesSection/>
      <Analytics />
      <ClientShowcase/>
      <ContactForm />
      <Footer />
    </div>
  )
}

