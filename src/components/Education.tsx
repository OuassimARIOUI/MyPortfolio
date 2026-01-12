export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container-page">
        <h2 className="section-title">Parcours</h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="card p-6">
            <div className="flex items-center gap-4 mb-4">
              <img
                src="/assets/img/avignon_universite.png"
                alt="Université d'Avignon"
                className="w-20 h-20 object-cover rounded-lg"
                loading="lazy"
              />
              <div>
                <h3 className="text-lg font-semibold">M1 Ingénierie Logicielle</h3>
                <p className="text-sm text-gray-400">Avignon</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Centres d'intérêt : développement logiciel, intelligence artificielle et systèmes distribués.
            </p>
          </div>

          <div className="card p-6">
            <div className="flex items-center gap-4 mb-4">
              <img
                src="/assets/img/avignon_universite.png"
                alt="Université d'Avignon"
                className="w-20 h-20 object-cover rounded-lg"
                loading="lazy"
              />
              <div>
                <h3 className="text-lg font-semibold">Licence Informatique</h3>
                <p className="text-sm text-gray-400">Avignon</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Formation complète en informatique : programmation, algorithmique, bases de données et réseaux.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
