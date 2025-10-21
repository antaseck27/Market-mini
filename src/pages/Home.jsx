
// import { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";

// export default function Home() {
//   /** ---------------- SLIDER ---------------- **/
//   const SLIDES = [
//     {
//       id: 1,
//       title: "Vendez et achetez en toute confiance",
//       subtitle: "La plateforme la plus simple et sécurisée du Sénégal",
//       ctaPrimary: { label: "Ajouter un article", href: "/nouvelle-annonce" },
//       ctaSecondary: { label: "Ajouter une boutique", href: "/shops/open" },
//       image:
//         "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop",
//     },
//     {
//       id: 2,
//       title: "Des milliers d’annonces locales",
//       subtitle: "Électronique, mode, services, maison… près de chez vous",
//       ctaPrimary: { label: "Ajouter un article", href: "/nouvelle-annonce" },
//       ctaSecondary: { label: "Ajouter une boutique", href: "/shops/open" },
//       image:
//         "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1600&auto=format&fit=crop",
//     },
//     {
//       id: 3,
//       title: "Gagnez du temps avec nos filtres",
//       subtitle: "Catégorie, localisation, prix… trouvez rapidement",
//       ctaPrimary: { label: "Ajouter un article", href: "/nouvelle-annonce" },
//       ctaSecondary: { label: "Ajouter une boutique", href: "/shops/open" },
//       image:
//         "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1600&auto=format&fit=crop",
//     },
//   ];

//   const [index, setIndex] = useState(0);
//   const total = SLIDES.length;
//   const intervalRef = useRef(null);
//   const hoveringRef = useRef(false);

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
//     if (intervalRef.current) {
//       clearInterval(intervalRef.current);
//       intervalRef.current = null;
//     }
//   };
//   const next = () => setIndex((i) => (i + 1) % total);
//   const prev = () => setIndex((i) => (i - 1 + total) % total);
//   const goTo = (i) => setIndex(i);

//   /** ---------------- MOCKS (sans Firebase) ---------------- **/
//   const CATEGORIES = [
//     { label: "Électronique", icon: "💻", slug: "electronique" },
//     { label: "Mode", icon: "👕", slug: "mode" },
//     { label: "Services", icon: "🧰", slug: "services" },
//     { label: "Maison", icon: "🏠", slug: "maison" },
//     { label: "Beauté", icon: "💄", slug: "beaute" },
//     { label: "Accessoires", icon: "⌚", slug: "accessoires" },
//   ];

//   const PRODUCTS = [
//     {
//       id: 1,
//       title: "Casque Bluetooth",
//       price: "25 000 FCFA",
//       image:
//         "https://images.unsplash.com/photo-1518445066455-164fbe36f43b?q=80&w=1200&auto=format&fit=crop",
//       city: "Dakar",
//     },
//     {
//       id: 2,
//       title: "Sneakers tendance",
//       price: "18 500 FCFA",
//       image:
//         "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
//       city: "Pikine",
//     },
//     {
//       id: 3,
//       title: "Montre élégante",
//       price: "32 000 FCFA",
//       image:
//         "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=1200&auto=format&fit=crop",
//       city: "Thiès",
//     },
//     {
//       id: 4,
//       title: "Téléviseur 43”",
//       price: "145 000 FCFA",
//       image:
//         "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?q=80&w=1200&auto=format&fit=crop",
//       city: "Rufisque",
//     },
//     {
//       id: 5,
//       title: "Sac à main",
//       price: "15 000 FCFA",
//       image:
//         "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1200&auto=format&fit=crop",
//       city: "Guédiawaye",
//     },
//     {
//       id: 6,
//       title: "Mixeur de cuisine",
//       price: "12 500 FCFA",
//       image:
//         "https://images.unsplash.com/photo-1511910849309-0dffb6f50508?q=80&w=1200&auto=format&fit=crop",
//       city: "Mbour",
//     },
//   ];

//   const SHOPS = [
//     {
//       id: "s1",
//       name: "Boutique Almadies",
//       city: "Dakar",
//       image:
//         "https://images.unsplash.com/photo-1556741533-f6acd6477e9a?q=80&w=800&auto=format&fit=crop",
//     },
//     {
//       id: "s2",
//       name: "Tech Pikine",
//       city: "Pikine",
//       image:
//         "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=800&auto=format&fit=crop",
//     },
//     {
//       id: "s3",
//       name: "Mode Thiès",
//       city: "Thiès",
//       image:
//         "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=800&auto=format&fit=crop",
//     },
//     {
//       id: "s4",
//       name: "Maison Rufisque",
//       city: "Rufisque",
//       image:
//         "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop",
//     },
//     {
//       id: "s5",
//       name: "Accessoires Mbour",
//       city: "Mbour",
//       image:
//         "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
//     },
//   ];

//   return (
//     <div className="space-y-16">
//       {/* ---------------- SLIDER ---------------- */}
//       <section
//         className="relative overflow-hidden rounded-2xl bg-black shadow-xl max-w-7xl mx-auto"
//         onMouseEnter={() => (hoveringRef.current = true)}
//         onMouseLeave={() => (hoveringRef.current = false)}
//       >
//         <div className="relative h-[360px] sm:h-[420px] md:h-[520px]">
//           {SLIDES.map((s, i) => {
//             const active = i === index;
//             return (
//               <div
//                 key={s.id}
//                 className={`absolute inset-0 transition-all duration-700 ease-out ${
//                   active
//                     ? "opacity-100 translate-y-0 scale-100"
//                     : "opacity-0 translate-y-3 scale-[1.01] pointer-events-none"
//                 }`}
//               >
//                 <img
//                   src={s.image}
//                   alt=""
//                   className="h-full w-full object-cover opacity-80"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
//                 <div className="absolute inset-0 flex items-center">
//                   <div className="max-w-7xl mx-auto px-4">
//                     <div
//                       className={`max-w-xl text-white transition-all duration-700 ${
//                         active
//                           ? "opacity-100 translate-y-0"
//                           : "opacity-0 translate-y-2"
//                       }`}
//                     >
//                       <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
//                         {s.title}
//                       </h2>
//                       <p className="mt-3 text-white/90 text-base md:text-lg">
//                         {s.subtitle}
//                       </p>

//                       <div className="mt-6 flex flex-wrap items-center gap-3">
//                         <Link
//                           to={s.ctaPrimary.href}
//                           className="inline-flex items-center justify-center rounded-xl bg-[#ff7a00] text-white px-5 py-2.5 font-medium hover:opacity-90 transition"
//                         >
//                           {s.ctaPrimary.label}
//                         </Link>
//                         <Link
//                           to={s.ctaSecondary.href}
//                           className="inline-flex items-center justify-center rounded-xl border border-white/70 text-white px-5 py-2.5 font-medium hover:bg-white/10 transition"
//                         >
//                           {s.ctaSecondary.label}
//                         </Link>
//                       </div>

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

//                     {/* Badges confiance (optionnel) */}
//                     <div className="mt-4 flex flex-wrap gap-3 text-xs text-white/80">
//                       <span className="inline-flex items-center gap-1">
//                         <span></span> Transactions sécurisées
//                       </span>
//                       <span className="inline-flex items-center gap-1">
//                         <span>⚡</span> Publication en 1 minute
//                       </span>
//                       <span className="inline-flex items-center gap-1">
//                         <span></span> Annonces locales
//                       </span>

//                       <div className="mt-4 flex flex-wrap gap-3 text-xs text-white/80">
//                         <span>🔒 Transactions sécurisées</span>
//                         <span>⚡ Publication rapide</span>
//                         <span>📍 Annonces locales</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Flèches */}
//         <button
//           aria-label="Précédent"
//           onClick={prev}
//           className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 hover:bg-white shadow"
//         >
//           <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
//             <path d="m15 6-6 6 6 6" stroke="currentColor" strokeWidth="2" />
//           </svg>
//         </button>
//         <button
//           aria-label="Suivant"
//           onClick={next}
//           className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 hover:bg-white shadow"
//         >
//           <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
//             <path d="m9 18 6-6-6-6" stroke="currentColor" strokeWidth="2" />
//           </svg>
//         </button>

//         {/* Puces */}
//         <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
//           {SLIDES.map((_, i) => (
//             <button
//               key={i}
//               aria-label={`Aller au slide ${i + 1}`}
//               onClick={() => goTo(i)}
//               className={`h-2.5 rounded-full transition-all ${
//                 i === index ? "w-6 bg-white" : "w-2.5 bg-white/60 hover:bg-white/80"
//               }`}
//             />

//           );
//         })}
//       </div>

//     </section>
    
//           ))}
//         </div>
//       </section>

//       {/* ---------------- CATÉGORIES ---------------- */}
//       <section className="max-w-7xl mx-auto px-4">
//         <h2 className="text-2xl font-bold text-gray-900 mb-6">
//           Catégories populaires
//         </h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
//           {CATEGORIES.map((cat) => (
//             <Link
//               key={cat.slug}
//               to={`/categories/${cat.slug}`}
//               className="flex flex-col items-center justify-center bg-white border border-orange-100 rounded-xl shadow-sm hover:shadow-md hover:border-orange-400 transition p-4"
//             >
//               <span className="text-3xl mb-2">{cat.icon}</span>
//               <span className="text-sm font-medium text-gray-700">
//                 {cat.label}
//               </span>
//             </Link>
//           ))}
//         </div>
//       </section>

//       {/* ---------------- PRODUITS RÉCENTS ---------------- */}
//       <section className="max-w-7xl mx-auto px-4">
//         <div className="flex items-center justify-between mb-6">
//           <h2 className="text-2xl font-bold text-gray-900">Produits récents</h2>
//           <Link to="/categories" className="text-[#ff7a00] text-sm hover:underline">
//             Voir tout
//           </Link>
//         </div>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
//           {PRODUCTS.map((p) => (
//             <Link
//               to={`/annonce/${p.id}`}
//               key={p.id}
//               className="bg-white rounded-xl shadow hover:shadow-lg border border-orange-100 hover:border-orange-300 transition overflow-hidden"
//             >
//               <img
//                 src={p.image}
//                 alt={p.title}
//                 className="h-40 w-full object-cover"
//               />
//               <div className="p-3">
//                 <h3 className="text-sm font-semibold text-gray-800 line-clamp-1">
//                   {p.title}
//                 </h3>
//                 <div className="flex items-center justify-between mt-1">
//                   <p className="text-[#ff7a00] font-medium text-sm">{p.price}</p>
//                   <span className="text-xs text-gray-500">{p.city}</span>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </section>

//       {/* ---------------- BOUTIQUES POPULAIRES ---------------- */}
//       <section className="max-w-7xl mx-auto px-4">
//         <div className="flex items-center justify-between mb-6">
//           <h2 className="text-2xl font-bold text-gray-900">Boutiques populaires</h2>
//           <Link to="/shops/all" className="text-[#ff7a00] text-sm hover:underline">
//             Voir toutes
//           </Link>
//         </div>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
//           {SHOPS.map((s) => (
//             <Link
//               to={`/shops/${s.id}`}
//               key={s.id}
//               className="bg-white rounded-xl shadow border border-orange-100 hover:shadow-lg hover:border-orange-300 transition p-4 text-center"
//             >
//               <img
//                 src={s.image}
//                 alt={s.name}
//                 className="w-20 h-20 mx-auto rounded-full object-cover mb-3 border-2 border-[#ff7a00]"
//               />
//               <h3 className="font-semibold text-gray-800">{s.name}</h3>
//               <p className="text-xs text-gray-500">{s.city}</p>
//             </Link>
//           ))}
//         </div>
//       </section>

//       {/* ---------------- PROMOTIONS ---------------- */}
//       <section className="max-w-7xl mx-auto px-4">
//         <h2 className="text-2xl font-bold text-gray-900 mb-6">Offres du moment</h2>
//         <div className="bg-gradient-to-r from-[#ff8a1f] to-[#ff7a00] rounded-2xl p-10 text-white text-center shadow-lg">
//           <h3 className="text-3xl font-bold mb-3">🔥 Vente Flash !</h3>
//           <p className="mb-5 text-orange-50">
//             Jusqu’à <span className="font-semibold">-50%</span> sur l’électronique cette semaine.
//           </p>
//           <Link
//             to="/promotions"
//             className="bg-white text-[#ff7a00] font-semibold px-6 py-2 rounded-xl hover:bg-orange-100 transition"
//           >
//             Voir les offres
//           </Link>
//         </div>
//       </section>

//       {/* ---------------- NEWSLETTER / CTA ---------------- */}
//       <section className="max-w-7xl mx-auto px-4 pb-6">
//         <div className="bg-white border border-orange-100 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4">
//           <div>
//             <h3 className="text-lg font-semibold text-gray-900">
//               Recevez les meilleures offres chaque semaine
//             </h3>
//             <p className="text-sm text-gray-600">
//               Promotions, nouveautés et boutiques populaires directement dans votre boîte mail.
//             </p>
//           </div>
//           <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               alert("✅ Inscription à la newsletter réussie !");
//             }}
//             className="flex w-full md:w-auto gap-2"
//           >
//             <input
//               type="email"
//               placeholder="Votre email"
//               className="flex-1 md:w-64 rounded-xl border border-gray-200 px-4 py-2.5 focus:ring-2 focus:ring-[#ff7a00] outline-none"
//               required
//             />
//             <button className="rounded-xl bg-[#ff7a00] text-white px-5 py-2.5 font-medium hover:opacity-90 transition">
//               S’abonner
//             </button>
//           </form>
//         </div>
//       </section>
//     </div>
//   );
// }

//  {/* 2️⃣ CATÉGORIES POPULAIRES */}
//  <section className="max-w-7xl mx-auto px-4">
//  <h2 className="text-2xl font-bold text-gray-900 mb-6">
//    Catégories populaires
//  </h2>
//  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
//    {[
//      { label: "Électronique", icon: "💻" },
//      { label: "Mode", icon: "👕" },
//      { label: "Services", icon: "🧰" },
//      { label: "Maison", icon: "🏠" },
//      { label: "Beauté", icon: "💄" },
//      { label: "Accessoires", icon: "⌚" },
//    ].map((cat) => (
//      <Link
//        key={cat.label}
//        to={`/categories/${cat.label.toLowerCase()}`}
//        className="flex flex-col items-center justify-center bg-white border border-orange-100 rounded-xl shadow-sm hover:shadow-md hover:border-orange-300 transition p-4"
//      >
//        <span className="text-3xl mb-2">{cat.icon}</span>
//        <span className="text-sm font-medium text-gray-700">
//          {cat.label}
//        </span>
//      </Link>
//    ))}
//  </div>
// </section>




import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  /** ---------------- SLIDER ---------------- **/
  const SLIDES = [
    {
      id: 1,
      title: "Vendez et achetez en toute confiance",
      subtitle: "La plateforme la plus simple et sécurisée du Sénégal",
      ctaPrimary: { label: "Ajouter un article", href: "/nouvelle-annonce" },
      ctaSecondary: { label: "Ajouter une boutique", href: "/shops/open" },
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Des milliers d’annonces locales",
      subtitle: "Électronique, mode, services, maison… près de chez vous",
      ctaPrimary: { label: "Ajouter un article", href: "/nouvelle-annonce" },
      ctaSecondary: { label: "Ajouter une boutique", href: "/shops/open" },
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1600&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Gagnez du temps avec nos filtres",
      subtitle: "Catégorie, localisation, prix… trouvez rapidement",
      ctaPrimary: { label: "Ajouter un article", href: "/nouvelle-annonce" },
      ctaSecondary: { label: "Ajouter une boutique", href: "/shops/open" },
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1600&auto=format&fit=crop",
    },
  ];

  const [index, setIndex] = useState(0);
  const total = SLIDES.length;
  const intervalRef = useRef(null);
  const hoveringRef = useRef(false);

  useEffect(() => {
    start();
    return stop;
  }, []);

  const start = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      if (!hoveringRef.current) next();
    }, 4500);
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

  /** ---------------- MOCKS ---------------- **/
  const CATEGORIES = [
    { label: "Électronique", icon: "💻", slug: "electronique" },
    { label: "Mode", icon: "👕", slug: "mode" },
    { label: "Services", icon: "🧰", slug: "services" },
    { label: "Maison", icon: "🏠", slug: "maison" },
    { label: "Beauté", icon: "💄", slug: "beaute" },
    { label: "Accessoires", icon: "⌚", slug: "accessoires" },
  ];

  const PRODUCTS = [
    {
      id: 1,
      title: "Casque Bluetooth",
      price: "25 000 FCFA",
      image: "https://images.unsplash.com/photo-1518445066455-164fbe36f43b?q=80&w=1200&auto=format&fit=crop",
      city: "Dakar",
    },
    {
      id: 2,
      title: "Sneakers tendance",
      price: "18 500 FCFA",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
      city: "Pikine",
    },
    {
      id: 3,
      title: "Montre élégante",
      price: "32 000 FCFA",
      image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=1200&auto=format&fit=crop",
      city: "Thiès",
    },
    {
      id: 4,
      title: "Téléviseur 43”",
      price: "145 000 FCFA",
      image: "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?q=80&w=1200&auto=format&fit=crop",
      city: "Rufisque",
    },
    {
      id: 5,
      title: "Sac à main",
      price: "15 000 FCFA",
      image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1200&auto=format&fit=crop",
      city: "Guédiawaye",
    },
    {
      id: 6,
      title: "Mixeur de cuisine",
      price: "12 500 FCFA",
      image: "https://images.unsplash.com/photo-1511910849309-0dffb6f50508?q=80&w=1200&auto=format&fit=crop",
      city: "Mbour",
    },
  ];

  const SHOPS = [
    {
      id: "s1",
      name: "Boutique Almadies",
      city: "Dakar",
      image: "https://images.unsplash.com/photo-1556741533-f6acd6477e9a?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "s2",
      name: "Tech Pikine",
      city: "Pikine",
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "s3",
      name: "Mode Thiès",
      city: "Thiès",
      image: "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "s4",
      name: "Maison Rufisque",
      city: "Rufisque",
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "s5",
      name: "Accessoires Mbour",
      city: "Mbour",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <div className="space-y-16">
      {/* ---------------- SLIDER ---------------- */}
      <section
        className="relative overflow-hidden rounded-2xl bg-black shadow-xl max-w-7xl mx-auto"
        onMouseEnter={() => (hoveringRef.current = true)}
        onMouseLeave={() => (hoveringRef.current = false)}
      >
        <div className="relative h-[360px] sm:h-[420px] md:h-[520px]">
          {SLIDES.map((s, i) => {
            const active = i === index;
            return (
              <div
                key={s.id}
                className={`absolute inset-0 transition-all duration-700 ease-out ${
                  active
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-3 scale-[1.01] pointer-events-none"
                }`}
              >
                <img src={s.image} alt="" className="h-full w-full object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
                <div className="absolute inset-0 flex items-center">
                  <div className="max-w-7xl mx-auto px-4">
                    <div
                      className={`max-w-xl text-white transition-all duration-700 ${
                        active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                      }`}
                    >
                      <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                        {s.title}
                      </h2>
                      <p className="mt-3 text-white/90 text-base md:text-lg">{s.subtitle}</p>

                      {/* CTA */}
                      <div className="mt-6 flex flex-wrap items-center gap-3">
                        <Link
                          to={s.ctaPrimary.href}
                          className="inline-flex items-center justify-center rounded-xl bg-brand-orange text-white px-5 py-2.5 font-medium hover:opacity-90 transition"
                        >
                          {s.ctaPrimary.label}
                        </Link>
                        <Link
                          to={s.ctaSecondary.href}
                          className="inline-flex items-center justify-center rounded-xl border border-white/70 text-white px-5 py-2.5 font-medium hover:bg-white/10 transition"
                        >
                          {s.ctaSecondary.label}
                        </Link>
                      </div>

                      {/* Badges */}
                      <div className="mt-4 flex flex-wrap gap-3 text-xs text-white/80">
                        <span>🔒 Transactions sécurisées</span>
                        <span>⚡ Publication rapide</span>
                        <span>📍 Annonces locales</span>
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
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 hover:bg-white shadow"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="m15 6-6 6 6 6" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 hover:bg-white shadow"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="m9 18 6-6-6-6" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>

        {/* Puces */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-2.5 rounded-full transition-all ${
                i === index ? "w-6 bg-white" : "w-2.5 bg-white/60 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </section>

      {/* ---------------- CATÉGORIES POPULAIRES ---------------- */}
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Catégories populaires</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              to={`/categories/${cat.slug}`}
              className="flex flex-col items-center justify-center bg-white border border-orange-100 rounded-xl shadow-sm hover:shadow-md hover:border-orange-400 transition p-4"
            >
              <span className="text-3xl mb-2">{cat.icon}</span>
              <span className="text-sm font-medium text-gray-700">{cat.label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Autres sections (Produits, Boutiques, Promotions, Newsletter) */}
      {/* ... Tu peux garder le reste du fichier tel quel ... */}
    </div>
  );
}
