const articles = [
  {
    category: "Paleontologia",
    title: "Czym jest paleontologia?",
    description:
      "Podstawy nauki o skamieniałościach, dawnym życiu i historii Ziemi.",
  },
  {
    category: "Gatunki",
    title: "Tyrannosaurus rex — król późnej kredy",
    description:
      "Najbardziej znany drapieżnik w historii i symbol świata dinozaurów.",
  },
  {
    category: "Ewolucja",
    title: "Czy dinozaury miały pióra?",
    description:
      "Odkrycia, które zmieniły sposób patrzenia na wygląd wielu dinozaurów.",
  },
  {
    category: "Wymieranie",
    title: "Dlaczego dinozaury wyginęły?",
    description:
      "Asteroida, zmiany klimatu i jedna z największych katastrof w dziejach Ziemi.",
  },
];

export default function ArticlesPage() {
  return (
    <main>
      <section className="subpage-hero">
        <div className="container">
          <p className="eyebrow">Baza wiedzy</p>
          <h1>Artykuły o dinozaurach</h1>
          <p>
            Rzetelne teksty popularnonaukowe o dinozaurach, paleontologii,
            ewolucji i prehistorycznym świecie.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container articles-grid">
          {articles.map((article) => (
            <article className="article-card" key={article.title}>
              <div className="article-image">
                <span>{article.category}</span>
              </div>
              <div className="article-content">
                <p className="article-category">{article.category}</p>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <small>Wkrótce na stronie</small>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}