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
