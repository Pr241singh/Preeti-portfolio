import './Skills.css'

const skillGroups = [
  {
    label: 'Frontend',
    icon: '⬡',
    color: 'cyan',
    skills: ['React.js', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Bootstrap', 'Responsive Design', 'REST API Integration']
  },
  {
    label: 'Backend',
    icon: '⬡',
    color: 'green',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'RESTful APIs', 'Authentication & Authorization', 'Socket.io']
  },
  {
    label: 'Languages',
    icon: '⬡',
    color: 'purple',
    skills: ['JavaScript', 'Python', 'Java (OOP)', 'DSA Fundamentals']
  },
  {
    label: 'Tools & Cloud',
    icon: '⬡',
    color: 'cyan',
    skills: ['Git & GitHub', 'Clerk Authentication', 'Cloudinary API', 'Oracle Cloud (OCI)', 'Vercel', 'Tkinter']
  },
  {
    label: 'DSA',
    icon: '⬡',
    color: 'green',
    skills: ['Arrays', 'Linked Lists', 'Stacks & Queues', 'Sorting Algorithms', '100+ LeetCode Problems']
  },
  {
    label: 'AI & Others',
    icon: '⬡',
    color: 'purple',
    skills: ['AI/ML Fundamentals', 'Supervised Learning', 'Data Preprocessing', 'Automation Scripting', 'Version Control Workflows']
  }
]

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-inner">
        <div className="section-tag">// 02. capabilities</div>
        <h2 className="section-title">Technical <span>Skills</span></h2>
        <div className="section-divider" />

        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <div key={i} className={`skill-card skill-card--${group.color}`} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="skill-card-header">
                <span className={`skill-icon skill-icon--${group.color}`}>{group.icon}</span>
                <h3 className="skill-card-title">{group.label}</h3>
              </div>
              <ul className="skill-list">
                {group.skills.map((s, j) => (
                  <li key={j} className="skill-item">
                    <span className="skill-dot" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
