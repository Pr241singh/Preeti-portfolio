import { useEffect, useState } from 'react'
import './Hero.css'

const roles = ['Full-Stack Developer', 'MERN Stack Engineer', 'Android Developer', 'Open Source Contributor', 'Software Engineer Intern @ Dipa Poros']

const tracks = [
  { dot: 'cyan',   label: 'MERN Stack',         sub: 'React · Node · MongoDB · Express' },
  { dot: 'green',  label: 'Android Dev',         sub: 'Kotlin · Android SDK · Play Store' },
  { dot: 'purple', label: 'Open Source',         sub: 'Rocket.Chat · GSSoC 2026' },
  { dot: 'yellow', label: 'Oracle AI Certified', sub: 'OCI AI Foundation 2025' },
]

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
        {/* LEFT */}
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
            Full-Stack &amp; Android Developer building scalable MERN apps, real-time
            systems, and production-grade tools. Currently at{' '}
            <span className="highlight">Dipa Poros</span> &amp;{' '}
            <span className="highlight">Rocket.Chat</span> contributor.
            Oracle Cloud AI Certified · Infosys Pragati Scholar · GSSoC 2026.
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
            <div className="stat"><span className="stat-num">8+</span><span className="stat-label">Projects</span></div>
            <div className="stat-divider" />
            <div className="stat"><span className="stat-num">5</span><span className="stat-label">Internships</span></div>
            <div className="stat-divider" />
            <div className="stat"><span className="stat-num">8+</span><span className="stat-label">Achievements</span></div>
            <div className="stat-divider" />
            <div className="stat"><span className="stat-num">2</span><span className="stat-label">Android Apps</span></div>
          </div>
        </div>

        {/* RIGHT — animated visual card */}
        <div className="hero-visual">
          <div className="visual-card">
            <div className="vc-header">
              <span className="vc-title">SKILL PILLARS · ACTIVE TRACKS</span>
              <span className="vc-live"><span className="live-dot" />Live</span>
            </div>
            <div className="vc-body">
              {/* Animated overlapping circles */}
              <div className="vc-circles">
                <div className="bubble bubble-1">
                  <span className="bubble-label">FULL STACK</span>
                  <span className="bubble-sub">MERN · REST APIs</span>
                </div>
                <div className="bubble bubble-2">
                  <span className="bubble-label">ANDROID</span>
                  <span className="bubble-sub">Kotlin · SDK</span>
                </div>
                <div className="bubble bubble-3">
                  <span className="bubble-label">AI / ML</span>
                  <span className="bubble-sub">IBM · Python</span>
                </div>
              </div>
              {/* Tracks */}
              <div className="vc-tracks">
                <p className="vc-tracks-label">ACTIVE TRACKS</p>
                {tracks.map((t, i) => (
                  <div key={i} className="vc-track-item">
                    <span className={"track-dot track-dot--" + t.dot} />
                    <div>
                      <p className="track-name">{t.label}</p>
                      <p className="track-sub">{t.sub}</p>
                    </div>
                  </div>
                ))}
                <a href="#skills" className="vc-see-all"
                  onClick={e => { e.preventDefault(); document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }) }}>
                  See all skills →
                </a>
              </div>
            </div>
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
