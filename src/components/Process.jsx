import { useState } from 'react'
import { motion } from 'framer-motion'
import { Drill, Hammer, PaintRoller, Sparkles, SlidersHorizontal, ShieldCheck } from 'lucide-react'

const steps = [
  {
    number:   '01',
    icon:     Drill,
    title:    'Grind It',
    description: 'We use professional diamond grinding equipment to open up the concrete surface and ensure a mechanical bond. This is the most critical step most DIY kits skip entirely.',
    featured: true,
  },
  {
    number: '02',
    icon:   Hammer,
    title:  'Repair It',
    description: 'Cracks, spalls, and surface imperfections are filled and leveled before any coating is applied. Your floor is only as good as the prep underneath.',
  },
  {
    number: '03',
    icon:   PaintRoller,
    title:  'Coat It',
    description: 'We apply the base coat — epoxy or polyaspartic depending on your system — evenly across the entire surface using professional equipment and technique.',
  },
  {
    number: '04',
    icon:   Sparkles,
    title:  'Flake It',
    description: 'Decorative color flakes are broadcast into the wet base coat for a finished look that\'s also functional — adding texture and slip resistance to the surface.',
  },
  {
    number: '05',
    icon:   SlidersHorizontal,
    title:  'Scrape It',
    description: 'Once cured, excess flakes are scraped off to create a smooth, consistent surface ready for the final seal coat.',
  },
  {
    number: '06',
    icon:   ShieldCheck,
    title:  'Seal It',
    description: 'A durable polyaspartic or urethane topcoat is applied to lock everything in — giving you a glossy, hard-wearing finish that protects against stains, UV, chemicals, and abrasion.',
  },
]

export default function Process() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="process" className="section bg-base">
      <div className="container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="eyebrow mb-4 block">How We Work</span>
          <h2 className="text-text mb-4">
            Our 6-Step Concrete Coating Process
          </h2>
          <p className="max-w-2xl">
            Great coatings start with great preparation. Here's exactly how we do it —
            no shortcuts, no skipped steps.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map(({ number, icon: Icon, title, description, featured }, i) => {
            const showFeatured = featured && (hovered === null || hovered === i)
            return (
            <motion.div
              key={number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`step-card relative ${showFeatured ? 'card--featured border-primary/60' : ''}`}
            >
              <span className="absolute top-4 right-5 text-6xl font-bold text-border select-none leading-none">
                {number}
              </span>
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Icon size={20} className="text-primary" strokeWidth={1.75} />
              </div>
              <h3 className="text-text mb-2">{title}</h3>
              <p className="text-sm relative z-10">{description}</p>
            </motion.div>
          )})}
        </div>

      </div>
    </section>
  )
}
