import { useState } from 'react'
import { motion } from 'framer-motion'
import { Drill, Hammer, PaintRoller, Sparkles, SlidersHorizontal, ShieldCheck } from 'lucide-react'
import mascot from '../assets/gcpp_mascott.jpeg'

const steps = [
  { number: '1', icon: Drill,             title: 'Grind It',   description: 'We diamond-grind the concrete surface for maximum coating adhesion.',    featured: true  },
  { number: '2', icon: Hammer,            title: 'Repair It',  description: 'Cracks and imperfections are filled and repaired for a smooth base.',     featured: false },
  { number: '3', icon: PaintRoller,       title: 'Coat It',    description: 'Premium base coats are applied for long-lasting durability and strength.', featured: false },
  { number: '4', icon: Sparkles,          title: 'Flake It',   description: 'Decorative flakes are broadcast to create texture and a unique finish.',   featured: false },
  { number: '5', icon: SlidersHorizontal, title: 'Scrape It',  description: 'Excess flakes are scraped off for a perfectly smooth, even surface.',      featured: false },
  { number: '6', icon: ShieldCheck,       title: 'Seal It',    description: 'A UV-stable topcoat seals and protects your new floor for 10+ years.',     featured: false },
]

function StepNode({ step, index, hovered, setHovered }) {
  const { icon: Icon, number, title, description, featured } = step
  const showActive = featured
    ? (hovered === null || hovered === index)
    : hovered === index

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className="flex flex-col items-center text-center gap-2 flex-1 cursor-default"
    >
      {/* Circle */}
      <div className={`w-14 h-14 rounded-full flex items-center justify-center border-2
        transition-all duration-300
        ${showActive
          ? 'bg-primary border-primary shadow-[0_8px_24px_rgba(28,0,219,0.35)] scale-110'
          : 'bg-base border-border'
        }`}
      >
        <Icon
          size={20}
          strokeWidth={1.75}
          className={`transition-colors duration-300 ${showActive ? 'text-white' : 'text-primary'}`}
        />
      </div>

      {/* Step label */}
      <span className={`text-[0.6rem] font-bold uppercase tracking-widest transition-colors duration-300
        ${showActive ? 'text-primary' : 'text-muted'}`}>
        Step {number}
      </span>

      {/* Title */}
      <h4 className={`font-semibold text-xs leading-tight transition-colors duration-300
        ${showActive ? 'text-primary' : 'text-text'}`}>
        {title}
      </h4>

      {/* Description */}
      <p className={`text-[0.7rem] leading-relaxed max-w-28 transition-colors duration-300
        ${showActive ? 'text-text' : 'text-muted'}`}>
        {description}
      </p>
    </motion.div>
  )
}

function Connector() {
  return (
    <div className="flex items-start pt-7 px-0.5 shrink-0 w-6">
      <div className="w-full border-t-2 border-dashed border-border" />
    </div>
  )
}

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
          <h2 className="text-text mb-4">Our 6-Step Concrete Coating Process</h2>
          <p className="max-w-2xl">
            Great coatings start with great preparation. Here's exactly how we do it —
            no shortcuts, no skipped steps.
          </p>
        </motion.div>

        {/* Mascot + Timeline */}
        <div className="flex gap-8 lg:gap-10 items-center">

          {/* Mascot */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:flex shrink-0 w-64 items-end relative rounded-3xl"
          >
            <img
              src={mascot}
              alt="GP Concrete Coatings mascot"
              className="relative w-full h-full object-contain object-bottom"
            />
          </motion.div>

          {/* Single-row timeline */}
          <div className="flex-1 flex items-start overflow-x-auto pt-3 pb-2">
            {steps.map((step, i) => (
              <div key={step.number} className="flex items-start flex-1 min-w-24">
                <StepNode
                  step={step}
                  index={i}
                  hovered={hovered}
                  setHovered={setHovered}
                />
                {i < 5 && <Connector />}
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
