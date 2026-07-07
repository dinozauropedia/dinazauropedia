import { notFound } from "next/navigation";
import { articles } from "../../../data/articles";

type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return {
      title: "Artykuł nie znaleziony — Dinozauropedia.pl",
    };
  }

  return {
    title: `${article.title} — Dinozauropedia.pl`,
    description: article.description,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <main>
      <article>
        <section className="article-hero">
          <div className="container">
            <p className="eyebrow">{article.category}</p>
            <h1>{article.title}</h1>
            <p>{article.description}</p>

            <div className="article-meta">
              <span>{article.date}</span>
              <span>{article.readingTime}</span>
            </div>
          </div>
        </section>

        <section className="article-body-section">
          <div className="container article-body">
            {article.content.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}