import { useEffect, useState } from 'react'
import './Hero.css'

const roles = ['Full-Stack Developer', 'MERN Stack Engineer', 'Frontend Intern @ Beacon Health', 'UI/UX Enthusiast']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60)
      } else {
        timeout = setTimeout(() => setTyping(false), 1800)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30)
      } else {
        setRoleIndex((roleIndex + 1) % roles.length)
        setTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIndex])

  return (
    <section id="about" className="hero">
      <div className="hero-glow hero-glow-1" />
      <div className="hero-glow hero-glow-2" />

      <div className="hero-inner">
        <div className="hero-content">
          <p className="hero-greeting">
            <span className="mono-bracket">&gt;</span> Hello, World! I'm
          </p>

          <h1 className="hero-name">
            Preeti<br /><span className="name-accent">Singh</span>
          </h1>

          <div className="hero-role">
            <span className="role-text">{displayed}</span>
            <span className="cursor">|</span>
          </div>

          <p className="hero-bio">
            Full-Stack Developer building scalable MERN stack applications real-time systems,
            SaaS tools, and automation workflows. Currently crafting responsive UIs at{' '}
            <span className="highlight">Beacon Health</span>. Oracle Cloud AI Certified &amp;
            Infosys Pragati Scholar.
          </p>

          <div className="hero-cta">
            <a href="#projects" className="btn-neon" onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}>
              View Projects <span>→</span>
            </a>
            <a href="#contact" className="btn-outline" onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
              Get In Touch
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-num">6+</span>
              <span className="stat-label">Projects Built</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">2</span>
              <span className="stat-label">Internships</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">5+</span>
              <span className="stat-label">Certifications</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="avatar-ring">
            <div className="avatar-ring-2" />
            <div className="avatar-core">
              <span className="avatar-initials">PS</span>
              <div className="avatar-tag">B.Tech CSE</div>
            </div>
          </div>
          <div className="floating-badge badge-1">
            <span className="badge-dot" />MERN Stack
          </div>
          <div className="floating-badge badge-2">
            <span className="badge-dot green" />Oracle Certified
          </div>
          <div className="floating-badge badge-3">
            <span className="badge-dot purple" />Socket.io
          </div>
        </div>
      </div>

      <div className="scroll-hint">
        <span className="scroll-line" />
        <span className="scroll-text">scroll</span>
      </div>
    </section>
  )
}
