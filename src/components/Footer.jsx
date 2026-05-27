import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'
import logo from '../assets/gpcc_logo.jpeg'

const navLinks = [
  { label: 'Home',        to: '/'          },
  { label: 'About Us',    to: '/#about'    },
  { label: 'Services',    to: '/#services' },
  { label: 'Our Process', to: '/#process'  },
  { label: 'Blog',        to: '/blog'      },
  { label: 'Contact Us',  to: '/#contact'  },
]

const serviceLinks = [
  { label: 'Residential Concrete Coating', href: 'https://app.seomatic.ai/dashboard/chat#residential'        },
  { label: 'Basement Epoxy Flooring',      href: 'https://app.seomatic.ai/dashboard/chat#basement'           },
  { label: 'Garage Epoxy Flooring',        href: 'https://app.seomatic.ai/dashboard/chat#garage'             },
  { label: 'Commercial Concrete Coating',  href: 'https://app.seomatic.ai/dashboard/chat#commercial'         },
  { label: 'Industrial Concrete Coating',  href: 'https://app.seomatic.ai/dashboard/chat#industrial-concrete'},
  { label: 'Industrial Epoxy Flooring',    href: 'https://app.seomatic.ai/dashboard/chat#industrial-epoxy'   },
]

const cities = [
  'Troy', 'Livonia', 'Canton', 'Plymouth',
  'Novi', 'Ann Arbor', 'Dearborn', 'Westland',
  'Farmington Hills', 'Sterling Heights',
  'Rochester Hills', 'Royal Oak',
]

function IconFacebook() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function IconInstagram() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-canvas border-t border-white/5">

      {/* Main footer grid */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1 — Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img
                src={logo}
                alt="GP Concrete Coatings logo"
                className="h-10 w-auto object-contain rounded-md"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Michigan's trusted epoxy and polyaspartic floor coating contractor.
              Serving Southeast Michigan with professional-grade coatings since day one.
            </p>

            {/* Social */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/GPConcreteCoating"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center
                  text-gray-400 hover:text-white hover:border-white/30 transition-all duration-150"
              >
                <IconFacebook />
              </a>
              <a
                href="https://www.instagram.com/gpconcretecoatings"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center
                  text-gray-400 hover:text-white hover:border-white/30 transition-all duration-150"
              >
                <IconInstagram />
              </a>
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-widest mb-5">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map(({ label, to }) => (
                <li key={label}>
                  {to.startsWith('/') && !to.includes('#') ? (
                    <Link to={to} className="footer-link">{label}</Link>
                  ) : (
                    <a href={to} className="footer-link">{label}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-widest mb-5">
              Our Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              {serviceLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact + Locations */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-widest mb-5">
              Contact
            </h4>
            <ul className="flex flex-col gap-3 mb-7">
              <li>
                <a href="tel:+17345192229" className="footer-link flex items-center gap-2">
                  <Phone size={13} className="text-primary shrink-0" />
                  (734) 519-2229
                </a>
              </li>
              <li>
                <a href="mailto:info@gpcc.goldcore.website" className="footer-link flex items-center gap-2">
                  <Mail size={13} className="text-primary shrink-0" />
                  info@gpcc.goldcore.website
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin size={13} className="text-primary shrink-0 mt-0.5" />
                Southeast Michigan
              </li>
            </ul>

            <h4 className="text-white text-sm font-semibold uppercase tracking-widest mb-3">
              Service Locations
            </h4>
            <p className="text-gray-500 text-xs leading-relaxed">
              {cities.join(' · ')}
            </p>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs">
            © {year} GP Concrete Coatings. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Licensed &amp; Insured · Epoxy Floor Coating Contractor · Southeast Michigan
          </p>
        </div>
      </div>

    </footer>
  )
}
