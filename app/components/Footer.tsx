export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <a className="logo footer-logo" href="/">
            <span className="logo-mark">◉</span>
            <span>Dinozauropedia.pl</span>
          </a>
          <p>Twoje źródło wiedzy o dinozaurach i prehistorii.</p>
        </div>

        <div className="footer-links">
          <a href="/artykuly">Artykuły</a>
          <a href="/gatunki">Gatunki</a>
          <a href="/e-booki">E-booki</a>
          <a href="/aktualnosci">Aktualności</a>
          <a href="/sklep">Sklep</a>
          <a href="/o-nas">O nas</a>
        </div>
      </div>
    </footer>
  );
}