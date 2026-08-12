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
          Md. Rakibul Hasan — A Software Engineer specializing in React, Next.js, Node.js, and AI-integrated applications. Built production POS systems, scalable dashboards, and modern web products.
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
