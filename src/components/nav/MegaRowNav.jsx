

// import { useState } from "react";
// import { Link } from "react-router-dom";

// const menus = [
//   { label: "Accueil", href: "/" },
//   {
//     label: "Catégories",
//     items: [
//       { label: "Mobile", href: "/c/mobile" },
//       { label: "Electronics", href: "/c/electronics" },
//       { label: "Cosmetics", href: "/c/cosmetics" },
//       { label: "Furniture", href: "/c/furniture" },
//       { label: "Watches", href: "/c/watches" },
//       { label: "Decor", href: "/c/decor" },
//       { label: "Accessories", href: "/c/accessories" },
//     ],
//   },
//   {
//     label: "Boutique",
//     items: [
//       { label: "Toutes les boutiques", href: "/shops/all" },
//       { label: "Boutiques populaires", href: "/shops/all?sort=popular" },
//       { label: "Boutiques locales", href: "/shops/all?filter=local" },
//       { label: "Ouvrir une boutique", href: "/shops/open" },
//     ],
//   },
//   {
//     label: "Promotions",
//     items: [
//       { label: "Offres du jour", href: "/promotions/daily" },
//       { label: "Vente flash", href: "/promotions/flash" },
//       { label: "Liquidation", href: "/promotions/clearance" },
//     ],
//   },
//   {
//     label: "Aide",
//     items: [
//       { label: "FAQ", href: "/help/faq" },
//       { label: "Nous contacter", href: "/help/contact" },
//     ],
//   },
// ];

// export default function MegaRowNav() {
//   const [open, setOpen] = useState(null);

//   return (
//     <div className="bg-white border-b border-orange-100/50">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="relative flex items-center justify-center gap-2 md:gap-4 py-2">
//           {menus.map((m, idx) => {
//             const isOpen = open === idx;
//             const hasDropdown = Array.isArray(m.items);

//             return (
//               <div
//                 key={m.label}
//                 className="relative"
//                 onMouseEnter={() => setOpen(idx)}
//                 onMouseLeave={() => setOpen(null)}
//               >
//                 {hasDropdown ? (
//                   <button
//                     type="button"
//                     onClick={() => setOpen(isOpen ? null : idx)}
//                     className={`px-4 py-2 rounded-full text-sm font-medium transition ${
//                       isOpen
//                         ? "bg-orange-50 text-brand-orange"
//                         : "hover:bg-orange-50 hover:text-brand-orange"
//                     }`}
//                   >
//                     {m.label}
//                   </button>
//                 ) : (
//                   <Link
//                     to={m.href}
//                     className="px-4 py-2 rounded-full text-sm font-medium transition hover:bg-orange-50 hover:text-brand-orange"
//                   >
//                     {m.label}
//                   </Link>
//                 )}

//                 {hasDropdown && (
//                   <div
//                     className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 z-50 w-[280px] sm:w-[320px] bg-white/95 backdrop-blur border border-gray-100 rounded-xl shadow-2xl p-2 transition ${
//                       isOpen
//                         ? "opacity-100 visible translate-y-0"
//                         : "opacity-0 invisible -translate-y-1"
//                     }`}
//                   >
//                     <ul className="grid gap-1">
//                       {m.items.map((it) => (
//                         <li key={it.label}>
//                           <Link
//                             to={it.href}
//                             className="flex items-center justify-between px-3 py-2 rounded-lg text-sm hover:bg-orange-50"
//                             onClick={() => setOpen(null)}
//                           >
//                             <span>{it.label}</span>
//                             <span className="text-gray-300">›</span>
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const MENUS = [
  { label: "Accueil", href: "/" },
  {
    label: "Catégories",
    items: [
      { label: "Mobile", href: "/mobile" },
      { label: "Electronics", href: "/electronics" },
      { label: "Cosmetics", href: "/cosmetics" },
      { label: "Furniture", href: "/furniture" },
      { label: "Watches", href: "/c/watches" },
      { label: "Decor", href: "/c/decor" },
      { label: "Accessories", href: "/c/accessories" },
    ],
  },
  {
    label: "Boutique",
    items: [
      { label: "Toutes les boutiques", href: "/shops/all" },
      { label: "Boutiques populaires", href: "/shops/all?sort=popular" },
      { label: "Boutiques locales", href: "/shops/all?filter=local" },
      { label: "Ouvrir une boutique", href: "/shops/open" },
    ],
  },
  {
    label: "Promotions",
    items: [
      { label: "Offres du jour", href: "/promotions/daily" },
      { label: "Vente flash", href: "/promotions/flash" },
      { label: "Liquidation", href: "/promotions/clearance" },
    ],
  },
  {
    label: "Aide",
    items: [
      { label: "FAQ", href: "/help/faq" },
      { label: "Nous contacter", href: "/help/contact" },
    ],
  },
];

export default function MegaRowNav() {
  const [open, setOpen] = useState(null); // index du menu ouvert
  const navRef = useRef(null);

  // Fermer en cliquant à l’extérieur
  useEffect(() => {
    const onClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpen(null);
      }
    };
    document.addEventListener("click", onClickOutside);
    return () => document.removeEventListener("click", onClickOutside);
  }, []);

  // Accessibilité clavier: ESC ferme
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const toggle = (idx) => setOpen((cur) => (cur === idx ? null : idx));
  const close = () => setOpen(null);

  return (
    <nav ref={navRef} className="bg-white border-b border-orange-100/60">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative flex items-center justify-center gap-2 md:gap-4 py-2">
          {MENUS.map((menu, idx) => {
            const hasDropdown = Array.isArray(menu.items);
            const isOpen = open === idx;

            return (
              <div key={menu.label} className="relative">
                {hasDropdown ? (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation(); // évite la fermeture immédiate
                      toggle(idx);
                    }}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                      isOpen
                        ? "bg-orange-50 text-orange-600"
                        : "hover:bg-orange-50 hover:text-orange-600"
                    }`}
                    aria-expanded={isOpen}
                    aria-haspopup="menu"
                  >
                    {menu.label}
                  </button>
                ) : (
                  <Link
                    to={menu.href}
                    className="px-4 py-2 rounded-full text-sm font-medium transition hover:bg-orange-50 hover:text-orange-600"
                    onClick={close}
                  >
                    {menu.label}
                  </Link>
                )}

                {hasDropdown && (
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 z-50 w-[280px] sm:w-[320px] bg-white/95 backdrop-blur border border-gray-100 rounded-xl shadow-2xl p-2 transition ${
                      isOpen
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-1 pointer-events-none"
                    }`}
                    role="menu"
                    onClick={(e) => e.stopPropagation()} // clics à l’intérieur n’enferment pas
                  >
                    <ul className="grid gap-1">
                      {menu.items.map((it) => (
                        <li key={it.label}>
                          <Link
                            to={it.href}
                            className="flex items-center justify-between px-3 py-2 rounded-lg text-sm hover:bg-orange-50"
                            onClick={close}
                          >
                            <span>{it.label}</span>
                            <span className="text-gray-300">›</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
}