import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Phone, Menu, X } from 'lucide-react'
import logo from '../assets/gpcc_logo.jpeg'

const links = [
  { label: 'Home',       to: '/',          hash: false },
  { label: 'Service',    to: '/#services', hash: true  },
  { label: 'About Us',   to: '/#about',    hash: true  },
  { label: 'Contact Us', to: '/#contact',  hash: true  },
]

const sectionMap = {
  home:     'Home',
  about:    'About Us',
  services: 'Service',
  contact:  'Contact Us',
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active,   setActive]   = useState('Home')
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  // Scroll shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Set active based on current route or scroll position
  useEffect(() => {
    if (pathname === '/blog') {
      setActive('Blog')
      return
    }

    if (pathname !== '/') return

    const sectionIds = ['home', 'services', 'about', 'contact']

    const detect = () => {
      const trigger = window.scrollY + window.innerHeight * 0.35
      let current = 'home'
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= trigger) current = id
      }
      setActive(sectionMap[current] ?? 'Home')
    }

    window.addEventListener('scroll', detect, { passive: true })
    detect()
    return () => window.removeEventListener('scroll', detect)
  }, [pathname])

  const pillClass = (label) =>
    `nav-pill ${active === label ? 'nav-pill--active' : 'nav-pill--idle'}`

  const handleClick = (link) => {
    if (!link.hash) setActive(link.label)
    if (link.label === 'Home') window.scrollTo({ top: 0, behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
    {menuOpen && (
      <div
        className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
        onClick={() => setMenuOpen(false)}
      />
    )}

    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-base border-b border-border
        transition-all duration-300
        ${scrolled ? 'shadow-[0_2px_24px_rgba(0,0,0,0.07)]' : ''}`}
    >
      <div className="container flex items-center justify-between h-20">

        {/* Logo */}
        <Link to="/" onClick={() => setActive('Home')} className="shrink-0">
          <img
            src={logo}
            alt="GP Concrete Coatings logo"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
          {links.map((link) =>
            link.hash ? (
              <a
                key={link.label}
                href={link.to}
                onClick={() => handleClick(link)}
                className={pillClass(link.label)}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => handleClick(link)}
                className={pillClass(link.label)}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Right — phone + CTA */}
        <div className="hidden lg:flex items-center gap-5 shrink-0">
          <a
            href="tel:+17345192229"
            className="flex items-center gap-2 text-muted text-xs font-medium hover:text-hover transition-colors"
          >
            <Phone size={13} strokeWidth={2.5} />
            (734) 519-2229
          </a>
          <a href="/#contact" className="btn btn--primary py-2.5! px-6! text-xs!">
            Get Free Quote
          </a>
        </div>

        {/* Mobile hamburger */}
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
              link.hash ? (
                <a
                  key={link.label}
                  href={link.to}
                  onClick={() => handleClick(link)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-150
                    ${active === link.label ? 'bg-primary text-white' : 'text-muted hover:text-text hover:bg-hover/5'}`}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => handleClick(link)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-150
                    ${active === link.label ? 'bg-primary text-white' : 'text-muted hover:text-text hover:bg-hover/5'}`}
                >
                  {link.label}
                </Link>
              )
            )}

            <div className="pt-3 mt-2 border-t border-border flex flex-col gap-3">
              <a
                href="tel:+17345192229"
                className="flex items-center gap-2 text-muted text-sm px-4 hover:text-hover transition-colors"
              >
                <Phone size={14} strokeWidth={2.5} />
                (734) 519-2229
              </a>
              <a
                href="/#contact"
                onClick={() => setMenuOpen(false)}
                className="btn btn--primary w-full justify-center"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
    </>
  )
}
