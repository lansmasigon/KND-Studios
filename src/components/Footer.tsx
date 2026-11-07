import type { MouseEvent } from 'react'
import { smoothScroll } from '../utils/smoothScroll'
import './Footer.css'

interface FooterProps {
  onNavigateSection?: (target: string | number) => void
}

export default function Footer({ onNavigateSection }: FooterProps) {
  const handleSectionClick = (
    e: MouseEvent<HTMLAnchorElement>,
    target: string | number
  ) => {
    e.preventDefault()
    if (onNavigateSection) {
      onNavigateSection(target)
    } else {
      smoothScroll.scrollTo(target)
    }
  }

  return (
    <footer id="contact" className="site-footer">
      <div className="footer-top-row">
        <div className="footer-brand-block">
          <a
            href="#top"
            onClick={(e) => handleSectionClick(e, 0)}
            className="brand-mark"
          >
            {'{KND'}
          </a>
        </div>

        <div className="footer-middle-links">
          <div className="footer-column">
            <div className="footer-copy">©2026</div>
          </div>

          <div className="footer-column">
            <div className="column-title">ABOUT</div>
            <ul>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleSectionClick(e, '#services')}
                >
                  WHAT WE DO
                </a>
              </li>
              <li>
                <a
                  href="#how-we-do-it"
                  onClick={(e) => handleSectionClick(e, '#how-we-do-it')}
                >
                  HOW WE DO IT
                </a>
              </li>
              <li>
                <a
                  href="#lets-talk"
                  onClick={(e) => handleSectionClick(e, '#lets-talk')}
                >
                  LET&apos;S TALK
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <div className="column-title">LINKS</div>
            <ul>
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FACEBOOK
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  INSTAGRAM
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <div className="column-title">GET IN TOUCH</div>
            <ul>
              <li>
                <a href="mailto:kndstudios@gmail.com">GMAIL</a>
              </li>
              <li>
                <a href="tel:+639000000000">MOBILE PHONE</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="studio-word">STUDIOS</div>
    </footer>
  )
}
