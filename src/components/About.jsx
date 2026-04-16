import { FaGithub, FaLinkedin } from 'react-icons/fa'
import './About.css'

export default function About() {
  return (
    <section id="sobre" className="about">
      <div className="container about__inner">
        <div className="about__photo">
          <img
            src="/perfil-elaine.jpeg"
            alt="Elaine - Desenvolvedora Full Stack"
          />
        </div>

        <div className="about__content">
          <p className="about__eyebrow">elaineleonidossantos@gmail.com</p>
          <h1 className="about__title">Sobre Mim</h1>

          <p>
            Meu nome é Elaine, tenho 29 anos e sou formada em Designer Gráfico. Atualmente, curso Engenharia de Software e estou me especializando como Desenvolvedora Full Stack, com foco em Java e JavaScript.
          </p>
          <p>
            Tenho experiência na manutenção de sistemas utilizando Java e AngularJS, o que fortaleceu minha base tanto em backend quanto em frontend. Minha formação em Design também contribui para a criação de interfaces mais intuitivas, com conhecimentos em UI Design e ferramentas como Figma.
          </p>
          <p>
            Também desenvolvo projetos próprios para evolução técnica, como
            o Mi Fortuna, um sistema de finanças pessoais Full Stack com
            React, Node.js, Next.js, NestJS, TypeORM, PostgreSQL e Docker.
          </p>
          <p className="about__closing">
            Busco oportunidades como Desenvolvedora para continuar evoluindo
            tecnicamente e contribuir com soluções eficientes.
          </p>

          <div className="about__meta">
            <p>Santa Catarina, Brasil</p>
            <div className="about__socials">
              <a href="https://github.com/elainesantos-in" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/elaineleonidossantosinacio/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
