import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import systemImg from '../assets/gpcc_uniqe_image.jpg'

const highlights = [
  'Professional-grade materials — not big-box store kits',
  'Every layer applied for maximum adhesion and bond strength',
  'UV-stable topcoat for lasting color and gloss retention',
  'Engineered to handle Michigan\'s freeze-thaw climate',
]

const stats = [
  { value: '5',    label: 'Coating Layers' },
  { value: '1 Day', label: 'Installation' },
  { value: '10+yr', label: 'Lifespan' },
]

export default function MaterialSystem() {
  return (
    <section id="system" className="section bg-surface">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-text mb-5">Built to Last, Layer by Layer</h2>
            <p className="mb-8">
              A professional epoxy coating isn't a single product — it's a multi-layer system,
              engineered from the concrete up. Every layer plays a critical role in adhesion,
              durability, and finished appearance. That's what separates a GP Concrete Coatings
              installation from a kit you buy off a shelf.
            </p>

            {/* Stats row */}
            <div className="flex gap-6 mb-8 pb-8 border-b border-border">
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <p className="text-2xl font-bold text-primary leading-none mb-1">{value}</p>
                  <p className="text-xs text-muted">{label}</p>
                </div>
              ))}
            </div>

            {/* Bullets */}
            <ul className="flex flex-col gap-2.5 mb-8">
              {highlights.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.1 + i * 0.07 }}
                  className="flex items-start gap-3 bg-base border border-border rounded-xl px-4 py-3"
                >
                  <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" strokeWidth={2} />
                  <span className="text-sm text-text">{item}</span>
                </motion.li>
              ))}
            </ul>

            <a href="/#contact" className="btn btn--primary">
              Get a Free Quote
            </a>
          </motion.div>

          {/* Right — infographic */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Decorative glow behind image */}
            <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-3xl scale-75 translate-x-6 translate-y-6 pointer-events-none" />

            {/* Image */}
            <div className="relative w-full max-w-sm">
              <img
                src={systemImg}
                alt="The 5 layers of a professional epoxy floor coating system — prepared substrate, primer, base coat, decorative flake, and topcoat sealer"
                className="w-full rounded-2xl shadow-2xl ring-1 ring-primary/20"
              />

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-base border border-border rounded-2xl px-4 py-3 shadow-lg flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-primary font-bold text-sm">5</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-text leading-tight">Layer System</p>
                  <p className="text-xs text-muted">Built to last</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
