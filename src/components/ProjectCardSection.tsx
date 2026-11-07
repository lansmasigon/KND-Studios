import { useEffect, useRef, type MouseEvent } from 'react'
import { smoothScroll } from '../utils/smoothScroll'
import './ProjectCardSection.css'

export default function ProjectCardSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const btnRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const unsub = smoothScroll.subscribe(() => {
      if (!sectionRef.current || !cardRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const vh = window.innerHeight
      const progress = Math.max(0, Math.min(1, (vh - rect.top) / (vh * 0.85)))
      const scale = 0.9 + progress * 0.1
      cardRef.current.style.transform = `scale(${scale.toFixed(3)})`
    })

    return () => unsub()
  }, [])

  const handleMagneticMove = (e: MouseEvent<HTMLButtonElement>) => {
    const btn = btnRef.current
    if (!btn) return
    const rect = btn.getBoundingClientRect()
    const dx = (e.clientX - (rect.left + rect.width / 2)) * 0.25
    const dy = (e.clientY - (rect.top + rect.height / 2)) * 0.25
    btn.style.transform = `translate3d(${dx.toFixed(1)}px, ${dy.toFixed(1)}px, 0)`
  }

  const handleMagneticLeave = () => {
    if (btnRef.current) {
      btnRef.current.style.transform = 'translate3d(0, 0, 0)'
    }
  }

  return (
    <section
      id="lets-talk"
      ref={sectionRef}
      className="section project-card-section"
      aria-label="Project contact section"
    >
      <div ref={cardRef} className="project-card">
        <h3>
          HAVE A PROJECT?
          <br />
          LET&apos;S TALK!
        </h3>

        <button
          ref={btnRef}
          type="button"
          className="primary-button"
          onMouseMove={handleMagneticMove}
          onMouseLeave={handleMagneticLeave}
          onClick={() => smoothScroll.scrollTo('#contact')}
        >
          GET IN TOUCH
        </button>
      </div>
    </section>
  )
}
