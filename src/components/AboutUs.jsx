import { motion } from 'framer-motion'
import { ShieldCheck, Award, CheckCircle2 } from 'lucide-react'
import aboutImg from '../assets/gpcc_img3.jpg'

const stats = [
  { value: '25+',  label: 'Years of Experience' },
  { value: '500+', label: 'Projects Completed'  },
  { value: '100%', label: 'Licensed & Insured'  },
]

const points = [
  'Serving Southeast Michigan homeowners and businesses',
  'Diamond-grind prep on every single job — no shortcuts',
  'Professional-grade epoxy and polyaspartic systems only',
]

export default function AboutUs() {
  return (
    <section id="about-us" className="section bg-base">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — image */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="relative"
          >
            {/* Offset background block */}
            <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl bg-primary/8 -z-10" />
            <img
              src={aboutImg}
              alt="GP Concrete Coatings team applying epoxy floor coating in Michigan"
              className="w-full rounded-2xl object-cover aspect-4/3 shadow-xl"
            />

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-6 -right-4 bg-primary rounded-2xl px-6 py-4 shadow-xl"
            >
              <p className="text-3xl font-bold text-white leading-none">25+</p>
              <p className="text-white/70 text-xs mt-1">Years in Business</p>
            </motion.div>
          </motion.div>

          {/* Right — text */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            <h2 className="text-text mb-5">
              Michigan's Trusted Concrete Coating Experts
            </h2>
            <p className="mb-6">
              GP Concrete Coatings is a locally owned and operated contractor serving Southeast
              Michigan homeowners, businesses, and industrial facilities. With over 25 years
              of hands-on experience, we've built a reputation on doing the job right —
              from the first grind to the final seal coat.
            </p>
            <p className="mb-8">
              We're not a franchise. We're not a big-box kit company. We're a dedicated team
              that shows up on time, preps every surface properly, and stands behind every
              floor we coat with a full warranty on materials and labor.
            </p>

            {/* Bullet points */}
            <ul className="flex flex-col gap-3 mb-10">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 size={17} className="text-primary shrink-0 mt-0.5" strokeWidth={2} />
                  <span className="text-text">{point}</span>
                </li>
              ))}
            </ul>

            {/* Stats row */}
            <div className="flex gap-8 pt-8 border-t border-border">
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <p className="text-2xl font-bold text-primary leading-none mb-1">{value}</p>
                  <p className="text-xs text-muted">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
