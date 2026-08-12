import { terminalSequence } from '../../data/terminalSequence'
import { useTerminalTyping } from '../../hooks/useTerminalTyping'

export function Terminal() {
  const { lines, finished } = useTerminalTyping(terminalSequence)

  return (
    <div className="terminal reveal visible">
      <div className="terminal-bar">
        <span className="terminal-dot" style={{ background: '#FF5F57' }} />
        <span className="terminal-dot" style={{ background: '#FEBC2E' }} />
        <span className="terminal-dot" style={{ background: '#28C840' }} />
        <span className="mono" style={{ color: 'var(--text-faint)', fontSize: 12, marginLeft: 8 }}>
          bash — rakibul@dev
        </span>
      </div>
      <div className="terminal-body">
        {lines.map((line, i) =>
          line.type === 'cmd' ? (
            <div className="line" key={i}>
              <span className="prompt">rakibul@dev:~$ </span>
              <span>{line.text}</span>
            </div>
          ) : (
            <div className="out" key={i}>
              {line.text}
            </div>
          ),
        )}
        {finished && (
          <div className="line">
            <span className="prompt">rakibul@dev:~$</span> <span className="cursor" />
          </div>
        )}
      </div>
    </div>
  )
}
