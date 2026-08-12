import { socialLinks } from '../../data/navigation'
import { Reveal } from '../Reveal/Reveal'

export function Contact() {
  const github = socialLinks.find((s) => s.id === 'github')
  const linkedin = socialLinks.find((s) => s.id === 'linkedin')

  return (
    <section id="contact">
      <div className="wrap contact-inner">
        <div className="eyebrow">Contact</div>
        <Reveal as="h2">Have a project in mind, or want to see more of the code?</Reveal>
        <Reveal className="contact-links">
          {github && (
            <a href={github.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              Explore my code →
            </a>
          )}
          {linkedin && (
            <a href={linkedin.url} className="btn btn-ghost" target="_blank" rel="noopener noreferrer">
              LinkedIn ↗
            </a>
          )}
          <a href="mailto:you@example.com" className="btn btn-ghost">
            Email ↗
          </a>
        </Reveal>
      </div>
    </section>
  )
}
