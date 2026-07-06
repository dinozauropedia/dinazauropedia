const species = [
  "Tyrannosaurus rex",
  "Triceratops",
  "Velociraptor",
  "Stegosaurus",
  "Brachiosaurus",
  "Spinosaurus",
  "Allosaurus",
  "Ankylosaurus",
  "Diplodocus",
  "Iguanodon",
  "Pachycephalosaurus",
  "Parasaurolophus",
];

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
          {species.map((name) => (
            <article className="species-card" key={name}>
              <div className="species-icon">◉</div>
              <h2>{name}</h2>
              <p>Opis gatunku pojawi się wkrótce.</p>
              <a href="#">Zobacz profil</a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}