import { focusItems, quote } from '../../data/focus'
import { Icon } from '../Icons/Icon'
import { PhotoFrame } from '../PhotoFrame/PhotoFrame'
import { Reveal } from '../Reveal/Reveal'

export function Focus() {
  return (
    <section id="focus">
      <div className="wrap">
        <div className="eyebrow">Engineering Focus</div>
        <Reveal as="h2" className="section-title">
          What I'm Focused On
        </Reveal>
        <Reveal as="p" className="section-intro">
          The areas I spend most of my time in right now — and the story behind why.
        </Reveal>

        <Reveal className="focus-grid">
          <div className="focus-list-card">
            {focusItems.map((item) => (
              <div className="focus-list-item" key={item.id}>
                <div className="icon">
                  <Icon name={item.icon} />
                </div>
                <div className="body">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
                <span className="arrow">→</span>
              </div>
            ))}
          </div>

          <div className="focus-right">
            <div className="quote-card">
              <div className="quote-mark">"</div>
              <blockquote>{quote.text}</blockquote>
              <cite>{quote.attribution}</cite>
            </div>
            <PhotoFrame />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
