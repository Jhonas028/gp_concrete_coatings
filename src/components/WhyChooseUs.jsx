import { ShieldCheck, Wrench, Star, Clock, BadgeCheck, HardHat } from 'lucide-react'

const reasons = [
  {
    icon:        ShieldCheck,
    title:       'Licensed & Insured',
    description: 'Fully licensed and insured in Michigan — giving you complete peace of mind on every job, residential or commercial.',
  },
  {
    icon:        Wrench,
    title:       'Professional Prep Process',
    description: 'We diamond grind every surface before coating — the most critical step most DIY kits and budget contractors skip entirely.',
  },
  {
    icon:        Star,
    title:       'Premium Materials',
    description: 'We use only professional-grade epoxy and polyaspartic systems — not big-box store kits — engineered for long-term performance.',
  },
  {
    icon:        Clock,
    title:       'Fast Turnaround',
    description: 'Most residential garage and basement projects are completed in a single day. We give you a firm timeline before work begins.',
  },
  {
    icon:        BadgeCheck,
    title:       'Warranty-Backed Work',
    description: 'Every installation is backed by a warranty on both materials and labor. We stand behind our work because we do it right.',
  },
  {
    icon:        HardHat,
    title:       'Experienced Installers',
    description: '25+ years of hands-on experience coating garages, basements, commercial spaces, and industrial facilities across Southeast Michigan.',
  },
]

export default function WhyChooseUs() {
  return (
    <section id="about" className="section bg-surface">
      <div className="container">

        {/* Header */}
        <div className="mb-12">
          <span className="eyebrow mb-4 block">Why Choose Us</span>
          <h2 className="text-text mb-4">
            Why Michigan Chooses GP Concrete Coatings
          </h2>
          <p className="max-w-2xl">
            We don't cut corners on prep, materials, or workmanship. Here's what sets us
            apart from every other coating contractor in Southeast Michigan.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, description }) => (
            <div key={title} className="card flex gap-5 items-start">

              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Icon size={20} className="text-primary" strokeWidth={1.75} />
              </div>

              {/* Text */}
              <div>
                <h4 className="text-text mb-1.5">{title}</h4>
                <p className="text-sm">{description}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
