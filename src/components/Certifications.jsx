import './Certifications.css'

const certs = [
  {
    title: 'Oracle Cloud Infrastructure 2025',
    subtitle: 'AI Foundation Associate',
    issuer: 'Oracle',
    icon: '☁',
    color: 'cyan',
    type: 'Certification'
  },
  {
    title: 'Pragati Cohort 8',
    subtitle: 'Merit-Based Engineering Program',
    issuer: 'Infosys Springboard',
    icon: '◈',
    color: 'green',
    type: 'Training'
  },
  {
    title: 'Full Stack Development',
    subtitle: 'MERN Stack Certification',
    issuer: 'GeeksforGeeks',
    icon: '⬡',
    color: 'purple',
    type: 'Certification'
  },
  {
    title: 'EY Scholarship',
    subtitle: 'Academic Excellence & Technical Aptitude',
    issuer: 'Ernst & Young',
    icon: '✦',
    color: 'cyan',
    type: 'Scholarship'
  },
  {
    title: 'Google Student Ambassador',
    subtitle: 'Developer Tools & Tech Events',
    issuer: 'Google',
    icon: '◉',
    color: 'green',
    type: 'Achievement'
  }
]

export default function Certifications() {
  return (
    <section id="certifications" className="certifications">
      <div className="certs-inner">
        <div className="section-tag">// 05. credentials</div>
        <h2 className="section-title">Certifications & <span>Achievements</span></h2>
        <div className="section-divider" />

        <div className="certs-grid">
          {certs.map((cert, i) => (
            <div key={i} className={`cert-card cert-card--${cert.color}`}>
              <div className="cert-top">
                <span className={`cert-icon cert-icon--${cert.color}`}>{cert.icon}</span>
                <span className={`cert-type cert-type--${cert.color}`}>{cert.type}</span>
              </div>
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-subtitle">{cert.subtitle}</p>
              <p className="cert-issuer">— {cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
