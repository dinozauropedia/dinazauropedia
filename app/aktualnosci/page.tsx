import { news } from "../../data/news";

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
            <article className="news-page-card" key={item.slug}>
              <div className="news-thumb" />

              <div>
                <p className="eyebrow">{item.category}</p>
                <h2>{item.title}</h2>
                <p>{item.description}</p>

                <div className="article-meta compact-meta">
                  <span>{item.date}</span>
                  <span>{item.readingTime}</span>
                </div>

                <div className="card-action">
                  <a href={`/aktualnosci/${item.slug}`}>Czytaj news</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}