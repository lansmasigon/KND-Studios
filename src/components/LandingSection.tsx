import './LandingSection.css'

const navLinks = [
  { label: 'OUR SERVICES', href: '#services' },
  { label: 'HOW WE DO IT', href: '#how-we-do-it' },
  { label: 'GET IN TOUCH', href: '#contact' },
]

export default function LandingSection() {
  return (
    <header className="landing-section">
      <nav className="topbar" aria-label="Main navigation">
        <div className="brand-mark">{'{knd studios;'}</div>

        <div className="topbar-links">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
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
