import { useEffect, useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import HowWeDoItSection from './components/HowWeDoItSection'
import LandingSection from './components/LandingSection'
import ProjectCardSection from './components/ProjectCardSection'
import ServiceShowcasePage from './components/ServiceShowcasePage'
import WhatWeDoSection from './components/WhatWeDoSection'
import { servicesData } from './data/servicesData'
import { smoothScroll } from './utils/smoothScroll'

function getSlugFromHash(): string | null {
  const hash = window.location.hash
  if (hash.startsWith('#/services/')) {
    const slug = hash.replace('#/services/', '').trim()
    if (servicesData.some((s) => s.slug === slug)) {
      return slug
    }
  }
  return null
}

function App() {
  const [activeServiceSlug, setActiveServiceSlug] = useState<string | null>(
    () => getSlugFromHash()
  )
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    smoothScroll.init()

    const onHashChange = () => {
      const slug = getSlugFromHash()
      setActiveServiceSlug(slug)
    }

    window.addEventListener('hashchange', onHashChange)
    return () => {
      window.removeEventListener('hashchange', onHashChange)
      smoothScroll.destroy()
    }
  }, [])

  const navigateToService = (slug: string) => {
    setIsTransitioning(true)
    setTimeout(() => {
      window.history.pushState(null, '', `#/services/${slug}`)
      setActiveServiceSlug(slug)
      smoothScroll.scrollTo(0, true)
    }, 220)
    setTimeout(() => {
      setIsTransitioning(false)
    }, 480)
  }

  const navigateToHomeSection = (target: string | number = '#services') => {
    if (!activeServiceSlug) {
      smoothScroll.scrollTo(target)
      return
    }

    setIsTransitioning(true)
    setTimeout(() => {
      const hash = typeof target === 'string' ? target : ''
      window.history.pushState(null, '', hash || window.location.pathname)
      setActiveServiceSlug(null)
      requestAnimationFrame(() => {
        smoothScroll.scrollTo(target, true)
      })
    }, 220)
    setTimeout(() => {
      setIsTransitioning(false)
    }, 480)
  }

  return (
    <div className="page-shell">
      <div
        className={`minimal-page-wipe ${isTransitioning ? 'is-active' : ''}`}
        aria-hidden="true"
      />

      {activeServiceSlug ? (
        <>
          <ServiceShowcasePage
            key={activeServiceSlug}
            serviceSlug={activeServiceSlug}
            onBackHome={() => navigateToHomeSection('#services')}
            onSelectService={navigateToService}
          />
          <Footer onNavigateSection={navigateToHomeSection} />
        </>
      ) : (
        <>
          <LandingSection />
          <WhatWeDoSection onSelectService={navigateToService} />
          <HowWeDoItSection />
          <ProjectCardSection />
          <Footer onNavigateSection={navigateToHomeSection} />
        </>
      )}
    </div>
  )
}

export default App
