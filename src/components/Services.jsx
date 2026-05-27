import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import img1 from '../assets/gpcc_img1.jpg'
import img2 from '../assets/gpcc_img2.jpg'
import img3 from '../assets/gpcc_img3.jpg'
import img4 from '../assets/gpcc_img4.jpg'
import img5 from '../assets/gpcc_img5.jpg'
import img6 from '../assets/gpcc_img6.jpg'

const BASE = 'https://app.seomatic.ai/dashboard/chat'

const services = [
  {
    title:       'Residential Concrete Coating',
    description: 'Transform your home\'s concrete surfaces with durable, low-maintenance coatings designed for long-lasting protection and modern curb appeal. Ideal for patios, walkways, basements, and interior floors.',
    image:       img4,
    imageAlt:    'Residential patio decorative flake concrete coating Michigan',
    href:        `${BASE}#residential`,
    featured:    false,
  },
  {
    title:       'Basement Epoxy Flooring',
    description: 'Turn your unfinished basement into a clean, moisture-resistant, usable space. Our coatings seal out humidity and give you a floor that\'s easy to clean and impossible to ignore.',
    image:       img3,
    imageAlt:    'Smooth solid epoxy basement floor coating Michigan',
    href:        `${BASE}#basement`,
    featured:    false,
  },
  {
    title:       'Garage Epoxy Flooring',
    description: 'Upgrade your garage with a professional epoxy floor coating built to withstand vehicle traffic, oil spills, road salt, and heavy daily use while maintaining a sleek finish.',
    image:       img2,
    imageAlt:    'Decorative flake garage epoxy floor coating Michigan',
    href:        `${BASE}#garage`,
    featured:    true,
  },
  {
    title:       'Commercial Concrete Coating',
    description: 'Enhance commercial spaces with premium coating systems designed for retail stores, offices, showrooms, and other high-traffic environments requiring durability and professional presentation.',
    image:       img1,
    imageAlt:    'Polished commercial concrete floor coating Michigan',
    href:        `${BASE}#commercial`,
    featured:    false,
  },
  {
    title:       'Industrial Concrete Coating',
    description: 'Protect industrial facilities with heavy-duty coating systems engineered to handle machinery, chemicals, impact, and demanding operational environments.',
    image:       img5,
    imageAlt:    'Industrial facility epoxy floor coating Michigan',
    href:        `${BASE}#industrial-concrete`,
    featured:    false,
  },
  {
    title:       'Industrial Epoxy Flooring',
    description: 'Seamless, high-performance epoxy surfaces for manufacturing plants, warehouses, and industrial workspaces that require superior strength and long-term reliability.',
    image:       img6,
    imageAlt:    'Blue industrial epoxy hallway floor coating Michigan',
    href:        `${BASE}#industrial-epoxy`,
    featured:    false,
  },
]

export default function Services() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="services" className="section bg-base">
      <div className="container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-text mb-4">
            Concrete Coating Services in Michigan
          </h2>
          <p className="max-w-2xl">
            From single-car garages to full commercial warehouse floors, we deliver
            professional-grade coatings that protect your concrete and elevate your space.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => {
            const showFeatured = svc.featured
              ? (hovered === null || hovered === i)
              : hovered === i
            return (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`card--service flex flex-col ${showFeatured ? 'card--featured' : ''}`}
            >
              {/* Image */}
              <div className="w-full h-44 rounded-lg overflow-hidden mb-5">
                <img
                  src={svc.image}
                  alt={svc.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title */}
              <h3 className={`mb-2 ${showFeatured ? 'text-white' : 'text-text'}`}>{svc.title}</h3>

              {/* Description */}
              <p className={`text-sm flex-1 mb-5 ${showFeatured ? 'text-white/80' : ''}`}>{svc.description}</p>

              {/* CTA */}
              {showFeatured ? (
                <a
                  href={svc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--lg bg-hover text-white hover:bg-hover-lt justify-center
                    hover:shadow-[0_0_20px_rgba(204,0,0,0.4)] hover:-translate-y-px transition-all duration-200"
                >
                  Learn More
                  <ArrowRight size={14} strokeWidth={2.5} />
                </a>
              ) : (
                <a
                  href={svc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium underline underline-offset-4
                    transition-colors duration-150 group text-primary hover:text-hover"
                >
                  Learn More
                  <ArrowRight
                    size={13}
                    strokeWidth={2.5}
                    className="group-hover:translate-x-1 transition-transform duration-150"
                  />
                </a>
              )}
            </motion.div>
          )})}
        </div>

      </div>
    </section>
  )
}
