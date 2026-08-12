import { foundationItems } from '../../data/foundations'
import { Reveal } from '../Reveal/Reveal'

export function Foundations() {
  return (
    <section id="foundations">
      <div className="wrap">
        <div className="eyebrow">Engineering Foundations</div>
        <Reveal as="h2" className="section-title">
          Understanding what's underneath
        </Reveal>
        <Reveal as="p" className="section-intro">
          Studying the core CS subjects that hold up everything above them.
        </Reveal>
        <Reveal className="found-row">
          {foundationItems.map((item) => (
            <div className="found-item" key={item.id}>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
