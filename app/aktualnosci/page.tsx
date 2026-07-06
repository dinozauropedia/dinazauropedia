const news = [
  "Nowe badania nad wyglądem tyranozaurów",
  "Ślady dinozaurów w Polsce — gdzie ich szukać?",
  "Paleontolodzy opisali kolejny gatunek teropoda",
];

export default function NewsPage() {
  return (
    <main>
      <section className="subpage-hero">
        <div className="container">
          <p className="eyebrow">Nowości ze świata nauki</p>
          <h1>Aktualności</h1>
          <p>
            Kilka najważniejszych newsów miesięcznie: odkrycia, badania,
            wystawy, książki i wydarzenia związane z paleontologią.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container news-list-page">
          {news.map((item) => (
            <article className="news-page-card" key={item}>
              <div className="news-thumb" />
              <div>
                <p className="eyebrow">News</p>
                <h2>{item}</h2>
                <p>
                  Krótki opis aktualności pojawi się w tym miejscu po
                  podpięciu systemu treści.
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}