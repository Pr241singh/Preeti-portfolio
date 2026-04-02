import './Experience.css'

const experiences = [
  {
    role: 'UI/UX & Frontend Intern',
    company: 'Beacon Health Limited',
    period: 'Jan 2026 – Present',
    type: 'Current',
    color: 'cyan',
    points: [
      'Developed responsive and reusable UI components, improving usability and consistency across key application pages.',
      'Built Python-based desktop automation tools using Tkinter to streamline internal workflows.',
      'Implemented system automation including automated file transfer workflows and Gmail task automation scripts.',
      'Leveraged AI coding assistants (Claude, GPT, Gemini) to accelerate development and prototype automation solutions.',
      'Participated in iterative design sprints and UI research to enhance UX and improve cross-device compatibility.'
    ]
  },
  {
    role: 'AI/ML Intern',
    company: 'Edunet Foundation (AICTE | IBM)',
    period: 'Jan 2026 – Mar 2026',
    type: 'Virtual · 6 weeks',
    color: 'green',
    points: [
      'Completed intensive training in AI/ML fundamentals — supervised learning, model evaluation, and data preprocessing.',
      'Developed a capstone project applying ML concepts to a real-world problem using Python and IBM tools.',
      'Gained hands-on experience with IBM AI tools and cloud-based ML workflows.'
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
            <div key={i} className={`exp-item exp-item--${exp.color}`}>
              <div className="exp-marker">
                <div className={`exp-dot exp-dot--${exp.color}`} />
                {i < experiences.length - 1 && <div className="exp-line" />}
              </div>

              <div className="exp-card">
                <div className="exp-card-top">
                  <div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <p className="exp-company">{exp.company}</p>
                  </div>
                  <div className="exp-meta">
                    <span className={`exp-badge exp-badge--${exp.color}`}>{exp.type}</span>
                    <span className="exp-period">{exp.period}</span>
                  </div>
                </div>

                <ul className="exp-points">
                  {exp.points.map((pt, j) => (
                    <li key={j} className="exp-point">
                      <span className={`exp-arrow exp-arrow--${exp.color}`}>›</span>
                      {pt}
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
