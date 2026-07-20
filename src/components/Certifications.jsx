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
    description: 'Comprehensive certification covering MongoDB, Express.js, React.js, and Node.js — full MERN stack from fundamentals to deployment.'
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
              className={'cert-card cert-card--' + cert.color + ' no-click'}
            >
              <div className="cert-top">
                <span className={'cert-icon cert-icon--' + cert.color}>{cert.icon}</span>
                <span className={'cert-type cert-type--' + cert.color}>{cert.type}</span>
              </div>
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-subtitle">{cert.subtitle}</p>
              <p className="cert-issuer">— {cert.issuer}</p>
              <span className="cert-view-hint">View Details →</span>
            </div>
          ))}
        </div>

        <h3 className="creds-sub-title" style={{ marginTop: '3rem' }}>Achievements & Recognition</h3>
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

    </section>
  )
}
