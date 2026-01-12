export default function Experience() {
  const jobs = [
    { 
      title: "Caissier", 
      org: "Carrefour", 
      date: "Depuis nov. 2024",
      logo: "/assets/img/work/Logo_Carrefour.png"
    },
  ];

  return (
    <section id="experience" className="section">
      <div className="container-page">
        <h2 className="section-title">Expériences</h2>
        <div className="mt-10 grid gap-6">
          {jobs.map((j) => (
            <div key={`${j.org}-${j.title}`} className="card p-6 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-4 mb-4">
                {j.logo && (
                  <img 
                    src={j.logo} 
                    alt={`${j.org} logo`} 
                    className="w-16 h-16 object-contain rounded-lg bg-white p-2"
                  />
                )}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                    <h3 className="text-lg font-semibold">{j.title}</h3>
                    <span className="text-sm text-gray-400">{j.date}</span>
                  </div>
                  <p className="mt-1 text-gray-300/90 font-medium">{j.org}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
