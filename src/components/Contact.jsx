import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react'

const info = [
  {
    icon:  Phone,
    label: 'Phone',
    value: '(734) 519-2229',
    href:  'tel:+17345192229',
  },
  {
    icon:  Mail,
    label: 'Email',
    value: 'info@gpcc.goldcore.website',
    href:  'mailto:info@gpcc.goldcore.website',
  },
  {
    icon:  MapPin,
    label: 'Service Area',
    value: 'Southeast Michigan',
    href:  null,
  },
]

const services = [
  'Garage Epoxy Flooring',
  'Basement Epoxy Flooring',
  'Residential Concrete Coating',
  'Commercial Concrete Coating',
  'Industrial Concrete Coating',
  'Industrial Epoxy Flooring',
  'Not Sure / Other',
]

const empty = { name: '', phone: '', email: '', service: '', message: '' }

export default function Contact() {
  const [form,    setForm]    = useState(empty)
  const [sent,    setSent]    = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setSent(true)
      setLoading(false)
      setForm(empty)
    }, 800)
  }

  return (
    <section id="contact" className="section bg-base">
      <div className="container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="eyebrow mb-4 block">Contact Us</span>
          <h2 className="text-text mb-4">Get Your Free Quote</h2>
          <p className="max-w-xl">
            Fill out the form and we'll get back to you within one business day.
            Prefer to talk? Call us directly — we're happy to answer any questions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left — info + map */}
          <div className="flex flex-col gap-8">

            {/* Contact info */}
            <div className="flex flex-col gap-4">
              {info.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon size={17} className="text-primary" strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="text-xs text-muted uppercase tracking-wide font-medium mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} className="text-sm font-semibold text-text hover:text-primary transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-text">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="w-full h-72 rounded-2xl overflow-hidden border border-border shadow-sm">
              <iframe
                title="GP Concrete Coatings location — Livonia Michigan"
                src="https://maps.google.com/maps?q=Livonia,Michigan&t=&z=12&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>

          {/* Right — form */}
          <div className="bg-surface rounded-2xl p-8 border border-border">
            {sent ? (
              <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                <CheckCircle2 size={48} className="text-primary" strokeWidth={1.5} />
                <h3 className="text-text">Message Sent!</h3>
                <p className="text-sm max-w-xs">
                  Thanks for reaching out. We'll get back to you within one business day.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="btn btn--outline mt-2"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-text mb-1.5">Full Name *</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="John Smith"
                      className="input"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-text mb-1.5">Phone Number *</label>
                    <input
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="(734) 000-0000"
                      className="input"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-text mb-1.5">Email Address *</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="input"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-text mb-1.5">Service Needed</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="input"
                  >
                    <option value="">Select a service...</option>
                    {services.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-text mb-1.5">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your project — square footage, current condition, timeline..."
                    className="input resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn--primary btn--lg w-full justify-center mt-2"
                >
                  {loading ? 'Sending...' : 'Request Free Quote'}
                </button>

                <p className="text-center text-xs text-muted">
                  No spam. No obligation. We'll reach out within 1 business day.
                </p>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
