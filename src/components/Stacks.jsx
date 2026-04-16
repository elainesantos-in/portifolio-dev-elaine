import {
  FaReact, FaNodeJs, FaAngular, FaDocker, FaGitAlt,
} from 'react-icons/fa'
import {
  SiNextdotjs, SiNestjs, SiTypeorm, SiPostgresql,
  SiMysql, SiTypescript, SiJavascript,
} from 'react-icons/si'
import './Stacks.css'

const stacks = [
  { icon: <FaReact />,      name: 'React',      color: '#61DAFB' },
  { icon: <SiNextdotjs />,  name: 'Next.js',    color: '#ffffff' },
  { icon: <FaAngular />,    name: 'Angular',    color: '#DD0031' },
  { icon: <FaNodeJs />,     name: 'Node.js',    color: '#3C873A' },
  { icon: <SiNestjs />,     name: 'NestJS',     color: '#E0234E' },
  { icon: <SiTypescript />, name: 'TypeScript', color: '#3178C6' },
  { icon: <SiJavascript />, name: 'JavaScript', color: '#F7DF1E' },
  { icon: <SiTypeorm />,    name: 'TypeORM',    color: '#FE0902' },
  { icon: <SiPostgresql />, name: 'PostgreSQL', color: '#336791' },
  { icon: <SiMysql />,      name: 'MySQL',      color: '#00758F' },
  { icon: <FaDocker />,     name: 'Docker',     color: '#2496ED' },
  { icon: <FaGitAlt />,     name: 'Git',        color: '#F05032' },
]

export default function Stacks() {
  return (
    <section id="stacks" className="stacks">
      <div className="container">
        <h2 className="stacks__title">Minhas Stacks</h2>
        <div className="stacks__grid">
          {stacks.map((s) => (
            <div
              key={s.name}
              className="stacks__item"
              style={{ '--brand': s.color }}
            >
              <div className="stacks__icon">{s.icon}</div>
              <span>{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
