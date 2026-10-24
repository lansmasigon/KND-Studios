import './HowWeDoItSection.css'

const steps = [
  {
    title: 'LISTEN',
    text: 'We learn your goals, pain points, and business context before shaping the right solution.',
  },
  {
    title: 'BUILD',
    text: 'We design and develop with clarity, translating strategy into practical digital systems that work.',
  },
  {
    title: 'SUPPORT',
    text: 'Once it is live, we help refine, optimize, and maintain the experience as your business grows.',
  },
]

export default function HowWeDoItSection() {
  return (
    <section id="how-we-do-it" className="section how-we-do-it">
      <div className="section-header centered">
        <h2>HOW WE DO IT</h2>
      </div>

      <div className="process-grid">
        {steps.map((step) => (
          <article key={step.title} className="process-card">
            <h3 className="process-title">{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
