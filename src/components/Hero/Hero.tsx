import { Terminal } from '../Terminal/Terminal'

export function Hero() {
  return (
    <div className="wrap hero">
      <div>
        <div className="eyebrow">Software Engineer · Bangladesh</div>
        <h1>
          I build full-stack products
          <br /> that solve real problems
          <span className="hl">.</span>
        </h1>
        <p className="lede">
          Md. Rakibul Hasan — a full-stack JavaScript developer working across React, Node.js, and
          MongoDB, strengthening CS fundamentals through DSA, and integrating AI where it actually
          earns its place.
        </p>
        <div className="btn-row">
          <a href="#work" className="btn btn-primary">
            View Projects
          </a>
          <a
            href="https://github.com/rakibulhasan-swe"
            className="btn btn-ghost"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
        </div>
      </div>

      <Terminal />
    </div>
  )
}
