#!/bin/bash
set -e
cd /mnt/c/Users/DELL/Preeti-portfolio
echo "✅ Updating portfolio files..."

cat > src/components/Hero.jsx << 'HEREDOC'
import { useEffect, useState } from 'react'
import './Hero.css'

const roles = ['Full-Stack Developer', 'MERN Stack Engineer', 'Android Developer', 'Open Source Contributor', 'Software Engineer Intern @ Dipa Poros']

const tracks = [
  { dot: 'cyan',   label: 'MERN Stack',        sub: 'React · Node · MongoDB · Express' },
  { dot: 'green',  label: 'Android Dev',        sub: 'Kotlin · Android SDK · Play Store' },
  { dot: 'purple', label: 'Open Source',        sub: 'Rocket.Chat · GSSoC 2026' },
  { dot: 'yellow', label: 'Oracle AI Certified',sub: 'OCI AI Foundation 2025' },
]

const circles = [
  { label: 'FULL STACK', sub: 'MERN · REST APIs', color: '#00f5ff', cx: 50, cy: 32, r: 28 },
  { label: 'ANDROID',    sub: 'Kotlin · SDK',     color: '#bf5fff', cx: 32, cy: 62, r: 24 },
  { label: 'AI / ML',    sub: 'IBM · Python',     color: '#00ff88', cx: 68, cy: 65, r: 22 },
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
        {/* LEFT — content */}
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
            <div className="stat"><span className="stat-num">4</span><span className="stat-label">Internships</span></div>
            <div className="stat-divider" />
            <div className="stat"><span className="stat-num">8+</span><span className="stat-label">Achievements</span></div>
            <div className="stat-divider" />
            <div className="stat"><span className="stat-num">2</span><span className="stat-label">Android Apps</span></div>
          </div>
        </div>

        {/* RIGHT — reference-style graphic */}
        <div className="hero-visual">
          <div className="visual-card">
            {/* Header row */}
            <div className="vc-header">
              <span className="vc-title">SKILL PILLARS · ACTIVE TRACKS</span>
              <span className="vc-live"><span className="live-dot" />Live</span>
            </div>

            <div className="vc-body">
              {/* Left — overlapping circles */}
              <div className="vc-circles">
                <svg viewBox="0 0 100 100" className="circles-svg">
                  <defs>
                    {circles.map((c, i) => (
                      <radialGradient key={i} id={`grad${i}`} cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor={c.color} stopOpacity="0.18" />
                        <stop offset="100%" stopColor={c.color} stopOpacity="0.04" />
                      </radialGradient>
                    ))}
                  </defs>
                  {circles.map((c, i) => (
                    <g key={i}>
                      <circle cx={c.cx} cy={c.cy} r={c.r} fill={`url(#grad${i})`} stroke={c.color} strokeWidth="0.6" strokeOpacity="0.6" />
                      <text x={c.cx} y={c.cy - 3} textAnchor="middle" fill={c.color} fontSize="5.5" fontWeight="700" fontFamily="'Syne',sans-serif" letterSpacing="0.3">{c.label}</text>
                      <text x={c.cx} y={c.cy + 5} textAnchor="middle" fill={c.color} fontSize="3.5" fontOpacity="0.7" fontFamily="monospace">{c.sub}</text>
                    </g>
                  ))}
                </svg>
              </div>

              {/* Right — tracks list */}
              <div className="vc-tracks">
                <p className="vc-tracks-label">ACTIVE TRACKS</p>
                {tracks.map((t, i) => (
                  <div key={i} className="vc-track-item">
                    <span className={`track-dot track-dot--${t.dot}`} />
                    <div>
                      <p className="track-name">{t.label}</p>
                      <p className="track-sub">{t.sub}</p>
                    </div>
                  </div>
                ))}
                <a
                  href="#skills"
                  className="vc-see-all"
                  onClick={e => { e.preventDefault(); document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }) }}
                >
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
HEREDOC

cat > src/components/Hero.css << 'HEREDOC'
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 7rem 2rem 4rem;
  position: relative;
  overflow: hidden;
}

.hero-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  pointer-events: none;
}
.hero-glow-1 { width: 500px; height: 500px; background: rgba(0,245,255,0.06); top: -100px; left: -100px; }
.hero-glow-2 { width: 400px; height: 400px; background: rgba(191,95,255,0.05); bottom: 0; right: 10%; }

.hero-inner {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 420px;
  gap: 3rem;
  align-items: center;
}

/* ── Left content ── */
.hero-greeting {
  font-family: var(--font-mono);
  font-size: 0.9rem;
  color: var(--neon-cyan);
  margin-bottom: 1rem;
  animation: fadeInUp 0.6s ease forwards;
}
.mono-bracket { color: var(--text-muted); margin-right: 6px; }

.hero-name {
  font-family: var(--font-display);
  font-size: clamp(3.5rem, 8vw, 6rem);
  font-weight: 800;
  line-height: 0.95;
  color: var(--text-primary);
  margin-bottom: 1.25rem;
  animation: fadeInUp 0.7s 0.1s ease both;
  letter-spacing: -2px;
}
.name-accent {
  color: transparent;
  -webkit-text-stroke: 2px var(--neon-cyan);
}

.hero-role {
  font-family: var(--font-mono);
  font-size: clamp(0.9rem, 2vw, 1.2rem);
  color: var(--neon-green);
  margin-bottom: 1.5rem;
  min-height: 2rem;
  animation: fadeInUp 0.7s 0.2s ease both;
}
.cursor { animation: blink 1s infinite; color: var(--neon-cyan); margin-left: 2px; }

.hero-bio {
  font-size: 0.97rem;
  color: var(--text-secondary);
  line-height: 1.8;
  max-width: 520px;
  margin-bottom: 2.5rem;
  animation: fadeInUp 0.7s 0.3s ease both;
}
.highlight { color: var(--neon-cyan); }

.hero-cta {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 3rem;
  animation: fadeInUp 0.7s 0.4s ease both;
}

.hero-stats {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  animation: fadeInUp 0.7s 0.5s ease both;
}
.stat { text-align: center; }
.stat-num { display: block; font-family: var(--font-mono); font-size: 1.6rem; font-weight: 700; color: var(--neon-cyan); line-height: 1; }
.stat-label { font-size: 0.68rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.1em; }
.stat-divider { width: 1px; height: 36px; background: var(--border); }

/* ── Right — Visual Card ── */
.hero-visual {
  animation: fadeIn 0.8s 0.4s ease both;
}

.visual-card {
  background: rgba(13, 17, 23, 0.85);
  border: 1px solid rgba(0,245,255,0.15);
  border-radius: 16px;
  padding: 1.25rem;
  backdrop-filter: blur(12px);
  box-shadow: 0 0 40px rgba(0,245,255,0.06), 0 20px 60px rgba(0,0,0,0.4);
}

.vc-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(255,255,255,0.06);
}
.vc-title {
  font-family: var(--font-mono);
  font-size: 0.62rem;
  color: var(--text-muted);
  letter-spacing: 0.15em;
}
.vc-live {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-family: var(--font-mono);
  font-size: 0.68rem;
  color: var(--text-secondary);
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  padding: 0.2rem 0.65rem;
  border-radius: 20px;
}
.live-dot {
  width: 7px; height: 7px;
  border-radius: 50%;
  background: var(--neon-green);
  box-shadow: 0 0 6px var(--neon-green);
  animation: pulse-neon 2s ease-in-out infinite;
}

.vc-body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  align-items: center;
}

/* Circles */
.vc-circles {
  display: flex;
  align-items: center;
  justify-content: center;
}
.circles-svg {
  width: 100%;
  max-width: 180px;
  filter: drop-shadow(0 0 8px rgba(0,245,255,0.15));
}

/* Tracks list */
.vc-tracks {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}
.vc-tracks-label {
  font-family: var(--font-mono);
  font-size: 0.58rem;
  color: var(--text-muted);
  letter-spacing: 0.15em;
  margin-bottom: 0.25rem;
}

.vc-track-item {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
}
.track-dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-top: 4px;
}
.track-dot--cyan   { background: var(--neon-cyan);   box-shadow: 0 0 6px var(--neon-cyan); }
.track-dot--green  { background: var(--neon-green);  box-shadow: 0 0 6px var(--neon-green); }
.track-dot--purple { background: var(--neon-purple); box-shadow: 0 0 6px var(--neon-purple); }
.track-dot--yellow { background: #ffd700;            box-shadow: 0 0 6px #ffd700; }

.track-name {
  font-family: var(--font-display);
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.2;
}
.track-sub {
  font-family: var(--font-mono);
  font-size: 0.62rem;
  color: var(--text-muted);
  margin-top: 1px;
}

.vc-see-all {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  color: var(--neon-cyan);
  text-decoration: none;
  margin-top: 0.25rem;
  transition: opacity 0.2s;
  cursor: pointer;
}
.vc-see-all:hover { opacity: 0.7; }

/* Scroll hint */
.scroll-hint {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  animation: fadeIn 1s 1s ease both;
}
.scroll-line {
  width: 1px; height: 50px;
  background: linear-gradient(to bottom, var(--neon-cyan), transparent);
  animation: scrollPulse 2s ease-in-out infinite;
}
@keyframes scrollPulse {
  0% { opacity: 1; transform: scaleY(1); transform-origin: top; }
  100% { opacity: 0; transform: scaleY(0); transform-origin: top; }
}
.scroll-text {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  color: var(--text-muted);
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

/* Responsive */
@media (max-width: 960px) {
  .hero-inner { grid-template-columns: 1fr; }
  .hero-visual { display: none; }
  .hero-bio { margin: 0 auto 2.5rem; }
}

@media (max-width: 600px) {
  .hero { padding: 6rem 1.25rem 3rem; }
  .hero-name { font-size: 3rem; letter-spacing: -1px; }
  .hero-role { font-size: 0.9rem; }
  .hero-bio { font-size: 0.9rem; }
  .hero-cta { flex-direction: column; align-items: center; }
  .btn-neon, .btn-outline { width: 100%; justify-content: center; }
  .hero-stats { gap: 1rem; }
  .stat-num { font-size: 1.3rem; }
  .scroll-hint { display: none; }
}
HEREDOC

cat > src/components/Experience.jsx << 'HEREDOC'
import './Experience.css'

const experiences = [
  {
    role: 'Software Engineer Intern',
    company: 'Dipa Poros',
    period: 'Current',
    type: 'Full Time · Current',
    color: 'cyan',
    stack: 'React.js · JavaScript · Node.js · Python · Tkinter · Kotlin · REST APIs · Git/GitHub',
    points: [
      'Built 5+ Python automation tools that streamlined repetitive internal workflows.',
      'Developed 15+ reusable React components, improving UI consistency across products.',
      'Used AI-assisted development tools to ship two Android applications published to Google Play testing tracks.',
    ]
  },
  {
    role: 'Frontend / UI Engineering Intern',
    company: 'Beacon Health Limited',
    period: 'Jan 2026 – Jul 2026',
    type: 'Full Time',
    color: 'green',
    stack: 'HTML · CSS · JavaScript · React.js · Jotform',
    points: [
      'Developed and maintained production-grade web applications for client-focused solutions.',
      'Built frontend features and reusable UI components for live healthcare products.',
      'Implemented backend functionality and REST API integrations.',
    ]
  },
  {
    role: 'AI/ML Intern (Selected)',
    company: 'Infosys Springboard',
    period: 'Ongoing · Remote',
    type: 'Remote · Ongoing',
    color: 'purple',
    stack: 'Python · Machine Learning · IBM AI Tools',
    points: [
      'Selected for the AI/ML Internship program to strengthen knowledge of AI, ML, and real-world AI applications.',
      'Working with IBM AI tools and ML fundamentals including supervised learning and data preprocessing.',
    ]
  },
  {
    role: 'AI/ML Intern',
    company: 'Edunet Foundation (AICTE | IBM)',
    period: 'Jan 2026 – Mar 2026',
    type: 'Virtual · 6 weeks',
    color: 'green',
    stack: 'Python · Machine Learning · IBM Tools · Data Preprocessing',
    points: [
      'Completed training in AI/ML fundamentals including supervised learning, model evaluation, and data preprocessing.',
      'Developed a capstone project applying ML concepts to a real-world problem using Python and IBM tools.',
    ]
  },
  {
    role: 'Open Source Contributor',
    company: 'Rocket.Chat',
    period: 'Ongoing · Remote',
    type: 'Remote · Ongoing',
    color: 'cyan',
    stack: 'React · TypeScript',
    points: [
      'Contributing to Rocket.Chat, a large-scale open-source communication platform.',
      'Investigating and debugging frontend issues, writing pull requests, and collaborating with maintainers through code review.',
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="experience-inner">
        <div className="section-tag">// 03. work history</div>
        <h2 className="section-title">Work <span>Experience</span></h2>
        <div className="section-divider" />

        <div className="exp-timeline">
          {experiences.map((exp, i) => (
            <div key={i} className={"exp-item exp-item--" + exp.color}>
              <div className="exp-marker">
                <div className={"exp-dot exp-dot--" + exp.color} />
                {i < experiences.length - 1 && <div className="exp-line" />}
              </div>
              <div className="exp-card">
                <div className="exp-card-top">
                  <div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <p className="exp-company">{exp.company}</p>
                    <p className="exp-stack">{exp.stack}</p>
                  </div>
                  <div className="exp-meta">
                    <span className={"exp-badge exp-badge--" + exp.color}>{exp.type}</span>
                    <span className="exp-period">{exp.period}</span>
                  </div>
                </div>
                <ul className="exp-points">
                  {exp.points.map((pt, j) => (
                    <li key={j} className="exp-point">
                      <span className={"exp-arrow exp-arrow--" + exp.color}>›</span>{pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
HEREDOC

cat > src/components/Certifications.jsx << 'HEREDOC'
import { useState } from 'react'
import './Certifications.css'

const certs = [
  {
    title: 'Oracle Cloud Infrastructure 2025',
    subtitle: 'AI Foundation Associate',
    issuer: 'Oracle',
    icon: '☁',
    color: 'cyan',
    type: 'Certification',
    proof: null,
    proofLabel: 'OCI AI Foundation Certificate',
    description: 'Demonstrated proficiency in Oracle Cloud Infrastructure AI services, including AI foundations, machine learning, and OCI AI services.'
  },
  {
    title: 'Full Stack Development',
    subtitle: 'MERN Stack Certification',
    issuer: 'GeeksforGeeks',
    icon: '⬡',
    color: 'green',
    type: 'Certification',
    proof: null,
    proofLabel: 'GFG Full Stack Certificate',
    description: 'Comprehensive certification covering MongoDB, Express.js, React.js, and Node.js — full MERN stack development from fundamentals to deployment.'
  },
  {
    title: 'Artificial Intelligence Fundamentals',
    subtitle: 'AI Fundamentals Certification',
    issuer: 'IBM SkillsBuild',
    icon: '◈',
    color: 'purple',
    type: 'Certification',
    proof: null,
    proofLabel: 'IBM AI Fundamentals Certificate',
    description: 'Certified in AI fundamentals including machine learning concepts, neural networks, and practical AI application development using IBM tools.'
  },
  {
    title: 'EY Scholarship',
    subtitle: 'Academic Excellence & Technical Aptitude',
    issuer: 'Ernst & Young',
    icon: '✦',
    color: 'cyan',
    type: 'Scholarship',
    proof: null,
    proofLabel: 'EY Scholarship Certificate',
    description: 'Awarded by Ernst & Young for outstanding academic performance and demonstrated technical aptitude in engineering.'
  }
]

const achievements = [
  { icon: '🟢', text: 'Google Student Ambassador', sub: 'Promoted Google developer tools & organized tech events on campus' },
  { icon: '🔷', text: 'Infosys Springboard Pragati Cohort 8', sub: 'Merit-based program for high-potential engineering students' },
  { icon: '📗', text: 'Campus Mantri — GeeksforGeeks', sub: 'Represented GFG initiatives and developer programs on campus' },
  { icon: '🚀', text: 'E-Cell IIT Bombay Campus Ambassador', sub: 'Represented E-Cell IIT Bombay entrepreneurship initiatives' },
  { icon: '💻', text: 'GirlScript Summer of Code (GSSoC) 2026', sub: 'Participant in the open-source contribution program' },
  { icon: '⚡', text: 'IDE Bootcamp 2026', sub: 'Selected participant in the IDE innovation bootcamp' },
  { icon: '☁', text: 'Google Cloud Arcade Facilitator', sub: 'Facilitated Google Cloud learning challenges' },
  { icon: '🏅', text: '100 Days LeetCode Badge', sub: 'Consistent problem solving — 100+ problems solved' },
]

export default function Certifications() {
  const [selected, setSelected] = useState(null)
  const close = () => setSelected(null)

  return (
    <section id="certifications" className="certifications">
      <div className="certs-inner">
        <div className="section-tag">// 05. credentials</div>
        <h2 className="section-title">Certifications & <span>Achievements</span></h2>
        <div className="section-divider" />

        <p className="certs-hint">
          <span className="hint-icon">↗</span> Click any certificate card to view details
        </p>

        <h3 className="creds-sub-title">Certifications</h3>
        <div className="certs-grid">
          {certs.map((cert, i) => (
            <div
              key={i}
              className={"cert-card cert-card--" + cert.color}
              onClick={() => setSelected(cert)}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && setSelected(cert)}
            >
              <div className="cert-top">
                <span className={"cert-icon cert-icon--" + cert.color}>{cert.icon}</span>
                <span className={"cert-type cert-type--" + cert.color}>{cert.type}</span>
              </div>
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-subtitle">{cert.subtitle}</p>
              <p className="cert-issuer">— {cert.issuer}</p>
              <span className="cert-view-hint">View Details →</span>
            </div>
          ))}
        </div>

        <h3 className="creds-sub-title" style={{marginTop: '3rem'}}>Achievements & Recognition</h3>
        <div className="achievements-grid">
          {achievements.map((a, i) => (
            <div key={i} className="achievement-item">
              <span className="achievement-icon">{a.icon}</span>
              <div>
                <p className="achievement-text">{a.text}</p>
                <p className="achievement-sub">{a.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Simple modal — original style */}
      {selected && (
        <div className="modal-overlay" onClick={close}>
          <div className={"modal modal--" + selected.color} onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={close}>✕</button>
            <div className="modal-header">
              <span className={"modal-icon modal-icon--" + selected.color}>{selected.icon}</span>
              <div className="modal-header-text">
                <span className={"cert-type cert-type--" + selected.color}>{selected.type}</span>
                <h2 className="modal-title">{selected.title}</h2>
                <p className="modal-subtitle">{selected.subtitle}</p>
                <p className="modal-issuer">Issued by <strong>{selected.issuer}</strong></p>
              </div>
            </div>
            <p className="modal-description">{selected.description}</p>
            <div className="modal-proof-area">
              <p className="proof-label">
                <span className={"proof-dot proof-dot--" + selected.color} />
                {selected.proofLabel}
              </p>
              {selected.proof ? (
                <img src={selected.proof} alt={selected.proofLabel} className="proof-image" />
              ) : (
                <div className="proof-placeholder">
                  <div className="placeholder-icon">🖼</div>
                  <p className="placeholder-text">Certificate image coming soon</p>
                  <p className="placeholder-sub">Upload your image and set <code>proof: '/certs/filename.png'</code></p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
HEREDOC

echo "✅ All files updated! Run: npm run dev"
