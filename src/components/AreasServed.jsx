import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

const cities = [
  'Troy', 'Livonia', 'Canton', 'Plymouth', 'Northville',
  'Novi', 'Ann Arbor', 'Dearborn', 'Westland', 'Farmington Hills',
  'Sterling Heights', 'Rochester Hills', 'Birmingham', 'Bloomfield Hills',
  'Royal Oak', 'Warren', 'Shelby Township', 'Madison Heights',
  'Ypsilanti', 'Saline',
]

export default function AreasServed() {
  return (
    <section id="areas" className="section bg-base">
      <div className="container">

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left — text + cities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="eyebrow mb-4 block">Service Area</span>
            <h2 className="text-text mb-4">Serving Southeast Michigan</h2>
            <p className="mb-8">
              GP Concrete Coatings provides epoxy and polyaspartic floor coatings
              throughout Southeast Michigan. Don't see your city? Contact us —
              we likely serve your area.
            </p>

            {/* City pills */}
            <div className="flex flex-wrap gap-2">
              {cities.map((city) => (
                <span
                  key={city}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5
                    bg-surface border border-border rounded-full
                    text-xs font-medium text-text
                    hover:border-primary hover:text-primary hover:bg-primary/5
                    transition-colors duration-150 cursor-default"
                >
                  <MapPin size={10} className="text-primary shrink-0" />
                  {city}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — map embed */}
          <div className="w-full h-105 rounded-2xl overflow-hidden border border-border shadow-sm">
            <iframe
              title="GP Concrete Coatings service area — Southeast Michigan"
              src="https://maps.google.com/maps?q=Southeast+Michigan&t=&z=9&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

      </div>
    </section>
  )
}
