import { useState } from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Wrench, Star, Clock, BadgeCheck, HardHat } from 'lucide-react'

const reasons = [
  {
    icon:        ShieldCheck,
    title:       'Licensed & Insured',
    description: 'Fully licensed and insured in Michigan — giving you complete peace of mind on every job, residential or commercial.',
    featured:    true,
  },
  {
    icon:        Wrench,
    title:       'Professional Prep Process',
    description: 'We diamond grind every surface before coating — the most critical step most DIY kits and budget contractors skip entirely.',
  },
  {
    icon:        Star,
    title:       'Premium Materials',
    description: 'We use only professional-grade epoxy and polyaspartic systems — not big-box store kits — engineered for long-term performance.',
  },
  {
    icon:        Clock,
    title:       'Fast Turnaround',
    description: 'Most residential garage and basement projects are completed in a single day. We give you a firm timeline before work begins.',
  },
  {
    icon:        BadgeCheck,
    title:       'Warranty-Backed Work',
    description: 'Every installation is backed by a warranty on both materials and labor. We stand behind our work because we do it right.',
  },
  {
    icon:        HardHat,
    title:       'Experienced Installers',
    description: '25+ years of hands-on experience coating garages, basements, commercial spaces, and industrial facilities across Southeast Michigan.',
  },
]

export default function WhyChooseUs() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="about" className="section bg-surface">
      <div className="container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="eyebrow mb-4 block">Why Choose Us</span>
          <h2 className="text-text mb-4">
            Why Michigan Chooses GP Concrete Coatings
          </h2>
          <p className="max-w-2xl">
            We don't cut corners on prep, materials, or workmanship. Here's what sets us
            apart from every other coating contractor in Southeast Michigan.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, description, featured }, i) => {
            const showFeatured = featured && (hovered === null || hovered === i)
            return (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`card flex gap-5 items-start ${showFeatured ? 'card--featured border-primary/60' : ''}`}
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Icon size={20} className="text-primary" strokeWidth={1.75} />
              </div>
              <div>
                <h4 className="text-text mb-1.5">{title}</h4>
                <p className="text-sm">{description}</p>
              </div>
            </motion.div>
          )})}
        </div>

      </div>
    </section>
  )
}
