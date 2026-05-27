import { ArrowRight, Phone, Award, ShieldCheck, CheckCircle2, MessageSquare } from 'lucide-react'
import heroBg from '../assets/gpcc_img1.jpg'

const trustItems = [
  { icon: Award,        stat: '25+',  label: 'Years Experience'    },
  { icon: ShieldCheck,  stat: '',     label: 'Licensed & Insured'   },
  { icon: CheckCircle2, stat: '500+', label: 'Projects Completed'   },
  { icon: MessageSquare,stat: 'Free', label: 'Estimates'            },
]

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden">

      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Professionally coated commercial concrete floor by GP Concrete Coatings Michigan"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark gradient overlay — heavier on left where text sits */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="container py-36 md:py-44">
          <div className="max-w-2xl">

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">

              <span className="text-white font-semibold uppercase tracking-[0.2em] text-[0.7rem]">
                Michigan's Epoxy &amp; Concrete Coating Experts
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-white mb-5">
              Transform Your Concrete Floors with a Coating That Lasts
            </h1>

            {/* Subheadline */}
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
              Michigan's #1 choice for epoxy and polyaspartic floor coatings — for garages,
              basements, commercial spaces, and industrial facilities. Durable. Beautiful.
              Done right the first time.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a href="#contact" className="btn btn--primary btn--lg">
                Get a Free Quote
                <ArrowRight size={16} strokeWidth={2.5} />
              </a>
              <a href="tel:+17345192229" className="btn btn--lg btn--dark-outline">
                <Phone size={15} strokeWidth={2.5} />
                Call Now
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Trust badges strip */}
      <div className="relative z-10 border-t border-white/10 bg-black/40 backdrop-blur-sm">
        <div className="container py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 md:divide-x md:divide-white/10">
            {trustItems.map(({ icon: Icon, stat, label }) => (
              <div key={label} className="flex items-center justify-center gap-3 md:px-8">
                <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <Icon size={16} className="text-primary" strokeWidth={2} />
                </div>
                <div>
                  {stat && <span className="text-white font-bold text-sm leading-none">{stat} </span>}
                  <span className="text-gray-300 text-xs">{label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
