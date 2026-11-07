import { useEffect, useRef, type CSSProperties } from 'react'
import { servicesData } from '../data/servicesData'
import { smoothScroll } from '../utils/smoothScroll'
import './WhatWeDoSection.css'

interface WhatWeDoSectionProps {
  onSelectService: (slug: string) => void
}

export default function WhatWeDoSection({ onSelectService }: WhatWeDoSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const unsub = smoothScroll.subscribe(() => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const vh = window.innerHeight
      const progress = Math.min(1, Math.max(0, (vh - rect.top) / (vh * 0.85)))
      sectionRef.current.style.setProperty(
        '--section-progress',
        progress.toFixed(3)
      )
    })

    return () => unsub()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="section what-we-do">
      <div className="section-header">
        <h2>WHAT WE DO</h2>
        <div className="service-button">Our Services</div>
      </div>

      <div className="service-list" aria-label="Services list">
        {servicesData.map((service, idx) => (
          <button
            key={service.slug}
            type="button"
            className="service-row"
            style={{ '--row-idx': idx } as CSSProperties}
            onClick={() => onSelectService(service.slug)}
          >
            <div className="service-title-wrap">
              <div className="service-title">{service.title}</div>
              <span className="service-minimal-arrow" aria-hidden="true">
                ↗
              </span>
            </div>
            <div className="service-description">{service.description}</div>
          </button>
        ))}
      </div>
    </section>
  )
}
