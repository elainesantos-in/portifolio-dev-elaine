import { FaGithub, FaGlobe } from 'react-icons/fa'
import { SiFigma } from 'react-icons/si'
import Carousel from './Carousel'
import './Projects.css'

const projects = [
  {
    title: 'Mi Fortuna',
    description:
      'Sistema Full Stack de gestão de finanças pessoais desenvolvido para simplificar o controle de despesas do dia a dia. A aplicação permite cadastrar despesas mensais, organizar por categorias e forma de pagamento, com opções de visualizar o total gasto por período, total de receitas e limite de gastos.',
    features: [
      'Autenticação segura com JWT e sessões criptografadas',
      'CRUD completo de despesas, categorias e formas de pagamento',
      'Sistema de parcelas automáticas (3x, 6x, 12x)',
      'Relatórios dinâmicos por período e forma de pagamento e status',
      'Interface responsiva com navegação por abas',
    ],
    stack: [
      'Frontend: Next.js, React, Tailwind CSS',
      'Backend: NestJS, TypeORM, PostgreSQL',
      'Autenticação: JWT + bcrypt',
      'Containerização: Docker',
      'Ferramentas: Git, GitHub, Figma',
    ],
    images: [
      '/mifoturna-img1.png',
      '/mifoturna-img2.png',
      '/mifoturna-img3.png',
      '/mifoturna-img4.png',
    ],
    links: { github: 'https://github.com/elainesantos-in/mi-fortuna-v3', site: '#', figma: 'https://www.figma.com/design/DJlFhC5Ig8KUR7qvFbnBfC/Finan%C3%A7as?node-id=211-3&t=GSBl17IsgiMoIA5W-1' },
  },
  {
    title: 'Pingo Utilitários',
    description:
      'Pingo Utilitários é uma plataforma web gratuita que reúne mais de 100 ferramentas utilitárias do dia a dia, divididas em categorias como geradores, calculadoras, conversores, consultas de dados públicos e ferramentas de estudo.',
    intro:
      'Este projeto foi desenvolvido com o objetivo principal de explorar e dominar o uso de ferramentas de Inteligência Artificial aplicadas ao desenvolvimento de software. Durante o processo, utilizei o Lovable para prototipagem rápida da interface e o Claude Code para gerenciamento de agentes especializados em tarefas como geração de código, refatoração e criação de testes.',
    skillsTitle: 'Habilidades desenvolvidas:',
    skills: [
      'Gerenciamento de Agentes de IA, criação de Skills, Agentes e orquestração de múltiplos agentes para tarefas específicas',
      'Engenharia de Prompts, escrita de prompts claros, contextualizados e eficientes',
      'Deploy em Produção, configuração da Vercel com integração contínua via GitHub',
      'Indexação no Google, uso do Search Console para monitorar impressões, CTR e posição média',
    ],
    stack: [
      'Stack técnica: React, TypeScript, Tailwind CSS',
      'Vercel, Git, GitHub, Claude Code',
    ],
    images: [
      '/pingo1.png',
      '/pingo2.png',
      '/pingo3.png',
      '/pingo4.png',
    ],
    links: { site: 'https://www.pingoutilitarios.com.br/' },
  },
]

export default function Projects() {
  return (
    <section id="projetos" className="projects">
      <div className="container">
        <h2 className="projects__title">Meus Projetos</h2>

        {projects.map((p, idx) => (
          <article key={p.title} className="project" style={{ '--delay': `${idx * 0.1}s` }}>
            <div className="project__thumb">
              <Carousel images={p.images} alt={p.title} interval={2000} />
              <div className="project__links">
                {p.links.github && (
                  <a href={p.links.github} aria-label="GitHub" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                )}
                {p.links.site && (
                  <a href={p.links.site} aria-label="Site do projeto" target="_blank" rel="noopener noreferrer"><FaGlobe /></a>
                )}
                {p.links.figma && (
                  <a href={p.links.figma} aria-label="Figma" target="_blank" rel="noopener noreferrer"><SiFigma /></a>
                )}
              </div>
            </div>

            <div className="project__body">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              {p.intro && <p>{p.intro}</p>}

              {p.features && (
                <>
                  <h4>Principais funcionalidades:</h4>
                  <ul>
                    {p.features.map((f) => <li key={f}>{f}</li>)}
                  </ul>
                </>
              )}

              {p.skills && (
                <>
                  <h4>{p.skillsTitle}</h4>
                  <ul className="project__skills">
                    {p.skills.map((s) => <li key={s}>{s}</li>)}
                  </ul>
                </>
              )}

              <div className="project__stack">
                {p.stack.map((s) => <p key={s}>{s}</p>)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
