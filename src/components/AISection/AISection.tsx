import { aiFlowNodes } from '../../data/foundations'
import { Reveal } from '../Reveal/Reveal'

export function AISection() {
  return (
    <section id="ai">
      <div className="wrap">
        <div className="eyebrow">AI Integration</div>
        <Reveal as="h2" className="section-title">
          Building software with AI, not just talking about it
        </Reveal>
        <Reveal as="p" className="section-intro">
          Only the concepts I've actually learned or shipped are marked active — the rest is the
          direction I'm growing toward.
        </Reveal>
        <Reveal className="ai-flow">
          {aiFlowNodes.map((node, i) => (
            <span key={node.id}>
              <span className={`ai-node ${node.status}`}>{node.label}</span>
              {i < aiFlowNodes.length - 1 && <span className="ai-sep">→</span>}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
