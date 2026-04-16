import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#sobre" className="header__logo">Elaine Santos</a>
        <nav className="header__nav">
          <a href="#sobre">Sobre</a>
          <a href="#stacks">Stacks</a>
          <a href="#projetos">Projetos</a>
        </nav>
      </div>
    </header>
  )
}
