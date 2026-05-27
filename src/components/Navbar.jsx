import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Phone, Menu, X } from 'lucide-react'
import logo from '../assets/gpcc_logo.jpeg'

const links = [
  { label: 'Home',       to: '/',         route: true  },
  { label: 'About Us',   to: '#about',    route: false },
  { label: 'Service',    to: '#services', route: false },
  { label: 'Blog',       to: '/blog',     route: true  },
  { label: 'Contact Us', to: '#contact',  route: false },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isActive = (link) => {
    if (link.route) return pathname === link.to
    return false
  }

  const pillClass = (link) =>
    `nav-pill ${isActive(link) ? 'nav-pill--active' : 'nav-pill--idle'}`

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-base border-b border-border
        transition-all duration-300
        ${scrolled ? 'shadow-[0_2px_24px_rgba(0,0,0,0.07)]' : ''}`}
    >
      <div className="container flex items-center justify-between h-20">

        {/* Logo — far left */}
        <Link to="/" className="shrink-0">
          <img
            src={logo}
            alt="GP Concrete Coatings logo"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Nav links — centered */}
        <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
          {links.map((link) =>
            link.route ? (
              <NavLink
                key={link.label}
                to={link.to}
                end
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `nav-pill ${isActive ? 'nav-pill--active' : 'nav-pill--idle'}`
                }
              >
                {link.label}
              </NavLink>
            ) : (
              <a
                key={link.label}
                href={link.to}
                onClick={() => setMenuOpen(false)}
                className="nav-pill nav-pill--idle"
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        {/* Right — phone + CTA */}
        <div className="hidden lg:flex items-center gap-5 shrink-0">
          <a
            href="tel:+17345192229"
            className="flex items-center gap-2 text-muted text-xs font-medium hover:text-primary transition-colors"
          >
            <Phone size={13} strokeWidth={2.5} />
            (734) 519-2229
          </a>
          <Link to="#contact" className="btn btn--primary py-2.5! px-6! text-xs!">
            Get Free Quote
          </Link>
        </div>

        {/* Mobile — hamburger */}
        <button
          className="lg:hidden text-text p-2 -mr-2"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="lg:hidden bg-surface border-t border-border">
          <div className="container py-4 flex flex-col gap-1">
            {links.map((link) =>
              link.route ? (
                <NavLink
                  key={link.label}
                  to={link.to}
                  end
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-sm font-medium transition-all duration-150
                    ${isActive ? 'bg-primary text-white' : 'text-muted hover:text-text hover:bg-primary/5'}`
                  }
                >
                  {link.label}
                </NavLink>
              ) : (
                <a
                  key={link.label}
                  href={link.to}
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-sm font-medium text-muted hover:text-text hover:bg-primary/5 transition-all duration-150"
                >
                  {link.label}
                </a>
              )
            )}

            <div className="pt-3 mt-2 border-t border-border flex flex-col gap-3">
              <a
                href="tel:+17345192229"
                className="flex items-center gap-2 text-muted text-sm px-4 hover:text-primary transition-colors"
              >
                <Phone size={14} strokeWidth={2.5} />
                (734) 519-2229
              </a>
              <Link
                to="#contact"
                onClick={() => setMenuOpen(false)}
                className="btn btn--primary w-full justify-center"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
