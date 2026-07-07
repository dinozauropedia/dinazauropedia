import { notFound } from "next/navigation";
import { news } from "../../../data/news";

type NewsPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return news.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: NewsPageProps) {
  const { slug } = await params;
  const item = news.find((newsItem) => newsItem.slug === slug);

  if (!item) {
    return {
      title: "Aktualność nie znaleziona — Dinozauropedia.pl",
    };
  }

  return {
    title: `${item.title} — Dinozauropedia.pl`,
    description: item.description,
  };
}

export default async function SingleNewsPage({ params }: NewsPageProps) {
  const { slug } = await params;
  const item = news.find((newsItem) => newsItem.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <main>
      <article>
        <section className="article-hero">
          <div className="container">
            <p className="eyebrow">{item.category}</p>
            <h1>{item.title}</h1>
            <p>{item.description}</p>

            <div className="article-meta">
              <span>{item.date}</span>
              <span>{item.readingTime}</span>
            </div>
          </div>
        </section>

        <section className="article-body-section">
          <div className="container article-body">
            {item.content.map((section) => (
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