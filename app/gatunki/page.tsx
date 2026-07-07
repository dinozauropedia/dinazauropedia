import { species } from "../../data/species";

export default function SpeciesPage() {
  return (
    <main>
      <section className="subpage-hero">
        <div className="container">
          <p className="eyebrow">Encyklopedia gatunków</p>
          <h1>Gatunki dinozaurów</h1>
          <p>
            Baza najważniejszych dinozaurów: okres występowania, rozmiary,
            dieta, miejsce odkrycia i ciekawostki.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container species-grid">
          {species.map((dinosaur) => (
            <article className="species-card" key={dinosaur.slug}>
              <div className="species-icon">◉</div>
              <h2>{dinosaur.name}</h2>
              <p>{dinosaur.description}</p>

              <div className="species-mini-data">
                <span>{dinosaur.period}</span>
                <span>{dinosaur.diet}</span>
              </div>

              <a href={`/gatunki/${dinosaur.slug}`}>Zobacz profil</a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}