export default function EbooksPage() {
  return (
    <main>
      <section className="subpage-hero">
        <div className="container">
          <p className="eyebrow">Materiały PDF</p>
          <h1>E-booki Dinozauropedia.pl</h1>
          <p>
            Darmowe i płatne materiały dla osób, które chcą poznawać świat
            dinozaurów w uporządkowany sposób.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container ebooks-grid">
          <article className="free-ebook-box">
            <div>
              <p className="eyebrow">E-book za darmo</p>
              <h2>10 faktów o dinozaurach, które Cię zaskoczą</h2>
              <p>
                Krótki PDF na start — idealny dla nowych czytelników i
                miłośników prehistorii.
              </p>
              <a className="primary-button" href="#">
                Pobierz za darmo
              </a>
            </div>

            <div className="book-cover free-cover">
              <span>10 FAKTÓW</span>
              <strong>O DINOZAURACH</strong>
              <small>Darmowy e-book</small>
            </div>
          </article>

          <article className="premium-box ebook-premium-page">
            <div className="book-cover premium-cover">
              <span>ATLAS</span>
              <strong>DINOZAURÓW</strong>
              <small>Dinozauropedia.pl</small>
            </div>

            <div className="premium-content">
              <p className="eyebrow">E-book premium</p>
              <h2>Atlas dinozaurów</h2>
              <p>
                Rozbudowany przewodnik po najważniejszych dinozaurach, epokach,
                odkryciach i ciekawostkach.
              </p>
              <div className="features">
                <span>120+ stron</span>
                <span>50+ gatunków</span>
                <span>PDF</span>
              </div>
            </div>

            <div className="price-box">
              <strong>39,90 zł</strong>
              <a className="gold-button" href="#">
                Kup e-book
              </a>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}