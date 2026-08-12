import { useState } from 'react'
import { navLinks } from '../../data/navigation'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header>
      <nav>
        <a href="#top" className="logo">
          rakibul<span className="dot">.</span>dev
        </a>
        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.id} href={link.href}>
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/rakibulhasan-swe"
            className="nav-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
        </div>
        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          ☰
        </button>
      </nav>
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a key={link.id} href={link.href} onClick={() => setMenuOpen(false)}>
            {link.label}
          </a>
        ))}
        <a
          href="https://github.com/rakibulhasan-swe"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
        >
          GitHub ↗
        </a>
      </div>
    </header>
  )
}
