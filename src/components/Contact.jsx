import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-inner">
        <div className="section-tag">// 06. reach out</div>
        <h2 className="section-title">Get In <span>Touch</span></h2>
        <div className="section-divider" />

        <div className="contact-layout">
          <div className="contact-left">
            <p className="contact-intro">
              I'm currently open to new opportunities — internships, freelance projects, 
              or full-time roles. Whether you have a project in mind or just want to connect, 
              my inbox is always open.
            </p>

            <div className="contact-links">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ps7379791@gmail.com" className="contact-card contact-card--cyan">
                <div className="contact-card-icon">✉</div>
                <div>
                  <p className="contact-card-label">Email</p>
                  <p className="contact-card-value">ps7379791@gmail.com</p>
                </div>
                <span className="contact-arrow">→</span>
              </a>

              <a href="https://github.com/Pr241singh" target="_blank" rel="noopener noreferrer" className="contact-card contact-card--green">
                <div className="contact-card-icon">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </div>
                <div>
                  <p className="contact-card-label">GitHub</p>
                  <p className="contact-card-value">github.com/Pr241singh</p>
                </div>
                <span className="contact-arrow">→</span>
              </a>

              <a href="https://www.linkedin.com/in/preetisingh2026" target="_blank" rel="noopener noreferrer" className="contact-card contact-card--purple">
                <div className="contact-card-icon">in</div>
                <div>
                  <p className="contact-card-label">LinkedIn</p>
                  <p className="contact-card-value">linkedin.com/in/preetisingh2026</p>
                </div>
                <span className="contact-arrow">→</span>
              </a>
            </div>
          </div>

          <div className="contact-right">
            <div className="terminal">
              <div className="terminal-bar">
                <span className="t-dot t-red" />
                <span className="t-dot t-yellow" />
                <span className="t-dot t-green" />
                <span className="t-title">preeti@portfolio ~ </span>
              </div>
              <div className="terminal-body">
                <p className="t-line"><span className="t-prompt">$</span> whoami</p>
                <p className="t-output">Preeti Singh — Full-Stack Developer</p>
                <p className="t-line"><span className="t-prompt">$</span> cat status.txt</p>
                <p className="t-output">🟢 Open to opportunities</p>
                <p className="t-line"><span className="t-prompt">$</span> cat skills.txt</p>
                <p className="t-output">MERN · Python · Socket.io · OCI</p>
                <p className="t-line"><span className="t-prompt">$</span> cat education.txt</p>
                <p className="t-output">B.Tech CSE @ KIIT (2025–2029)</p>
                <p className="t-line"><span className="t-prompt">$</span> <span className="t-cursor">_</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <p className="footer-text">
          Designed & Built by <span className="footer-name">Preeti Singh</span>
          <span className="footer-sep"> · </span>
          <span className="footer-stack">React + Vite</span>
        </p>
      </footer>
    </section>
  )
}
