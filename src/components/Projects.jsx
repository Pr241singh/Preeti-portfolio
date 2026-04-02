import { useState } from 'react'
import './Projects.css'

const projects = [
  {
    title: 'Real-Time Chat Application',
    desc: 'A full-stack messaging platform with instant bidirectional communication using WebSockets. Features user authentication, persistent chat history, and a responsive React frontend.',
    stack: ['React.js', 'Node.js', 'Express.js', 'Socket.io', 'MongoDB'],
    live: 'https://chat-application-delta-gray.vercel.app/login',
    github: 'https://github.com/Pr241singh/chat-application',
    type: 'live',
    featured: true,
    color: 'cyan',
    num: '01'
  },
  {
    title: 'Background Remover (SaaS)',
    desc: 'A SaaS-style web app for automated background removal using Cloudinary AI. Includes Clerk authentication, drag-and-drop uploads, real-time preview, and production-ready deployment.',
    stack: ['React.js', 'Clerk Auth', 'Cloudinary API', 'Vercel'],
    live: 'https://bg-removal-three-murex.vercel.app/',
    github: 'https://github.com/Pr241singh/bg-removal',
    type: 'live',
    featured: true,
    color: 'green',
    num: '02'
  },
  {
    title: 'Beacon Health Website',
    desc: 'Professional healthcare website built during my internship at Beacon Health Limited. Focused on responsive UI architecture, accessibility, and seamless cross-device UX.',
    stack: ['JS', 'CSS3', 'Responsive Design', 'UI/UX', 'AI Chatbot', 'Jotform'],
    live: 'https://www.beaconhealth.co.nz/',
    github: null,
    type: 'live',
    featured: true,
    color: 'purple',
    num: '03'
  },
  {
    title: 'Amazon Clone',
    desc: 'A pixel-perfect clone of Amazon\'s e-commerce UI with product listings, cart functionality, and responsive layout replicating the core shopping experience.',
    stack: ['JavaScript', 'CSS3', 'HTML5'],
    live: null,
    github: 'https://github.com/Pr241singh/amazon',
    type: 'source',
    featured: false,
    color: 'cyan',
    num: '04'
  },
  {
    title: 'PreplayConnect',
    desc: 'A networking/connection platform for players to discover and connect with teammates. Built with MERN stack with real-time features and user profile management.',
    stack: ['JavaScript', 'CSS3', 'HTML5'],
    live: null,
    github: 'https://github.com/Pr241singh/preplayconnect',
    type: 'source',
    featured: false,
    color: 'green',
    num: '05'
  },
  {
    title: 'Deployment Automation Tool',
    desc: 'A Python desktop application that automates file transfer and deployment workflows, including Gmail automation scripts — built during my Beacon Health internship.',
    stack: ['Python', 'Tkinter', 'Automation', 'Gmail API'],
    live: null,
    github: 'https://github.com/Pr241singh/Deployment-automation-tool-',
    type: 'source',
    featured: false,
    color: 'purple',
    num: '06'
  }
]

export default function Projects() {
  const [filter, setFilter] = useState('all')

  const filtered = filter === 'all' ? projects : projects.filter(p => p.type === filter)

  return (
    <section id="projects" className="projects">
      <div className="projects-inner">
        <div className="section-tag">// 04. work</div>
        <h2 className="section-title">Featured <span>Projects</span></h2>
        <div className="section-divider" />

        <div className="project-filters">
          {['all', 'live', 'source'].map(f => (
            <button
              key={f}
              className={`filter-btn ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f === 'all' ? 'All Projects' : f === 'live' ? '🟢 Live' : '🔵 Source Code'}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map((proj, i) => (
            <div key={i} className={`proj-card proj-card--${proj.color} ${proj.featured ? 'featured' : ''}`}>
              <div className="proj-top">
                <span className="proj-num">{proj.num}</span>
                <div className="proj-links">
                  {proj.github && (
                    <a href={proj.github} target="_blank" rel="noopener noreferrer" className="proj-link" title="GitHub">
                      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                    </a>
                  )}
                  {proj.live && (
                    <a href={proj.live} target="_blank" rel="noopener noreferrer" className={`proj-link proj-link--live proj-link--${proj.color}`} title="Live Demo">
                      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              <h3 className="proj-title">{proj.title}</h3>
              <p className="proj-desc">{proj.desc}</p>

              <div className="proj-stack">
                {proj.stack.map((s, j) => (
                  <span key={j} className={`stack-tag stack-tag--${proj.color}`}>{s}</span>
                ))}
              </div>

              <div className="proj-footer">
                {proj.live ? (
                  <span className="proj-status live">● Live</span>
                ) : (
                  <span className="proj-status source">● Source Code</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="github-cta">
          <p className="github-text">Want to see more?</p>
          <a href="https://github.com/Pr241singh" target="_blank" rel="noopener noreferrer" className="btn-neon">
            View All on GitHub →
          </a>
        </div>
      </div>
    </section>
  )
}
