import { notFound } from "next/navigation";
import { species } from "../../../data/species";

type SpeciesPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return species.map((dinosaur) => ({
    slug: dinosaur.slug,
  }));
}

export async function generateMetadata({ params }: SpeciesPageProps) {
  const { slug } = await params;
  const dinosaur = species.find((item) => item.slug === slug);

  if (!dinosaur) {
    return {
      title: "Gatunek nie znaleziony — Dinozauropedia.pl",
    };
  }

  return {
    title: `${dinosaur.name} — Dinozauropedia.pl`,
    description: dinosaur.description,
  };
}

export default async function DinosaurSpeciesPage({ params }: SpeciesPageProps) {
  const { slug } = await params;
  const dinosaur = species.find((item) => item.slug === slug);

  if (!dinosaur) {
    notFound();
  }

  return (
    <main>
      <section className="species-hero">
        <div className="container species-hero-grid">
          <div>
            <p className="eyebrow">{dinosaur.period}</p>
            <h1>{dinosaur.name}</h1>
            <p>{dinosaur.description}</p>
          </div>

          <div className="species-fact-card">
            <p className="eyebrow">Znaczenie nazwy</p>
            <h2>{dinosaur.meaning}</h2>
          </div>
        </div>
      </section>

      <section className="species-profile-section">
        <div className="container species-profile-grid">
          <div className="species-profile-main">
            <h2>Charakterystyka</h2>
            <p>{dinosaur.description}</p>

            <h2>Ciekawostki</h2>
            <ul className="facts-list">
              {dinosaur.facts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
          </div>

          <aside className="species-data-card">
            <h2>Dane gatunku</h2>

            <dl>
              <div>
                <dt>Okres</dt>
                <dd>{dinosaur.period}</dd>
              </div>

              <div>
                <dt>Dieta</dt>
                <dd>{dinosaur.diet}</dd>
              </div>

              <div>
                <dt>Długość</dt>
                <dd>{dinosaur.length}</dd>
              </div>

              <div>
                <dt>Masa</dt>
                <dd>{dinosaur.weight}</dd>
              </div>

              <div>
                <dt>Region</dt>
                <dd>{dinosaur.region}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>
    </main>
  );
}