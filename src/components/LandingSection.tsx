import type { MouseEvent } from 'react'
import { smoothScroll } from '../utils/smoothScroll'
import './LandingSection.css'

const navLinks = [
  { label: 'OUR SERVICES', href: '#services' },
  { label: 'HOW WE DO IT', href: '#how-we-do-it' },
  { label: 'GET IN TOUCH', href: '#contact' },
]

export default function LandingSection() {
  const handleNavClick = (
    e: MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault()
    smoothScroll.scrollTo(href)
  }

  return (
    <header className="landing-section">
      <nav className="topbar" aria-label="Main navigation">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault()
            smoothScroll.scrollTo(0)
          }}
          className="brand-mark"
        >
          {'{knd studios;'}
        </a>

        <div className="topbar-links">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="topbar-link"
            >
              <span className="topbar-link-track">
                <span>{link.label}</span>
                <span aria-hidden="true">{link.label}</span>
              </span>
            </a>
          ))}
        </div>
      </nav>

      <div className="hero-layout">
        <div className="hero-copy">
          <h1>
            WE BUILD
            <br />
            WHAT RUNS
            <br />
            YOUR BUSINESS
          </h1>
        </div>

        <div className="hero-text">
          <p>
            KND Studios designs and develops websites, custom systems and
            automation for companies that want software that works as hard as
            they do.
          </p>
        </div>
      </div>
    </header>
  )
}
