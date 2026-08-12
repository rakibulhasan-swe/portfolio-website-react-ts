import profileImage from '../../assets/profile.jpg'

export function PhotoFrame() {
  return (
    <div className="photo-frame">
      <div className="photo-frame-glow" />
      <div className="photo-frame-bar">
        <span className="terminal-dot" style={{ background: '#FF5F57' }} />
        <span className="terminal-dot" style={{ background: '#FEBC2E' }} />
        <span className="terminal-dot" style={{ background: '#28C840' }} />
        <span className="photo-frame-label">profile.jpg</span>
      </div>
      <div className="photo-frame-body">
        <img src={profileImage} alt="Md. Rakibul Hasan" loading="lazy" />
        <div className="photo-tint" />
        <div className="photo-scan" />
      </div>
      <div className="photo-caption">
        $ whoami <span className="out">→ Rakibul Hasan</span>
      </div>
    </div>
  )
}
