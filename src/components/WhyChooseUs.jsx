import { motion } from 'framer-motion'
import { ShieldCheck, Wrench, Star, Clock, BadgeCheck, HardHat, ArrowRight } from 'lucide-react'

const reasons = [
  { icon: ShieldCheck, title: 'Licensed & Insured',        description: 'Fully licensed and insured for your complete peace of mind on every project.' },
  { icon: Wrench,      title: 'Professional Prep Process',  description: 'Diamond-grind prep on every single job — no shortcuts, no exceptions.' },
  { icon: Star,        title: 'Premium Materials Only',     description: 'We use professional-grade epoxy and polyaspartic systems built to last.' },
  { icon: Clock,       title: 'Fast Turnaround',            description: 'Most installations are completed in a single day with minimal disruption.' },
  { icon: BadgeCheck,  title: 'Warranty-Backed Work',       description: 'Full warranty on materials and labor so you can invest with confidence.' },
  { icon: HardHat,     title: 'Experienced Installers',     description: 'Our crew brings 25+ years of hands-on concrete coating expertise to every job.' },
]

export default function WhyChooseUs() {
  return (
    <section id="about" className="section bg-surface">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — heading + copy + CTA */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-text mb-6">
              Why Michigan Chooses GP Concrete Coatings
            </h2>
            <p className="mb-4">
              At GP Concrete Coatings, we combine premium materials, expert craftsmanship,
              and a thorough prep process to deliver flooring solutions built for durability,
              protection, and long-lasting performance — whether it's a residential garage,
              commercial property, or industrial facility.
            </p>
            <p className="mb-10 text-muted">
              We take pride in delivering seamless epoxy and polyaspartic systems that not
              only enhance the appearance of your concrete surfaces but also improve safety
              and make maintenance easy for years to come.
            </p>
            <a href="#contact" className="btn btn--primary btn--lg inline-flex">
              Get Your Free Quote
              <ArrowRight size={16} strokeWidth={2.5} />
            </a>
          </motion.div>

          {/* Right — stacked reason cards */}
          <div className="flex flex-col gap-3">
            {reasons.map(({ icon: Icon, title, description }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="group flex items-center gap-4 p-5 rounded-2xl bg-primary
                  border border-primary/30 cursor-default
                  transition-all duration-300
                  hover:shadow-[0_8px_32px_rgba(28,0,219,0.3)] hover:-translate-y-0.5"
              >
                {/* Icon box */}
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0
                  transition-colors duration-300 group-hover:bg-white/20">
                  <Icon size={22} strokeWidth={1.75} className="text-white" />
                </div>

                {/* Text */}
                <div>
                  <h4 className="font-bold text-white text-sm mb-1">{title}</h4>
                  <p className="text-white/65 text-xs leading-relaxed">{description}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
