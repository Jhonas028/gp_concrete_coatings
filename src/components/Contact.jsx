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
          className="mb-10"
        >
          <span className="eyebrow mb-4 block">Contact Us</span>
          <h2 className="text-text mb-4">Get Your Free Quote</h2>
          <p className="max-w-xl">
            Fill out the form and we'll get back to you within one business day.
            Prefer to talk? Call us directly — we're happy to answer any questions.
          </p>
        </motion.div>

        {/* Contact info — horizontal row */}
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {info.map(({ icon: Icon, label, value, href }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-center gap-4 bg-surface border border-border rounded-xl p-4"
            >
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
            </motion.div>
          ))}
        </div>

        {/* Map + Form — side by side */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden border border-border shadow-sm"
            style={{ height: '100%', minHeight: '420px' }}
          >
            <iframe
              title="GP Concrete Coatings location — Livonia Michigan"
              src="https://maps.google.com/maps?q=Livonia,Michigan&t=&z=12&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block', minHeight: '420px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-surface rounded-2xl p-8 border border-border"
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center justify-center text-center py-12 gap-4"
              >
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
              </motion.div>
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

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                  className="btn btn--primary btn--lg w-full justify-center mt-2"
                >
                  {loading ? 'Sending...' : 'Request Free Quote'}
                </motion.button>

                <p className="text-center text-xs text-muted">
                  No spam. No obligation. We'll reach out within 1 business day.
                </p>

              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
