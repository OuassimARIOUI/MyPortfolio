import { motion } from "framer-motion";
import TypingText from "./TypingText";

export default function Hero() {
  return (
    <section className="relative">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sky-900/40 to-cyan-900/10" />
      <div className="container-page relative flex min-h-[100svh] flex-col items-center justify-center text-center pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
        >
          <TypingText
            text={[
              "Mohamed Achraf Ouassim ARIOUI",
              "Développeur Full Stack",
              "Étudiant en M1 Ingénierie Logicielle",
              "Passionné par l'IA et les Systèmes Distribués"
            ]}
            typingSpeed={75}
            pauseDuration={2000}
            showCursor={true}
            cursorCharacter="|"
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
            textColors={['#3b82f6', '#8b5cf6', '#06b6d4', '#10b981']}
            variableSpeed={{ min: 50, max: 120 }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="mt-5 max-w-2xl text-base sm:text-lg text-gray-300 leading-relaxed"
        >
          Étudiant en M1 Ingénierie Logicielle à Avignon — passionné par le développement logiciel,
          l’intelligence artificielle et les systèmes distribués.
        </motion.p>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <a href="#projects" className="btn btn-primary">
            Voir mes projets
          </a>
          <a href="#contact" className="btn btn-secondary">
            Me contacter
          </a>
        </div>

        <div className="mt-10 text-xs text-gray-400">
          <span className="hidden sm:inline">Astuce :</span> défilez pour découvrir mon parcours.
        </div>
      </div>
    </section>
  );
}
