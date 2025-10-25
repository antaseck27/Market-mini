

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


// import { Link } from "react-router-dom";
// import { useState } from "react";
// import { useAuth } from "../../context/AuthContext";

// export default function Navbar() {
//   const { user, profile, logout } = useAuth();
//   const [open, setOpen] = useState(false);

//   const fallbackName = user?.email ? user.email.split("@")[0] : "Utilisateur";
//   const displayName = profile?.name?.trim?.() || profile?.displayName?.trim?.() || fallbackName;

//   return (
//     <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-orange-100/40">
//       <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">
//         {/* Logo */}
//         <Link to="/" className="flex items-center gap-2">
//           <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#ff7a00] text-white font-bold">MM</span>
//           <span className="font-semibold text-lg">Mini Marketplace</span>
//         </Link>

//         {/* Recherche */}
//         <div className="flex-1 max-w-md">
//           <div className="relative">
//             <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.3-4.3" />
//               <circle cx="10" cy="10" r="7" />
//             </svg>
//             <input
//               type="text"
//               placeholder="Rechercher un produit…"
//               className="w-full bg-white rounded-full border border-gray-200 pl-10 pr-4 py-2.5 outline-none focus:ring-2 focus:ring-[#ff7a00] placeholder:text-gray-400"
//             />
//           </div>
//         </div>

//         {/* À droite */}
//         <div className="flex items-center gap-2">
//           {/* Panier */}
//           <Link
//             to="/cart"
//             className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-gray-200 hover:bg-orange-50"
//             title="Panier"
//           >
//             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-gray-700">
//               <path d="M6 6h15l-1.5 9H7.5L6 6Z" stroke="currentColor" strokeWidth="1.6" />
//               <path d="M6 6 5 3H3" stroke="currentColor" strokeWidth="1.6" />
//               <circle cx="9" cy="19" r="1.4" fill="currentColor" />
//               <circle cx="18" cy="19" r="1.4" fill="currentColor" />
//             </svg>
//           </Link>

//           {!user ? (
//             <>
//               <Link to="/login" className="text-sm px-4 py-2 rounded-xl hover:bg-orange-50 text-gray-700 hover:text-[#ff7a00] transition">
//                 Se connecter
//               </Link>
//               <Link to="/register" className="bg-[#ff7a00] text-white px-4 py-2 rounded-xl hover:opacity-90 text-sm transition">
//                 S’inscrire
//               </Link>
//             </>
//           ) : (
//             <div className="relative">
//               <button
//                 onClick={() => setOpen(o => !o)}
//                 onBlur={() => setTimeout(() => setOpen(false), 120)} // évite la fermeture instantanée
//                 className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-200 hover:bg-orange-50"
//                 aria-haspopup="menu"
//                 aria-expanded={open}
//               >
//                 <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#ff7a00] text-white text-xs font-bold">
//                   {displayName.substring(0,1).toUpperCase()}
//                 </span>
//                 <span className="text-sm font-medium text-gray-800 max-w-[120px] truncate">
//                   {displayName}
//                 </span>
//                 <svg width="16" height="16" viewBox="0 0 24 24" className={`transition ${open ? "rotate-180" : ""}`}>
//                   <path d="M7 10l5 5 5-5" fill="currentColor" />
//                 </svg>
//               </button>

//               {open && (
//                 <div
//                   role="menu"
//                   className="absolute right-0 mt-2 w-48 bg-white border border-orange-100 rounded-xl shadow-lg overflow-hidden z-50"
//                 >
//                   <Link to="/mon-compte" className="block px-4 py-2 text-sm hover:bg-orange-50" role="menuitem">
//                     Mon compte
//                   </Link>
//                   <Link to="/nouvelle-annonce" className="block px-4 py-2 text-sm hover:bg-orange-50" role="menuitem">
//                     Ajouter une annonce
//                   </Link>
//                   <Link to="/shops/open" className="block px-4 py-2 text-sm hover:bg-orange-50" role="menuitem">
//                     Ouvrir ma boutique
//                   </Link>
//                   <button
//                     onClick={logout}
//                     className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
//                     role="menuitem"
//                   >
//                     Se déconnecter
//                   </button>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// }
