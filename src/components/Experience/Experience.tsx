import { experienceItems } from '../../data/experience'
import { Icon } from '../Icons/Icon'
import { Reveal } from '../Reveal/Reveal'

export function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <div className="eyebrow">Experience</div>
        <Reveal as="h2" className="section-title">
          Where I've Worked
        </Reveal>
        <Reveal as="p" className="section-intro">
          Remote roles across Bangladesh and Canada, building POS systems and UI features in
          production.
        </Reveal>

        <Reveal className="exp-card">
          {experienceItems.map((item) => (
            <div className="exp-item" key={item.id}>
              <div className="exp-logo" style={{ background: item.logoBg, color: item.logoColor }}>
                {item.logoInitial}
              </div>
              <div className="exp-body">
                <h3>{item.role}</h3>
                <div className="exp-meta">{item.company}</div>
                <div className="exp-dates">{item.period}</div>
                <div className="exp-location">{item.location}</div>
                <ul className="exp-bullets">
                  {item.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
                <div className="exp-skills">
                  <Icon name="briefcase" />
                  <span>
                    <strong>{item.skillsHighlight}</strong> {item.skillsRest}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
