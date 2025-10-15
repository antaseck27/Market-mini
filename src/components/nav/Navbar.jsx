
// // src/components/nav/Navbar.jsx
// import { Link } from "react-router-dom";
// import { signOut } from "firebase/auth";
// import { auth } from "../../firebase";           // ajuste le chemin si besoin
// import { useUserDoc } from "../../hooks/useUserDoc";
// import TopNav from "./TopNav";                   // si tu l'utilises

// export default function Navbar() {
//   const { user, me } = useUserDoc();
//   const displayName = me?.name || user?.displayName || user?.email?.split("@")[0];

//   return (
//     <>
//       <TopNav />
//       <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-orange-100/40">
//         <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">
//           {/* Logo */}
//           <Link to="/" className="flex items-center gap-2">
//             <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500 text-white font-bold">MM</span>
//             <span className="font-semibold text-lg">Mini Marketplace</span>
//           </Link>

//           {/* Recherche */}
//           <div className="flex-1 max-w-md">
//             <div className="relative">
//               <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.3-4.3" />
//                 <circle cx="10" cy="10" r="7" />
//               </svg>
//               <input type="text" placeholder="Rechercher un produit…" className="w-full bg-white rounded-full border border-gray-200 pl-10 pr-4 py-2.5 outline-none focus:ring-2 focus:ring-orange-500" />
//             </div>
//           </div>

//           {/* Zone droite */}
//           <div className="flex items-center gap-2">
//             {!user ? (
//               <>
//                 <Link to="/login" className="text-sm px-4 py-2 rounded-xl hover:bg-orange-50 text-gray-700 hover:text-orange-600 transition">
//                   Se connecter
//                 </Link>
//                 <Link to="/register" className="bg-orange-500 text-white px-4 py-2 rounded-xl hover:opacity-90 text-sm transition">
//                   S’inscrire
//                 </Link>
//               </>
//             ) : (
//               <>
//                 {(me?.role === "seller" || me?.role === "admin") && (
//                   <Link to="/nouvelle-annonce" className="hidden sm:inline-flex bg-orange-500 text-white px-4 py-2 rounded-xl hover:opacity-90 text-sm transition">
//                     Publier
//                   </Link>
//                 )}
//                 {me?.role === "admin" && (
//                   <Link to="/admin" className="text-sm px-3 py-2 rounded-xl hover:bg-orange-50">
//                     Admin
//                   </Link>
//                 )}

//                 {/* Menu utilisateur */}
//                 <div className="relative group">
//                   <button className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-200 hover:bg-orange-50">
//                     <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-500/10 text-orange-600 font-semibold">
//                       {displayName?.[0]?.toUpperCase() || "U"}
//                     </span>
//                     <span className="text-sm font-medium">{displayName}</span>
//                     <svg width="16" height="16" viewBox="0 0 24 24" className="text-gray-500">
//                       <path d="M7 10l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2"/>
//                     </svg>
//                   </button>

//                   <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow border border-gray-100 p-2 hidden group-hover:block">
//                     <Link to="/mon-compte" className="block px-3 py-2 text-sm rounded-lg hover:bg-orange-50">
//                       Mon compte
//                     </Link>
//                     <button
//                       onClick={() => signOut(auth)}
//                       className="w-full text-left px-3 py-2 text-sm rounded-lg hover:bg-orange-50 text-red-600"
//                     >
//                       Se déconnecter
//                     </button>
//                   </div>
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       </header>
//     </>
//   );
// }

import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { useUserDoc } from '../../hooks/useUserDoc';
import TopNav from './TopNav';

export default function Navbar() {
  const { user, me } = useUserDoc(); // Hook qui renvoie l'utilisateur Firebase et Firestore
  // const displayName = user?.displayName || me?.name || "Utilisateur";
  const displayName =
    me?.name ||
    user?.displayName ||
    (user?.email ? user.email.split('@')[0] : '') ||
    'Utilisateur';
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const { pathname } = useLocation();

  // Fermer au changement de route
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Fermer si on clique à l’extérieur
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  // Fermer avec Escape
  useEffect(() => {
    const handleKeyDown = (e) => e.key === 'Escape' && setMenuOpen(false);
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <TopNav />
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-orange-100/40">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500 text-white font-bold">
              MM
            </span>
            <span className="font-semibold text-lg text-gray-800">
              Mini Marketplace
            </span>
          </Link>

          {/* Barre de recherche */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-4.3-4.3"
                />
                <circle cx="10" cy="10" r="7" />
              </svg>
              <input
                type="text"
                placeholder="Rechercher un produit..."
                className="w-full bg-white rounded-full border border-gray-200 pl-10 pr-4 py-2.5 outline-none focus:ring-2 focus:ring-orange-500 placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Zone droite : panier + login/register ou menu utilisateur */}
          <div className="flex items-center gap-2">
            {/* Icône Panier */}
            <Link
              to="/cart"
              className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-gray-200 hover:bg-orange-50"
              title="Panier">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                className="text-gray-700">
                <path
                  d="M6 6h15l-1.5 9H7.5L6 6Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <path d="M6 6 5 3H3" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="9" cy="19" r="1.4" fill="currentColor" />
                <circle cx="18" cy="19" r="1.4" fill="currentColor" />
              </svg>
            </Link>

            {/* Utilisateur connecté ? */}
            {user ? (
              <div ref={menuRef} className="relative">
                <button
                  type="button"
                  onClick={() => setMenuOpen((v) => !v)}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-200 hover:bg-orange-50 transition"
                  aria-haspopup="menu"
                  aria-expanded={menuOpen}>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-500/10 text-orange-600 font-semibold">
                    {displayName?.[0]?.toUpperCase() || 'U'}
                  </span>
                  <span className="text-sm font-medium text-gray-700">
                    {displayName}
                  </span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    className={`text-gray-500 transition ${
                      menuOpen ? 'rotate-180' : ''
                    }`}>
                    <path
                      d="M7 10l5 5 5-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </button>

                {/* Dropdown utilisateur */}
                <div
                  role="menu"
                  className={`absolute right-0 mt-2 w-48 bg-white rounded-xl shadow border border-gray-100 p-2 transition ${
                    menuOpen
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-95 pointer-events-none'
                  }`}>
                  <Link
                    to="/mon-compte"
                    className="block px-3 py-2 text-sm rounded-lg hover:bg-orange-50 text-gray-700"
                    role="menuitem">
                    Mon compte
                  </Link>
                  {me?.role === 'seller' && (
                    <Link
                      to="/nouvelle-annonce"
                      className="block px-3 py-2 text-sm rounded-lg hover:bg-orange-50 text-gray-700"
                      role="menuitem">
                      Nouvelle annonce
                    </Link>
                  )}
                  {me?.role === 'admin' && (
                    <Link
                      to="/admin"
                      className="block px-3 py-2 text-sm rounded-lg hover:bg-orange-50 text-gray-700"
                      role="menuitem">
                      Admin Dashboard
                    </Link>
                  )}
                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      signOut(auth);
                    }}
                    className="w-full text-left px-3 py-2 text-sm rounded-lg hover:bg-orange-50 text-red-600"
                    role="menuitem">
                    Se déconnecter
                  </button>
                </div>
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-sm px-4 py-2 rounded-xl hover:bg-orange-50 text-gray-700 hover:text-orange-500 transition">
                  Se connecter
                </Link>
                <Link
                  to="/register"
                  className="bg-orange-500 text-white px-4 py-2 rounded-xl hover:opacity-90 text-sm transition">
                  S’inscrire
                </Link>
              </>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
