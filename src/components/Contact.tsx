export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container-page text-center">
        <h2 className="section-title">Contact</h2>
        <p className="mt-6 text-gray-300">
          Email :{" "}
          <a
            href="mailto:mohamedachrefwassim@gmail.com"
            className="text-cyan-400 hover:text-cyan-300 hover:underline underline-offset-4"
          >
            mohamedachrefwassim@gmail.com
          </a>
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="https://www.linkedin.com/in/mohamed-achraf-ouassim-arioui-a61286259/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary px-4 py-2 text-sm"
          >
            <img src="/assets/img/Contact/linkedin.png" alt="" className="h-5 w-5" loading="lazy" />
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/arioui_ouassim/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary px-4 py-2 text-sm"
          >
            <img src="/assets/img/Contact/insta.png" alt="" className="h-5 w-5" loading="lazy" />
            Instagram
          </a>
          <a
            href="https://github.com/Wassim991"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary px-4 py-2 text-sm"
          >
            <img src="/assets/img/Contact/github.png" alt="" className="h-5 w-5" loading="lazy" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
