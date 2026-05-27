import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'

export default function CTA() {
  return (
    <section className="relative py-24 md:py-32 bg-canvas overflow-hidden">

      {/* Decorative glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-150 h-150 rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container relative z-10 text-center"
      >

        {/* Headline */}
        <h2 className="text-white mb-6 max-w-3xl mx-auto">
          Ready to Transform Your Concrete Floor?
        </h2>

        {/* Persuasive copy */}
        <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-4">
          Stop putting it off. Whether it's your garage, basement, or commercial facility —
          GP Concrete Coatings delivers a professional result that lasts, looks great, and
          adds real value to your property.
        </p>
        <p className="text-gray-500 text-sm mb-10">
          No pressure. No obligation. Just a straightforward quote from a team that knows concrete.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <a href="#contact" className="btn btn--primary btn--lg">
            Get Your Free Quote
            <ArrowRight size={16} strokeWidth={2.5} />
          </a>
          <a href="tel:+17345192229" className="btn btn--lg btn--dark-outline">
            <Phone size={15} strokeWidth={2.5} />
            (734) 519-2229
          </a>
        </div>

        {/* Subtle tagline */}
        <p className="text-gray-600 text-xs uppercase tracking-widest">
          Licensed &amp; Insured · Southeast Michigan · Free Estimates
        </p>

      </motion.div>
    </section>
  )
}
