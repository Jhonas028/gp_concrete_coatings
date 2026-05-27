import { useState, useEffect } from 'react'
import { Star, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'

const reviews = [
  {
    quote:    'GP Concrete Coatings did our 3-car garage in one day. The floor looks absolutely incredible — way better than we expected. Worth every penny.',
    name:     'Jason R.',
    location: 'Troy, MI',
    rating:   5,
  },
  {
    quote:    'Professional from start to finish. They showed up on time, protected everything in our garage, and the finished product is flawless. Highly recommend.',
    name:     'Michelle T.',
    location: 'Canton, MI',
    rating:   5,
  },
  {
    quote:    'We had them coat the floors in our commercial showroom. Fast turnaround, clean work, and our customers constantly compliment how the floors look.',
    name:     'Dave K.',
    location: 'Livonia, MI',
    rating:   5,
  },
]

function Stars({ count = 5 }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={15} className="text-yellow-400 fill-yellow-400" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [active, setActive] = useState(0)

  const prev = () => setActive(i => (i === 0 ? reviews.length - 1 : i - 1))
  const next = () => setActive(i => (i === reviews.length - 1 ? 0 : i + 1))

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="reviews" className="section bg-surface">
      <div className="container">

        {/* Header */}
        <div className="mb-12 text-center">
          <span className="eyebrow mb-4 justify-center flex">Client Reviews</span>
          <h2 className="text-text">What Our Clients Are Saying</h2>
        </div>

        {/* Desktop — 3 cards */}
        <div className="hidden lg:grid grid-cols-3 gap-6 mb-10">
          {reviews.map((r, i) => (
            <ReviewCard key={i} review={r} />
          ))}
        </div>

        {/* Mobile / Tablet — carousel */}
        <div className="lg:hidden mb-8">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {reviews.map((r, i) => (
                <div key={i} className="w-full shrink-0 px-1">
                  <ReviewCard review={r} />
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted hover:border-primary hover:text-primary transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft size={16} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all duration-300
                    ${active === i ? 'w-6 bg-primary' : 'w-2 bg-border'}`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted hover:border-primary hover:text-primary transition-colors"
              aria-label="Next review"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Google Reviews CTA */}
        <div className="text-center">
          <a
            href="https://www.google.com/search?q=GP+Concrete+Coatings+Michigan+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary underline underline-offset-4 hover:text-primary-dk transition-colors"
          >
            View More Reviews on Google
            <ExternalLink size={13} strokeWidth={2.5} />
          </a>
        </div>

      </div>
    </section>
  )
}

function ReviewCard({ review }) {
  return (
    <div className="card flex flex-col gap-4 h-full">
      <Stars count={review.rating} />
      <p className="text-sm leading-relaxed flex-1 text-text">
        "{review.quote}"
      </p>
      <div className="pt-3 border-t border-border">
        <p className="text-sm font-semibold text-text">{review.name}</p>
        <p className="text-xs text-muted">{review.location}</p>
      </div>
    </div>
  )
}
