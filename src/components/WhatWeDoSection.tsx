import { useState } from 'react'
import './WhatWeDoSection.css'

const services = [
  {
    title: 'WEB DEVELOPMENT',
    description: 'Fast, accessible websites and web apps built to move your business forward.',
  },
  {
    title: 'AUTOMATION',
    description: 'We streamline repetitive tasks and internal workflows so your team can focus on growth.',
  },
  {
    title: 'WEB DESIGN',
    description: 'Clean, strategic design systems that make your brand memorable and easy to trust.',
  },
  {
    title: 'SYSTEMS DEVELOPMENT',
    description: 'Custom tools and product systems that simplify operations and support long-term scale.',
  },
]

export default function WhatWeDoSection() {
  const [activeService, setActiveService] = useState<string | null>(null)

  return (
    <section id="services" className="section what-we-do">
      <div className="section-header">
        <h2>WHAT WE DO</h2>
        <div className="service-button">Our Services</div>
      </div>

      <div className="service-list" aria-label="Services list">
        {services.map((service) => {
          const selected = activeService === service.title

          return (
            <button
              key={service.title}
              type="button"
              className={`service-row ${selected ? 'active' : ''}`}
              onClick={() => setActiveService(service.title)}
            >
              <div className="service-title">{service.title}</div>
              <div className="service-description">{service.description}</div>
            </button>
          )
        })}
      </div>
    </section>
  )
}
