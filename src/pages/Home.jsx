


// import { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";

// const SLIDES = [
//   {
//     id: 1,
//     // 🧠 Slogan principal
//     title: "Vendez et achetez en toute confiance",
//     subtitle: "La plateforme la plus simple et sécurisée du Sénégal",
//     // 🎯 Tes deux CTA demandés
//     ctaPrimary: { label: "Ajouter un article", href: "/nouvelle-annonce" },
//     ctaSecondary: { label: "Ajouter une boutique", href: "/shops/open" },
//     image:
//      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop",

   
//   },
//   {
//     id: 2,
//     title: "Des milliers d’annonces locales",
//     subtitle: "Électronique, mode, services, maison… près de chez vous",
//     ctaPrimary: { label: "Ajouter un article", href: "/nouvelle-annonce" },
//     ctaSecondary: { label: "Ajouter une boutique", href: "/shops/open" },
//     image:
//     "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1600&auto=format&fit=crop"
//   },
//   {
//     id: 3,
//     title: "Gagnez du temps avec nos filtres",
//     subtitle: "Catégorie, localisation, prix… trouvez rapidement",
//     ctaPrimary: { label: "Ajouter un article", href: "/nouvelle-annonce" },
//     ctaSecondary: { label: "Ajouter une boutique", href: "/shops/open" },
//     image:
//     "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1600&auto=format&fit=crop",
//   },
// ];

// export default function HeroSlider() {
//   const [index, setIndex] = useState(0);
//   const intervalRef = useRef(null);
//   const hoveringRef = useRef(false);
//   const total = SLIDES.length;

//   useEffect(() => {
//     start();
//     return stop;
//   }, []);

//   const start = () => {
//     if (intervalRef.current) return;
//     intervalRef.current = setInterval(() => {
//       if (!hoveringRef.current) next();
//     }, 4500);
//   };
//   const stop = () => {
//     clearInterval(intervalRef.current);
//     intervalRef.current = null;
//   };

//   const next = () => setIndex((i) => (i + 1) % total);
//   const prev = () => setIndex((i) => (i - 1 + total) % total);
//   const goTo = (i) => setIndex(i);

//   return (
//     <section
//       className="relative overflow-hidden rounded-2xl bg-black shadow-xl"
//       onMouseEnter={() => (hoveringRef.current = true)}
//       onMouseLeave={() => (hoveringRef.current = false)}
//       aria-roledescription="carousel"
//     >
//       <div
//         className="relative h-[360px] sm:h-[420px] md:h-[520px]"
//         role="group"
//         aria-label={`Slide ${index + 1} sur ${total}`}
//       >
//         {SLIDES.map((s, i) => {
//           const active = i === index;
//           return (
//             <div
//               key={s.id}
//               className={`absolute inset-0 transition-opacity duration-700 ease-out ${
//                 active ? "opacity-100" : "opacity-0 pointer-events-none"
//               }`}
//             >
//               <img
//                 src={s.image}
//                 alt=""
//                 className="h-full w-full object-cover opacity-80"
//                 loading={active ? "eager" : "lazy"}
//               />

//               {/* Overlay dégradé + contenu */}
//               <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
//               <div className="absolute inset-0 flex items-center">
//                 <div className="max-w-7xl mx-auto px-4">
//                   <div className="max-w-xl text-white">
//                     <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
//                       {s.title}
//                     </h2>
//                     <p className="mt-3 text-white/90 text-sm sm:text-base md:text-lg">
//                       {s.subtitle}
//                     </p>

//                     <div className="mt-6 flex flex-wrap items-center gap-3">
//                       {/* CTA 1 : Ajouter un article */}
//                       <Link
//                         to={s.ctaPrimary.href}
//                         className="inline-flex items-center justify-center rounded-xl bg-brand-orange text-white px-5 py-2.5 font-medium hover:opacity-90 transition"
//                       >
//                         {s.ctaPrimary.label}
//                       </Link>

//                       {/* CTA 2 : Ajouter une boutique */}
//                       <Link
//                         to={s.ctaSecondary.href}
//                         className="inline-flex items-center justify-center rounded-xl border border-white/70 text-white px-5 py-2.5 font-medium hover:bg-white/10 transition"
//                       >
//                         {s.ctaSecondary.label}
//                       </Link>
//                     </div>

//                     {/* micro trust badges optionnels */}
//                     <div className="mt-4 flex flex-wrap gap-3 text-xs text-white/80">
//                       <span className="inline-flex items-center gap-1">
//                         <span>🔒</span> Transactions sécurisées
//                       </span>
//                       <span className="inline-flex items-center gap-1">
//                         <span>⚡</span> Publication en 1 minute
//                       </span>
//                       <span className="inline-flex items-center gap-1">
//                         <span>📍</span> Annonces locales
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* Flèches */}
//       <button
//         aria-label="Slide précédent"
//         onClick={prev}
//         className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 hover:bg-white shadow"
//       >
//         <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
//           <path d="m15 6-6 6 6 6" stroke="currentColor" strokeWidth="2" />
//         </svg>
//       </button>
//       <button
//         aria-label="Slide suivant"
//         onClick={next}
//         className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 hover:bg-white shadow"
//       >
//         <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
//           <path d="m9 18 6-6-6-6" stroke="currentColor" strokeWidth="2" />
//         </svg>
//       </button>

//       {/* Puces */}
//       <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
//         {SLIDES.map((_, i) => {
//           const active = i === index;
//           return (
//             <button
//               key={i}
//               aria-label={`Aller au slide ${i + 1}`}
//               onClick={() => goTo(i)}
//               className={`h-2.5 rounded-full transition-all ${
//                 active ? "w-6 bg-white" : "w-2.5 bg-white/60 hover:bg-white/80"
//               }`}
//             />
//           );
//         })}
//       </div>
//     </section>
//   );
// }


import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const SLIDES = [
  {
    id: 1,
    title: "Vendez et achetez en toute confiance",
    subtitle: "La plateforme la plus simple et sécurisée du Sénégal",
    ctaPrimary: { label: "Ajouter un article", href: "/nouvelle-annonce" },
    ctaSecondary: { label: "Ajouter une boutique", href: "/shops/open" },
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Des milliers d’annonces locales",
    subtitle: "Électronique, mode, services, maison… près de chez vous",
    ctaPrimary: { label: "Ajouter un article", href: "/nouvelle-annonce" },
    ctaSecondary: { label: "Ajouter une boutique", href: "/shops/open" },
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Gagnez du temps avec nos filtres",
    subtitle: "Catégorie, localisation, prix… trouvez rapidement",
    ctaPrimary: { label: "Ajouter un article", href: "/nouvelle-annonce" },
    ctaSecondary: { label: "Ajouter une boutique", href: "/shops/open" },
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const total = SLIDES.length;

  // Autoplay + pause au survol
  const intervalRef = useRef(null);
  const hoveringRef = useRef(false);

  useEffect(() => {
    start();
    return stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const start = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      if (!hoveringRef.current) next();
    }, 4500); // change la durée ici si tu veux (ms)
  };

  const stop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const goTo = (i) => setIndex(i);

  return (
    <section
      className="relative overflow-hidden rounded-2xl bg-black shadow-xl"
      onMouseEnter={() => (hoveringRef.current = true)}
      onMouseLeave={() => (hoveringRef.current = false)}
      aria-roledescription="carousel"
    >
      {/* Zone des slides */}
      <div
        className="relative h-[360px] sm:h-[420px] md:h-[520px]"
        role="group"
        aria-label={`Slide ${index + 1} sur ${total}`}
      >
        {SLIDES.map((s, i) => {
          const active = i === index;
          return (
            <div
              key={s.id}
              className={`absolute inset-0 transition-all duration-700 ease-out
                ${active ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-3 scale-[1.01] pointer-events-none"}`}
            >
              <img
                src={s.image}
                alt=""
                className="h-full w-full object-cover opacity-80 will-change-transform"
                loading={active ? "eager" : "lazy"}
              />

              {/* Overlay + contenu */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto px-4">
                  <div className={`max-w-xl text-white transition-all duration-700 
                    ${active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
                      {s.title}
                    </h2>
                    <p className="mt-3 text-white/90 text-sm sm:text-base md:text-lg">
                      {s.subtitle}
                    </p>

                    <div className="mt-6 flex flex-wrap items-center gap-3">
                      {/* CTA 1 : Ajouter un article */}
                      <Link
                        to={s.ctaPrimary.href}
                        className="inline-flex items-center justify-center rounded-xl bg-brand-orange text-white px-5 py-2.5 font-medium hover:opacity-90 transition"
                      >
                        {s.ctaPrimary.label}
                      </Link>

                      {/* CTA 2 : Ajouter une boutique */}
                      <Link
                        to={s.ctaSecondary.href}
                        className="inline-flex items-center justify-center rounded-xl border border-white/70 text-white px-5 py-2.5 font-medium hover:bg-white/10 transition"
                      >
                        {s.ctaSecondary.label}
                      </Link>
                    </div>

                    {/* Badges confiance (optionnel) */}
                    <div className="mt-4 flex flex-wrap gap-3 text-xs text-white/80">
                      <span className="inline-flex items-center gap-1">
                        <span>🔒</span> Transactions sécurisées
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <span>⚡</span> Publication en 1 minute
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <span>📍</span> Annonces locales
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Flèches */}
      <button
        aria-label="Slide précédent"
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 hover:bg-white shadow"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="m15 6-6 6 6 6" stroke="currentColor" strokeWidth="2" />
        </svg>
      </button>
      <button
        aria-label="Slide suivant"
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 hover:bg-white shadow"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="m9 18 6-6-6-6" stroke="currentColor" strokeWidth="2" />
        </svg>
      </button>

      {/* Puces */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {SLIDES.map((_, i) => {
          const active = i === index;
          return (
            <button
              key={i}
              aria-label={`Aller au slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-2.5 rounded-full transition-all ${
                active ? "w-6 bg-white" : "w-2.5 bg-white/60 hover:bg-white/80"
              }`}
            />
          );
        })}
      </div>
    </section>
  );
}
