import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import img1 from '../assets/gpcc_img1.jpg'
import img2 from '../assets/gpcc_img2.jpg'
import img3 from '../assets/gpcc_img3.jpg'
import img4 from '../assets/gpcc_img4.jpg'
import img5 from '../assets/gpcc_img5.jpg'
import img6 from '../assets/gpcc_img6.jpg'

const projects = [
  { src: img1, alt: 'Polished commercial concrete floor coating Michigan',    label: 'Commercial' },
  { src: img2, alt: 'Decorative flake garage epoxy floor coating Michigan',   label: 'Garage Epoxy' },
  { src: img3, alt: 'Smooth solid epoxy basement floor coating Michigan',     label: 'Basement Epoxy' },
  { src: img4, alt: 'Residential patio concrete coating Michigan',            label: 'Residential' },
  { src: img5, alt: 'Industrial facility concrete floor coating Michigan',    label: 'Industrial Concrete' },
  { src: img6, alt: 'Blue industrial epoxy hallway floor coating Michigan',   label: 'Industrial Epoxy' },
]

export default function Gallery() {
  const [active,  setActive]  = useState(0)
  const [visible, setVisible] = useState(3)

  useEffect(() => {
    const update = () => {
      if      (window.innerWidth < 640)  setVisible(1)
      else if (window.innerWidth < 1024) setVisible(2)
      else                               setVisible(3)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const maxIndex = projects.length - visible

  const prev = () => setActive(i => (i === 0 ? maxIndex : i - 1))
  const next = () => setActive(i => (i === maxIndex ? 0 : i + 1))

  useEffect(() => {
    const timer = setInterval(next, 4000)
    return () => clearInterval(timer)
  }, [visible])

  const cardPct = 100 / visible

  return (
    <section id="projects" className="section bg-surface">
      <div className="container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="eyebrow mb-4 block">Our Work</span>
          <h2 className="text-text mb-4">Project Gallery</h2>
          <p className="max-w-2xl">
            A look at the floors we've transformed — garages, basements, commercial spaces,
            and industrial facilities across Southeast Michigan.
          </p>
        </motion.div>

        {/* Carousel track */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${active * cardPct}%)` }}
          >
            {projects.map((project) => (
              <div
                key={project.label}
                style={{ minWidth: `${cardPct}%` }}
                className="px-2"
              >
                <div className="relative group overflow-hidden rounded-2xl aspect-4/3 bg-border">
                  <img
                    src={project.src}
                    alt={project.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                    <span className="text-white text-sm font-semibold">{project.label}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-7">
          <button
            onClick={prev}
            className="w-9 h-9 rounded-full border border-border flex items-center justify-center
              text-muted hover:border-primary hover:text-primary transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft size={16} />
          </button>

          <div className="flex gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all duration-300
                  ${active === i ? 'w-6 bg-primary' : 'w-2 bg-border'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-9 h-9 rounded-full border border-border flex items-center justify-center
              text-muted hover:border-primary hover:text-primary transition-colors"
            aria-label="Next"
          >
            <ChevronRight size={16} />
          </button>
        </div>

      </div>
    </section>
  )
}
