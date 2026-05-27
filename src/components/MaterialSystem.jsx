import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import systemImg from '../assets/gpcc_uniqe_image.jpg'

const highlights = [
  'Professional-grade materials — not big-box store kits',
  'Every layer applied for maximum adhesion and bond strength',
  'UV-stable topcoat for lasting color and gloss retention',
  'Engineered to handle Michigan\'s freeze-thaw climate',
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
            <span className="eyebrow mb-4 block">The System</span>
            <h2 className="text-text mb-6">Built to Last, Layer by Layer</h2>
            <p className="mb-6">
              A professional epoxy coating isn't a single product — it's a multi-layer system,
              engineered from the concrete up. Every layer plays a critical role in adhesion,
              durability, and finished appearance. That's what separates a GP Concrete Coatings
              installation from a kit you buy off a shelf.
            </p>

            <ul className="flex flex-col gap-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 size={17} className="text-primary shrink-0 mt-0.5" strokeWidth={2} />
                  <span className="text-text">{item}</span>
                </li>
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
            className="flex justify-center lg:justify-end"
          >
            <img
              src={systemImg}
              alt="The 5 layers of a professional epoxy floor coating system — prepared substrate, primer, base coat, decorative flake, and topcoat sealer"
              className="w-full max-w-sm rounded-2xl shadow-lg"
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
