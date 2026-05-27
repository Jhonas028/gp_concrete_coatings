import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import img1 from '../assets/gpcc_img1.jpg'
import img2 from '../assets/gpcc_img2.jpg'
import img3 from '../assets/gpcc_img3.jpg'
import img4 from '../assets/gpcc_img4.jpg'
import img5 from '../assets/gpcc_img5.jpg'
import img6 from '../assets/gpcc_img6.jpg'

const reviews = [
  {
    image:    img2,
    quote:    'GP Concrete Coatings did our 3-car garage in one day. The floor looks absolutely incredible — way better than we expected. Worth every penny.',
    name:     'Jason R.',
    location: 'Troy, MI',
    avatar:   'J',
    color:    '#1c00db',
  },
  {
    image:    img1,
    quote:    'Professional from start to finish. They showed up on time, protected everything in our garage, and the finished product is flawless. Highly recommend.',
    name:     'Michelle T.',
    location: 'Canton, MI',
    avatar:   'M',
    color:    '#7c3aed',
  },
  {
    image:    img3,
    quote:    'We had them coat the floors in our commercial showroom. Fast turnaround, clean work, and our customers constantly compliment how the floors look.',
    name:     'Dave K.',
    location: 'Livonia, MI',
    avatar:   'D',
    color:    '#059669',
  },
  {
    image:    img4,
    quote:    'We finally finished our basement and the epoxy floor was the perfect final touch. GP Concrete did an amazing job — the color looks stunning and cleanup is so easy.',
    name:     'Sarah M.',
    location: 'Novi, MI',
    avatar:   'S',
    color:    '#db2777',
  },
  {
    image:    img5,
    quote:    'Hired GP Concrete Coatings for our warehouse floor. They handled the whole job with zero disruption to our operations. Tough, clean-looking, and has held up great.',
    name:     'Tom B.',
    location: 'Dearborn, MI',
    avatar:   'T',
    color:    '#d97706',
  },
  {
    image:    img6,
    quote:    'We got quotes from three companies and chose GP Concrete — best price, best communication, and the result speaks for itself. Our garage looks like a showroom.',
    name:     'Lisa & Kevin H.',
    location: 'Plymouth, MI',
    avatar:   'L',
    color:    '#0891b2',
  },
  
]

function Stars() {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={13} className="text-yellow-400 fill-yellow-400" />
      ))}
    </div>
  )
}

function ReviewCard({ review }) {
  return (
    <div className="bg-base border border-border rounded-2xl p-5 flex flex-col gap-3
      h-full shadow-sm hover:border-hover/40 hover:shadow-md transition-all duration-200">

      {/* Top row: avatar + name */}
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-white font-bold text-sm"
          style={{ backgroundColor: review.color }}
        >
          {review.avatar}
        </div>
        <div>
          <p className="text-sm font-semibold text-text leading-tight">{review.name}</p>
          <p className="text-xs text-muted">{review.location}</p>
        </div>
      </div>

      {/* Stars */}
      <Stars />

      {/* Quote */}
      <p className="text-xs leading-relaxed text-text line-clamp-3 flex-1">
        "{review.quote}"
      </p>

      {/* Project image thumbnail */}
      <div className="w-full h-28 rounded-xl overflow-hidden">
        <img
          src={review.image}
          alt={`Floor project by ${review.name}`}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
    </div>
  )
}

export default function Testimonials() {
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

  const maxIndex = reviews.length - visible

  const prev = () => setActive(i => (i === 0 ? maxIndex : i - 1))
  const next = () => setActive(i => (i === maxIndex ? 0 : i + 1))

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [visible])

  const cardPct = 100 / visible

  return (
    <section id="reviews" className="section bg-surface">
      <div className="container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-text mb-4">What Our Clients Are Saying</h2>
        </motion.div>

        {/* Carousel track */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${active * cardPct}%)` }}
          >
            {reviews.map((r, i) => (
              <div
                key={i}
                style={{ minWidth: `${cardPct}%` }}
                className="px-2 flex flex-col"
              >
                <ReviewCard review={r} />
              </div>
            ))}
          </div>
        </div>

        {/* Controls — same as Gallery */}
        <div className="flex items-center justify-center gap-4 mt-7">
          <button
            onClick={prev}
            className="w-9 h-9 rounded-full border border-border flex items-center justify-center
              text-muted hover:border-hover hover:text-hover transition-colors"
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
              text-muted hover:border-hover hover:text-hover transition-colors"
            aria-label="Next"
          >
            <ChevronRight size={16} />
          </button>
        </div>

      </div>
    </section>
  )
}
