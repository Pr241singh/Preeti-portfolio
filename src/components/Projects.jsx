import { useState } from 'react'
import './Projects.css'

const projects = [
  {
    title: 'Real-Time Chat Application',
    desc: 'Full-stack messaging platform with instant bidirectional communication via Socket.io, RESTful backend APIs for auth/session handling, and MongoDB for persistent chat history.',
    stack: ['React.js', 'Node.js', 'Express.js', 'Socket.io', 'MongoDB'],
    live: 'https://chat-application-delta-gray.vercel.app/login',
    github: 'https://github.com/Pr241singh/chat-application',
    type: 'live', color: 'cyan', num: '01', platform: 'web'
  },
  {
    title: 'Background Remover (SaaS)',
    desc: 'SaaS-style web app for automated background removal using Cloudinary AI. Features Clerk authentication, drag-and-drop uploads, real-time preview, and production-ready Vercel deployment.',
    stack: ['React.js', 'Clerk Auth', 'Cloudinary API', 'Vercel'],
    live: 'https://bg-removal-three-murex.vercel.app/',
    github: 'https://github.com/Pr241singh/bg-removal',
    type: 'live', color: 'green', num: '02', platform: 'web'
  },
  {
    title: 'BeaconSOS',
    desc: 'Privacy-first Android emergency app with lock-screen SOS activation, live location sharing, emergency messaging, medical information storage, and up to five trusted emergency contacts.',
    stack: ['Kotlin', 'Android SDK', 'Location Services', 'Material Design'],
    live: 'https://play.google.com/apps/internaltest/4701608712879542024',
    github: 'https://github.com/Pr241singh/BeaconSOS',
    type: 'live', color: 'purple', num: '03', platform: 'android'
  },
  {
    title: 'SMS Monitoring & Alert',
    desc: 'Android app that monitors incoming SMS messages, detects predefined keywords or important events, and automatically triggers real-time alerts and notifications for timely user awareness.',
    stack: ['Kotlin', 'Android SDK', 'SMS Manager', 'Notifications API', 'Material Design'],
    live: 'https://play.google.com/store/apps/details?id=com.smsmonitor.alert',
    github: 'https://github.com/Pr241singh/SMS-Monitoring-Alert-',
    type: 'live', color: 'cyan', num: '04', platform: 'android'
  },
  {
    title: 'Dipa Poros Platform',
    desc: 'Production-grade web application built during internship — includes reusable frontend components, backend services, Python desktop tools, and Android apps to improve client workflows.',
    stack: ['React.js', 'JavaScript', 'Node.js', 'Python', 'Tkinter', 'Kotlin', 'REST APIs'],
    live: 'https://www.dipaporos.com/',
    github: 'https://github.com/Pr241singh/Dipa-Poros',
    type: 'live', color: 'green', num: '05', platform: 'web'
  },
  {
    title: 'Beacon Health Website',
    desc: 'Professional healthcare web application built during internship at Beacon Health Limited. Focused on responsive UI, accessibility, and seamless cross-device experience.',
    stack: ['React.js', 'CSS3', 'JavaScript', 'Responsive Design'],
    live: 'https://www.beaconhealth.co.nz/',
    github: null,
    type: 'live', color: 'purple', num: '06', platform: 'web'
  },
  {
    title: 'Amazon Clone',
    desc: 'Pixel-perfect clone of Amazon\'s e-commerce UI with product listings, cart functionality, and fully responsive layout replicating the core shopping experience.',
    stack: ['React.js', 'JavaScript', 'CSS3', 'HTML5'],
    live: null,
    github: 'https://github.com/Pr241singh',
    type: 'source', color: 'cyan', num: '07', platform: 'web'
  },
  {
    title: 'Deployment Automation Tool',
    desc: 'Python desktop application automating file transfer and deployment workflows, including Gmail automation scripts — built during Beacon Health internship.',
    stack: ['Python', 'Tkinter', 'Automation', 'Gmail API'],
    live: null,
    github: 'https://github.com/Pr241singh/Deployment-automation-tool-',
    type: 'source', color: 'green', num: '08', platform: 'desktop'
  }
]

const PLATFORM_ICONS = {
  web: (
    <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
    </svg>
  ),
  android: (
    <svg width="11" height="11" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.523 15.341A5.97 5.97 0 0018 13a5.97 5.97 0 00-.477-2.341l1.89-1.09a.5.5 0 00-.5-.866L17 9.793A5.99 5.99 0 0013 8V6h1a.5.5 0 000-1h-4a.5.5 0 000 1h1v2a5.99 5.99 0 00-4 1.793l-1.913-1.09a.5.5 0 00-.5.866l1.89 1.09A5.97 5.97 0 006 13c0 .83.169 1.62.477 2.341l-1.89 1.09a.5.5 0 10.5.866L7 16.207A5.99 5.99 0 0011 18v2H9.5a.5.5 0 000 1h5a.5.5 0 000-1H13v-2a5.99 5.99 0 004-1.793l1.913 1.09a.5.5 0 10.5-.866l-1.89-1.09zM9.5 14a1 1 0 110-2 1 1 0 010 2zm5 0a1 1 0 110-2 1 1 0 010 2z"/>
    </svg>
  ),
  desktop: (
    <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
    </svg>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('all')

  const filtered = filter === 'all'
    ? projects
    : filter === 'android'
    ? projects.filter(p => p.platform === 'android')
    : projects.filter(p => p.type === filter)

  return (
    <section id="projects" className="projects">
      <div className="projects-inner">
        <div className="section-tag">// 04. work</div>
        <h2 className="section-title">Featured <span>Projects</span></h2>
        <div className="section-divider" />

        <div className="project-filters">
          {[
            { key: 'all', label: 'All Projects' },
            { key: 'live', label: '🟢 Live' },
            { key: 'android', label: '🤖 Android' },
            { key: 'source', label: '🔵 Source Code' },
          ].map(f => (
            <button
              key={f.key}
              className={`filter-btn ${filter === f.key ? 'active' : ''}`}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map((proj, i) => (
            <div key={i} className={`proj-card proj-card--${proj.color}`}>
              <div className="proj-top">
                <div className="proj-top-left">
                  <span className="proj-num">{proj.num}</span>
                  <span className={`platform-badge platform-badge--${proj.platform}`}>
                    {PLATFORM_ICONS[proj.platform]}
                    {proj.platform}
                  </span>
                </div>
                <div className="proj-links">
                  {proj.github && (
                    <a href={proj.github} target="_blank" rel="noopener noreferrer" className="proj-link" title="GitHub">
                      <svg width="17" height="17" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                    </a>
                  )}
                  {proj.live && (
                    <a href={proj.live} target="_blank" rel="noopener noreferrer" className={`proj-link proj-link--live proj-link--${proj.color}`} title={proj.platform === 'android' ? 'Play Store' : 'Live Demo'}>
                      {proj.platform === 'android' ? (
                        <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M3.18 23.76c.3.17.65.18.96.03L14.24 12 3.18.21C2.87.06 2.52.07 2.22.24 1.9.43 1.71.78 1.71 1.16v21.68c0 .38.19.73.51.92zM16.34 9.9l2.4-1.39-10.47-9.24-2.86 4.93 10.93 5.7zm3.05 1.76l-2.47-1.43-11.03 5.75 2.86 4.93 10.64-9.25zm-14.06 9.15L16.7 14.3l-2.4-1.39-10.93 5.7 2 3.45-.04-.25z"/>
                        </svg>
                      ) : (
                        <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                        </svg>
                      )}
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
                  <span className="proj-status live">● {proj.platform === 'android' ? 'Play Store' : 'Live'}</span>
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
