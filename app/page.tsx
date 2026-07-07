import { articles } from "../data/articles";

const featuredArticles = articles.slice(0, 3);

const featuredSpecies = [
  {
    name: "Tyrannosaurus rex",
    slug: "tyrannosaurus-rex",
    description: "Potężny drapieżnik późnej kredy i symbol świata dinozaurów.",
  },
  {
    name: "Triceratops",
    slug: "triceratops",
    description: "Rogaty roślinożerca z masywną kryzą kostną.",
  },
  {
    name: "Velociraptor",
    slug: "velociraptor",
    description: "Niewielki, szybki teropod, prawdopodobnie pokryty piórami.",
  },
];

const news = [
  {
    title: "Odkryto nowy gatunek dinozaura w Ameryce Południowej",
    href: "/aktualnosci",
  },
  {
    title: "Ślady dinozaurów w Polsce — najciekawsze stanowiska",
    href: "/aktualnosci",
  },
  {
    title: "Nowe badania nad piórami u teropodów",
    href: "/aktualnosci",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-overlay" />

        <div className="container hero-inner">
          <div className="hero-content">
            <p className="eyebrow">Portal o dinozaurach i prehistorii</p>

            <h1>Odkrywaj fascynujący świat dinozaurów</h1>

            <p className="hero-text">
              Rzetelne artykuły, ciekawostki, newsy i e-booki dla wszystkich,
              którzy chcą lepiej poznać prehistoryczny świat.
            </p>

            <div className="hero-actions">
              <a className="primary-button" href="/artykuly">
                Czytaj artykuły
              </a>

              <a className="secondary-button" href="/e-booki">
                Pobierz darmowy e-book
              </a>
            </div>
          </div>

          <div className="hero-card">
            <span className="hero-card-label">Startujemy</span>
            <h2>Nowy portal edukacyjny</h2>
            <p>
              Artykuły, baza gatunków, darmowe materiały PDF i premium e-booki
              w jednym miejscu.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container section-grid">
          <div className="main-column">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Redakcja poleca</p>
                <h2>Polecane artykuły</h2>
              </div>

              <a href="/artykuly">Zobacz wszystkie</a>
            </div>

            <div className="articles-grid">
              {featuredArticles.map((article) => (
                <article className="article-card" key={article.slug}>
                  <a href={`/artykuly/${article.slug}`}>
                    <div className="article-image">
                      <span>{article.category}</span>
                    </div>

                    <div className="article-content">
                      <p className="article-category">{article.category}</p>
                      <h3>{article.title}</h3>
                      <p>{article.description}</p>
                      <small>{article.readingTime}</small>

                      <div className="card-action">
                        <span>Czytaj artykuł</span>
                      </div>
                    </div>
                  </a>
                </article>
              ))}
            </div>

            <div className="section-heading species-home-heading">
              <div>
                <p className="eyebrow">Encyklopedia</p>
                <h2>Popularne gatunki</h2>
              </div>

              <a href="/gatunki">Zobacz wszystkie</a>
            </div>

            <div className="home-species-grid">
              {featuredSpecies.map((dinosaur) => (
                <a
                  className="home-species-card"
                  href={`/gatunki/${dinosaur.slug}`}
                  key={dinosaur.slug}
                >
                  <div className="species-icon">◉</div>
                  <h3>{dinosaur.name}</h3>
                  <p>{dinosaur.description}</p>
                  <span>Zobacz profil</span>
                </a>
              ))}
            </div>

            <div className="premium-box">
              <div className="book-cover premium-cover">
                <span>ATLAS</span>
                <strong>DINOZAURÓW</strong>
                <small>Dinozauropedia.pl</small>
              </div>

              <div className="premium-content">
                <p className="eyebrow">E-book premium</p>
                <h2>Atlas dinozaurów</h2>
                <p>
                  Kompleksowy przewodnik po świecie dinozaurów: gatunki, epoki,
                  odkrycia, ilustracje i najważniejsze fakty.
                </p>

                <div className="features">
                  <span>120+ stron</span>
                  <span>50+ gatunków</span>
                  <span>PDF</span>
                </div>
              </div>

              <div className="price-box">
                <strong>39,90 zł</strong>

                <a className="gold-button" href="/sklep">
                  Kup e-book
                </a>
              </div>
            </div>
          </div>

          <aside className="sidebar">
            <div className="free-ebook-box">
              <div>
                <p className="eyebrow">E-book za darmo</p>
                <h2>10 faktów o dinozaurach, które Cię zaskoczą</h2>
                <p>
                  Pobierz bezpłatny PDF i poznaj najciekawsze fakty o świecie
                  prehistorii.
                </p>

                <ul>
                  <li>10 fascynujących faktów</li>
                  <li>Dla dzieci i dorosłych</li>
                  <li>PDF od razu na urządzeniu</li>
                </ul>

                <a className="primary-button" href="/e-booki">
                  Pobierz za darmo
                </a>
              </div>

              <div className="book-cover free-cover">
                <span>10 FAKTÓW</span>
                <strong>O DINOZAURACH</strong>
                <small>Darmowy e-book</small>
              </div>
            </div>

            <div className="news-box">
              <div className="section-heading compact">
                <div>
                  <p className="eyebrow">Aktualności</p>
                  <h2>Najnowsze newsy</h2>
                </div>
              </div>

              {news.map((item) => (
                <a className="news-item" href={item.href} key={item.title}>
                  <div className="news-thumb" />

                  <div>
                    <h3>{item.title}</h3>
                    <small>Przejdź do aktualności</small>
                  </div>
                </a>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="newsletter" id="newsletter">
        <div className="container newsletter-inner">
          <div>
            <p className="eyebrow">Społeczność</p>
            <h2>Dołącz do Dinozauropedia.pl</h2>
            <p>
              Otrzymuj nowe artykuły, newsy i materiały specjalne prosto na
              swoją skrzynkę.
            </p>
          </div>

          <form className="newsletter-form">
            <input type="email" placeholder="Twój adres e-mail" />
            <button type="submit">Zapisz się</button>
          </form>
        </div>
      </section>
    </main>
  );
}