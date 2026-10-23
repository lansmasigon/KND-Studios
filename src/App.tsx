import './App.css'
import Footer from './components/Footer'
import HowWeDoItSection from './components/HowWeDoItSection'
import LandingSection from './components/LandingSection'
import ProjectCardSection from './components/ProjectCardSection'
import WhatWeDoSection from './components/WhatWeDoSection'

function App() {
  return (
    <div className="page-shell">
      <LandingSection />
      <WhatWeDoSection />
      <HowWeDoItSection />
      <ProjectCardSection />
      <Footer />
    </div>
  )
}

export default App
