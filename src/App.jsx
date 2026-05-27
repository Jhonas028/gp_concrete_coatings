import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import AreasServed from './components/AreasServed'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Process />
        <Testimonials />
        <AreasServed />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

function BlogPage() {
  return (
    <main className="pt-20 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-text mb-3">Blog Coming Soon</h2>
        <p className="text-muted mb-6">We're working on helpful content for Michigan homeowners.</p>
        <a href="/" className="btn btn--primary">Back to Home</a>
      </div>
    </main>
  )
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/"     element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </>
  )
}

export default App
