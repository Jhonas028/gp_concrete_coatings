import { useState } from 'react'
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
        <div className="mb-10">
          <span className="eyebrow mb-4 block">FAQ</span>
          <h2 className="text-text mb-4">Frequently Asked Questions</h2>
          <p className="max-w-2xl">
            Everything you need to know about epoxy and polyaspartic concrete floor coatings
            in Michigan — answered straight.
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl divide-y divide-border border-t border-border">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <div key={i} className="faq-item">
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-start justify-between gap-4 py-5 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className={`text-sm font-semibold leading-snug transition-colors duration-150
                    ${isOpen ? 'text-primary' : 'text-text group-hover:text-primary'}`}>
                    {faq.q}
                  </span>
                  <span className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center
                    border transition-all duration-150 mt-0.5
                    ${isOpen
                      ? 'bg-primary border-primary text-white'
                      : 'border-border text-muted group-hover:border-primary group-hover:text-primary'
                    }`}>
                    {isOpen
                      ? <ChevronUp   size={13} strokeWidth={2.5} />
                      : <ChevronDown size={13} strokeWidth={2.5} />
                    }
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out
                    ${isOpen ? 'max-h-96 pb-5' : 'max-h-0'}`}
                >
                  <p className="text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
