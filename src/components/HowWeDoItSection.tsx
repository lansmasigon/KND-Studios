import { useEffect, useRef, type CSSProperties } from 'react'
import { smoothScroll } from '../utils/smoothScroll'
import './HowWeDoItSection.css'

const steps = [
  {
    index: '01',
    title: 'LISTEN',
    text: 'We learn your goals, pain points, and business context before shaping the right solution.',
  },
  {
    index: '02',
    title: 'BUILD',
    text: 'We design and develop with clarity, translating strategy into practical digital systems that work.',
  },
  {
    index: '03',
    title: 'SUPPORT',
    text: 'Once it is live, we help refine, optimize, and maintain the experience as your business grows.',
  },
]

export default function HowWeDoItSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const unsub = smoothScroll.subscribe(() => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const vh = window.innerHeight
      const progress = Math.min(1, Math.max(0, (vh - rect.top) / (vh * 0.85)))
      sectionRef.current.style.setProperty(
        '--how-progress',
        progress.toFixed(3)
      )
    })

    return () => unsub()
  }, [])

  return (
    <section
      id="how-we-do-it"
      ref={sectionRef}
      className="section how-we-do-it"
    >
      <div className="section-header centered">
        <h2>HOW WE DO IT</h2>
      </div>

      <div className="process-grid">
        {steps.map((step, idx) => (
          <article
            key={step.title}
            className="process-card"
            style={{ '--card-idx': idx } as CSSProperties}
          >
            <div className="process-card-head">
              <h3 className="process-title">{step.title}</h3>
              <span className="process-num">{step.index}</span>
            </div>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
