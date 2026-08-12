import { skillCategories } from '../../data/skills'
import { Reveal } from '../Reveal/Reveal'

export function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="eyebrow">Skills</div>
        <Reveal as="h2" className="section-title">
          What I work with
        </Reveal>
        <Reveal as="p" className="section-intro">
          Organized by how I actually use them — not a wall of logos.
        </Reveal>

        <Reveal className="skills-grid">
          {skillCategories.map((cat) => (
            <div className="skill-cat" key={cat.id}>
              <h3>{cat.title}</h3>
              <div className="chip-list">
                {cat.items.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
