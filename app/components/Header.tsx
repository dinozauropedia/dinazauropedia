export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="logo" href="/">
          <span className="logo-mark">◉</span>
          <span>Dinozauropedia.pl</span>
        </a>

        <nav className="nav">
          <a href="/artykuly">Artykuły</a>
          <a href="/gatunki">Gatunki</a>
          <a href="/e-booki">E-booki</a>
          <a href="/aktualnosci">Aktualności</a>
          <a href="/sklep">Sklep</a>
          <a href="/o-nas">O nas</a>
        </nav>

        <a className="header-button" href="/#newsletter">
          Dołącz do newslettera
        </a>
      </div>
    </header>
  );
}