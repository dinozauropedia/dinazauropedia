export default function ShopPage() {
  return (
    <main>
      <section className="subpage-hero">
        <div className="container">
          <p className="eyebrow">Sklep</p>
          <h1>Sklep Dinozauropedia.pl</h1>
          <p>
            W tym miejscu pojawią się płatne e-booki, pakiety edukacyjne i
            materiały PDF.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container premium-box ebook-premium-page">
          <div className="book-cover premium-cover">
            <span>ATLAS</span>
            <strong>DINOZAURÓW</strong>
            <small>Dinozauropedia.pl</small>
          </div>

          <div className="premium-content">
            <p className="eyebrow">Pierwszy produkt</p>
            <h2>Atlas dinozaurów</h2>
            <p>
              Płatny e-book PDF. Płatności dodamy później przez Stripe albo
              inny prosty system sprzedaży.
            </p>
          </div>

          <div className="price-box">
            <strong>39,90 zł</strong>
            <a className="gold-button" href="#">
              Wkrótce
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}