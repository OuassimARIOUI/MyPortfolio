export default function Skills() {
  const skills = [
    { name: "React.js", level: 85, logo: "/assets/img/Technologies/React.png" },
    { name: "Node.js", level: 80, logo: "/assets/img/Technologies/nodejs.png" },
    { name: "Python", level: 75, logo: "/assets/img/Technologies/Python.png" },
    { name: "TypeScript", level: 80, logo: "/assets/img/Technologies/Typescript.png" },
    { name: "JavaScript", level: 85, logo: "/assets/img/Technologies/JavaScript.png" },
    { name: "Java", level: 75, logo: "/assets/img/Technologies/java.png" },
    { name: "PHP", level: 70, logo: "/assets/img/Technologies/php.svg" },
    { name: "Docker", level: 70, logo: "/assets/img/Technologies/Docker.png" },
    { name: "Tailwind CSS", level: 85, logo: "/assets/img/Technologies/Tailwind.png" },
    { name: "PostgreSQL", level: 65, logo: "/assets/img/Technologies/Python.png" },
  ];

  const methodologies = [
    {
      name: "Méthodologie Agile",
      description: "Je travaille avec des méthodes itératives et collaboratives en développement logiciel, en appliquant la méthodologie agile Scrum.",
      logo: "/assets/img/Agile/Agile.png"
    },
    {
      name: "Test & Déploiement",
      description: "Tests unitaires, intégration continue et déploiement automatisé",
      logo: "/assets/img/Agile/-test-icon.png"
    },
    {
      name: "CI/CD",
      description: "Build automatisé, tests et déploiement continu",
      logo: "/assets/img/Agile/Deployement.png"
    },
    {
      name: "Prompting & IA",
      description: "Maîtrise avancée du prompting pour optimiser les interactions avec les IA et générer des résultats de haute qualité",
      logo: "/assets/img/Agile/Prompting.png"
    },
  ];

  return (
    <section id="skills" className="section">
      <div className="container-page">
        <h2 className="section-title">Compétences Techniques</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s) => (
          <div key={s.name} className="card p-6 hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <img 
                  src={s.logo} 
                  alt={s.name} 
                  className="w-8 h-8 object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <h3 className="text-lg font-semibold">{s.name}</h3>
              </div>
              <span className="text-sm text-gray-400 tabular-nums">{s.level}%</span>
            </div>
            <div className="mt-4 w-full rounded-full bg-slate-700/70 h-2">
              <div className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500" style={{ width: `${s.level}%` }} />
            </div>
          </div>
        ))}
        </div>

        <h2 className="section-title mt-20">Méthodologies & Pratiques</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {methodologies.map((method) => (
            <div 
              key={method.name} 
              className="card p-6 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <img 
                  src={method.logo} 
                  alt={method.name} 
                  className="w-16 h-16 object-contain mb-2"
                />
                <h3 className="text-lg font-semibold text-cyan-400">{method.name}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{method.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
