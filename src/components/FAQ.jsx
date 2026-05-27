import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    q: 'How long does an epoxy garage floor coating last in Michigan?',
    a: 'With proper installation and regular maintenance, a professionally installed epoxy or polyaspartic garage floor coating lasts 10–20 years. Michigan\'s freeze-thaw cycles make professional-grade diamond grinding prep essential — which is standard on every GP Concrete Coatings job.',
  },
  {
    q: 'What\'s the difference between epoxy and polyaspartic floor coatings?',
    a: 'Epoxy is a proven, durable system ideal for most residential applications. Polyaspartic is a newer, faster-curing coating that is 100% UV stable, more flexible, and performs better in temperature extremes — making it especially well-suited to Michigan garages. We offer both and will recommend the right system for your project.',
  },
  {
    q: 'How long does installation take?',
    a: 'Most standard garage floor coatings are completed in a single day. Larger commercial and industrial projects may take 2–5 days. We give you a firm timeline before work begins.',
  },
  {
    q: 'Can you coat a floor that has cracks or stains?',
    a: 'Yes. Surface repair is part of our standard process. We fill cracks and spalls before coating so the finished surface looks clean and the coating bonds properly.',
  },
  {
    q: 'Do I need to move everything out of my garage?',
    a: 'Yes — the floor needs to be fully clear before we begin. We recommend removing all vehicles, items, and shelving prior to our arrival. We\'ll confirm prep requirements when you book.',
  },
  {
    q: 'Do you offer a warranty?',
    a: 'Yes. GP Concrete Coatings stands behind its work with a warranty on both materials and labor. Contact us for full warranty details.',
  },
  {
    q: 'How much does concrete floor coating cost in Michigan?',
    a: 'Pricing depends on square footage, concrete condition, and the coating system used. A standard 2-car garage typically ranges from $1,800 to $3,500. We offer free on-site estimates with transparent, itemized pricing.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  const toggle = (i) => setOpen(open === i ? null : i)

  return (
    <section id="faq" className="section bg-surface">
      <div className="container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-text mb-4">Frequently Asked Questions</h2>
          <p className="max-w-2xl">
            Everything you need to know about epoxy and polyaspartic concrete floor coatings
            in Michigan — answered straight.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="max-w-3xl border-t border-border">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
                className="faq-item"
              >
                <motion.button
                  onClick={() => toggle(i)}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.15 }}
                  className="w-full flex items-start justify-between gap-4 py-5 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className={`text-sm font-semibold leading-snug transition-colors duration-150
                    ${isOpen ? 'text-primary' : 'text-text group-hover:text-hover'}`}>
                    {faq.q}
                  </span>
                  <span className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center
                    border transition-all duration-150 mt-0.5
                    ${isOpen
                      ? 'bg-primary border-primary text-white'
                      : 'border-border text-muted group-hover:border-hover group-hover:text-hover'
                    }`}>
                    {isOpen
                      ? <ChevronUp   size={13} strokeWidth={2.5} />
                      : <ChevronDown size={13} strokeWidth={2.5} />
                    }
                  </span>
                </motion.button>

                {/* Animated answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm leading-relaxed pb-5">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
