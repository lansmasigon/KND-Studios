import { useEffect, useState } from 'react'
import {
  servicesData,
  type ServiceCategory,
  type ServiceWorkItem,
} from '../data/servicesData'
import { smoothScroll } from '../utils/smoothScroll'
import './ServiceShowcasePage.css'

interface ServiceShowcasePageProps {
  serviceSlug: string
  onBackHome: () => void
  onSelectService: (slug: string) => void
}

function LaptopProjectSlideshow({ work }: { work: ServiceWorkItem }) {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const totalSlides = work.slides.length

  useEffect(() => {
    if (totalSlides <= 1 || isPaused) return

    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides)
    }, 3400)

    return () => window.clearInterval(timer)
  }, [totalSlides, isPaused])

  return (
    <div
      className="laptop-mockup-stage"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Laptop Screen Lid */}
      <div className="laptop-lid">
        <div className="laptop-camera-notch" aria-hidden="true">
          <span className="camera-lens" />
        </div>

        <div className="laptop-viewport">
          {/* Browser Chrome Header */}
          <div className="browser-chrome-bar">
            <div className="browser-dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>

            <div className="browser-address-pill">
              <span className="lock-dot" aria-hidden="true" />
              <span>{work.url}</span>
            </div>

            <div className="browser-slide-counter">
              0{activeSlide + 1} / 0{totalSlides}
            </div>
          </div>

          {/* Smooth Looping Slideshow Track */}
          <div className="laptop-slideshow-window">
            <div
              className="laptop-slideshow-track"
              style={{
                transform: `translate3d(-${activeSlide * 100}%, 0, 0)`,
              }}
            >
              {work.slides.map((slide) => (
                <div
                  key={slide.id}
                  className={`laptop-slide mode-${slide.accentMode || 'crimson'}`}
                >
                  {slide.image ? (
                    <img
                      src={slide.image}
                      alt={`${work.title} - ${slide.label}`}
                      className="laptop-slide-img"
                    />
                  ) : (
                    <div className="slide-ui-canvas">
                      <div className="slide-ui-topbar">
                        <span className="slide-brand-pill">{work.title}</span>
                        <span className="slide-step-label">{slide.label}</span>
                      </div>

                      <div className="slide-ui-hero">
                        <span className="slide-kicker">{slide.kicker}</span>
                        <h3 className="slide-headline">{slide.headline}</h3>
                        <p className="slide-subheadline">{slide.subheadline}</p>
                      </div>

                      <div className="slide-metrics-strip">
                        {slide.metrics.map((m) => (
                          <div key={m.label} className="slide-metric-box">
                            <span className="s-metric-val">{m.value}</span>
                            <span className="s-metric-lbl">{m.label}</span>
                          </div>
                        ))}
                      </div>

                      <div className="slide-cards-row">
                        {slide.cards.map((c) => (
                          <div key={c.title} className="slide-mini-card">
                            <div className="s-card-info">
                              <div className="s-card-title">{c.title}</div>
                              <div className="s-card-meta">{c.meta}</div>
                            </div>
                            <span className="s-card-badge">{c.badge}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom Overlay Controls & Loop Progress Dots */}
            <div className="laptop-slideshow-controls">
              <div className="slide-dots" role="tablist" aria-label="Project slides">
                {work.slides.map((s, idx) => (
                  <button
                    key={s.id}
                    type="button"
                    role="tab"
                    aria-selected={idx === activeSlide}
                    aria-label={`Slide ${idx + 1}: ${s.label}`}
                    className={`slide-dot-btn ${
                      idx === activeSlide ? 'active' : ''
                    } ${isPaused ? 'is-paused' : ''}`}
                    onClick={() => setActiveSlide(idx)}
                  >
                    <span className="slide-dot-fill" />
                  </button>
                ))}
              </div>

              <div className="slide-arrow-group">
                <button
                  type="button"
                  className="slide-nav-arrow"
                  aria-label="Previous slide"
                  onClick={() =>
                    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
                  }
                >
                  ‹
                </button>
                <button
                  type="button"
                  className="slide-nav-arrow"
                  aria-label="Next slide"
                  onClick={() =>
                    setActiveSlide((prev) => (prev + 1) % totalSlides)
                  }
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Laptop Base / Keyboard Deck */}
      <div className="laptop-base" aria-hidden="true">
        <div className="laptop-base-lip" />
      </div>
      <div className="laptop-shadow" aria-hidden="true" />
    </div>
  )
}

export default function ServiceShowcasePage({
  serviceSlug,
  onBackHome,
  onSelectService,
}: ServiceShowcasePageProps) {
  const currentIndex = servicesData.findIndex((s) => s.slug === serviceSlug)
  const service: ServiceCategory =
    servicesData[currentIndex >= 0 ? currentIndex : 0]
  const nextService = servicesData[(currentIndex + 1) % servicesData.length]

  useEffect(() => {
    smoothScroll.scrollTo(0, true)
  }, [serviceSlug])

  return (
    <div className="showcase-page">
      <nav className="showcase-nav" aria-label="Service showcase navigation">
        <button
          type="button"
          className="brand-mark showcase-brand"
          onClick={onBackHome}
        >
          {'{knd studios;'}
        </button>

        <div className="showcase-nav-links">
          {servicesData.map((item) => (
            <button
              key={item.slug}
              type="button"
              className={`showcase-nav-item ${
                item.slug === service.slug ? 'active' : ''
              }`}
              onClick={() => onSelectService(item.slug)}
            >
              {item.title}
            </button>
          ))}
        </div>

        <button
          type="button"
          className="showcase-back-link"
          onClick={onBackHome}
        >
          ← BACK
        </button>
      </nav>

      <header className="showcase-header" key={service.slug}>
        <div className="showcase-header-top">
          <span className="showcase-index">{service.index} / 04</span>
          <span className="showcase-label">SELECTED WORKS</span>
        </div>

        <h1 className="showcase-heading">{service.title}</h1>
        <p className="showcase-lead">{service.description}</p>
      </header>

      <section
        className="showcase-works-list"
        aria-label={`${service.title} works`}
      >
        {service.works.length > 0 ? (
          service.works.map((work) => (
            <article key={work.id} className="minimal-work-item">
              <div className="minimal-work-grid">
                <LaptopProjectSlideshow work={work} />

                <div className="minimal-work-content">
                  <div className="minimal-work-meta">
                    <span>{work.number}</span>
                    <span>—</span>
                    <span>{work.client}</span>
                    <span className="work-meta-year">{work.year}</span>
                  </div>

                  <h2 className="minimal-work-title">{work.title}</h2>
                  <p className="minimal-work-summary">{work.summary}</p>

                  <div className="minimal-work-tags">
                    {work.stack.map((tech) => (
                      <span key={tech} className="minimal-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))
        ) : (
          <div className="minimal-empty-works">
            <p>More works being curated for {service.title}.</p>
          </div>
        )}
      </section>

      <div className="showcase-next-bar">
        <span className="next-bar-label">NEXT SERVICE</span>
        <button
          type="button"
          className="next-bar-title"
          onClick={() => onSelectService(nextService.slug)}
        >
          <span>{nextService.title}</span>
          <span>→</span>
        </button>
      </div>
    </div>
  )
}
