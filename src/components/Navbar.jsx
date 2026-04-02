import { useState, useEffect } from 'react'
import './Navbar.css'

const links = ['About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <div className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="logo-bracket">&lt;</span>
          <span className="logo-name">PS</span>
          <span className="logo-bracket">/&gt;</span>
        </div>

        <ul className="nav-links">
          {links.map((link, i) => (
            <li key={i}>
              <button onClick={() => scrollTo(link)} className="nav-link">
                <span className="nav-num">0{i + 1}.</span> {link}
              </button>
            </li>
          ))}
        </ul>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={menuOpen ? 'open' : ''}></span>
          <span className={menuOpen ? 'open' : ''}></span>
          <span className={menuOpen ? 'open' : ''}></span>
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          {links.map((link, i) => (
            <button key={i} onClick={() => scrollTo(link)} className="mobile-link">
              <span className="nav-num">0{i + 1}.</span> {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
