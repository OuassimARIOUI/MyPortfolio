import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { FiMenu, FiX } from "react-icons/fi";

const links = [
  { href: "#education", label: "Parcours" },
  { href: "#skills", label: "Compétences" },
  { href: "#projects", label: "Projets" },
  { href: "#experience", label: "Expériences" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <Disclosure as="nav" className="fixed top-0 z-50 w-full border-b border-slate-800 bg-slate-900/40 backdrop-blur-md">
      {({ open, close }) => (
        <>
          <div className="container-page">
            <div className="flex h-16 items-center justify-between">
              <a
                href="#"
                className="font-extrabold tracking-tight text-white/95 hover:text-white"
                aria-label="Retour en haut"
              >
                Achraf
                <span className="text-cyan-400">.</span>
              </a>

              <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
                {links.map((l) => (
                  <a key={l.href} href={l.href} className="hover:text-cyan-400 transition-colors">
                    {l.label}
                  </a>
                ))}
              </div>

              <DisclosureButton
                className="md:hidden inline-flex items-center justify-center rounded-xl border border-slate-700/70 bg-slate-900/40 p-2 text-gray-200 hover:text-white"
                aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              >
                {open ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
              </DisclosureButton>
            </div>
          </div>

          <DisclosurePanel className="md:hidden border-t border-slate-800">
            <div className="container-page py-3">
              <div className="flex flex-col gap-2">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => close()}
                    className="rounded-xl px-3 py-2 text-gray-200 hover:bg-slate-800/60 hover:text-white"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
