import { identityChips } from '../../data/identity'
import { Icon } from '../Icons/Icon'
import { Reveal } from '../Reveal/Reveal'

export function IdentityChips() {
  return (
    <div className="wrap identity-wrap">
      <Reveal className="identity-row">
        {identityChips.map((chip) => (
          <div className="identity-chip" key={chip.id}>
            <div className="icon">
              <Icon name={chip.icon} />
            </div>
            <div>
              <h4>{chip.title}</h4>
              <p>{chip.subtitle}</p>
            </div>
          </div>
        ))}
      </Reveal>
    </div>
  )
}
