import { articles } from "../../data/articles";

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
            <article className="article-card" key={article.slug}>
              <div className="article-image">
                <span>{article.category}</span>
              </div>

              <div className="article-content">
                <p className="article-category">{article.category}</p>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <small>{article.readingTime}</small>

                <div className="card-action">
                  <a href={`/artykuly/${article.slug}`}>Czytaj artykuł</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}