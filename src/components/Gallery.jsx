import { motion } from 'framer-motion'
import img1 from '../assets/gpcc_img1.jpg'
import img2 from '../assets/gpcc_img2.jpg'
import img3 from '../assets/gpcc_img3.jpg'
import img4 from '../assets/gpcc_img4.jpg'
import img5 from '../assets/gpcc_img5.jpg'
import img6 from '../assets/gpcc_img6.jpg'

const projects = [
  { src: img1, alt: 'Polished commercial concrete floor coating Michigan',      label: 'Commercial' },
  { src: img2, alt: 'Decorative flake garage epoxy floor coating Michigan',     label: 'Garage Epoxy' },
  { src: img3, alt: 'Smooth solid epoxy basement floor coating Michigan',       label: 'Basement Epoxy' },
  { src: img4, alt: 'Residential patio decorative concrete coating Michigan',   label: 'Residential' },
  { src: img5, alt: 'Industrial facility concrete floor coating Michigan',      label: 'Industrial Concrete' },
  { src: img6, alt: 'Blue industrial epoxy hallway floor coating Michigan',     label: 'Industrial Epoxy' },
]

export default function Gallery() {
  return (
    <section id="projects" className="section bg-surface">
      <div className="container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="eyebrow mb-4 block">Our Work</span>
          <h2 className="text-text mb-4">Project Gallery</h2>
          <p className="max-w-2xl">
            A look at the floors we've transformed — garages, basements, commercial spaces,
            and industrial facilities across Southeast Michigan.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative group overflow-hidden rounded-2xl aspect-[4/3] bg-border"
            >
              <img
                src={project.src}
                alt={project.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent
                opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <span className="text-white text-sm font-semibold">{project.label}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
