export default function Projects() {
  const projects = [
    {
      title: "Crypto Platform",
      tech: "Node.js, React, PostgreSQL",
      img: "/assets/img/crypto_platform/acceuil.png",
      link: "https://github.com/OuassimARIOUI/Crypto_Platform.git",
      description: "Plateforme de trading complète où vous pouvez créer un compte, trader et surveiller les prix des cryptomonnaies en temps réel."
    },
    {
      title: "StudyHive",
      tech: "Node.js, React, MongoDB",
      img: "/assets/img/StudyHive/start.png",
      link: "https://studyhive-frontend.onrender.com/",
      description: "Plateforme collaborative pour étudier ensemble : regardez des vidéos, discutez et dessinez en temps réel avec d'autres étudiants."  
    },
    {
      title: "Meteo App",
      tech: "Vue.js , Node.js + Express.js , Tailwind CSS",
      img: "/assets/img/meteoAPP/start.png",
      link: "https://github.com/OuassimARIOUI/MeteoApp",
      description: "Application météo fournissant des prévisions précises et en temps réel pour votre localisation."
    },
    {
      title: "Wordle Game",
      tech: "Java ",
      img: "/assets/img/Wordle/play.png",
      link: "https://github.com/OuassimARIOUI/Wordle_Game",
      description: "Devinez le mot en 6 essais ! À chaque tentative, les couleurs indiquent si vos lettres sont correctes et bien placées."
    },
    {
      title: "Carpooling Platform",
      tech: "Yii, HTML, JS",
      img: "/assets/img/Ceri_Car/start.png",
      link: "https://github.com/OuassimARIOUI/Ceri_Car",
      description: "Plateforme de covoiturage inspirée de BlaBlaCar permettant de partager vos trajets et voyager ensemble."
    },
  ];



  return (
    <section id="projects" className="section">
      <div className="container-page">
        <h2 className="section-title">Projets</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="card card-hover group overflow-hidden"
              aria-label={`Ouvrir le projet ${p.title}`}
            >
              <div className="relative">
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/35 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white/95 group-hover:text-white">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm text-gray-400">{p.tech}</p>
                <p className="mt-3 text-sm text-gray-300 leading-relaxed">{p.description}</p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
