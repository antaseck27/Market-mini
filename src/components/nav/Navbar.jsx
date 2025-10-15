import { Link } from "react-router-dom";
import TopNav from "./TopNav";

export default function Navbar() {
  return (
    <>
      {/* Barre supérieure */}
      <TopNav />

      {/* Barre principale */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-orange-100/40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">
          
          {/* === LOGO === */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="inline-flex items-center justify-center rounded-lg bg-orange-500 text-white font-extrabold w-9 h-9 transition-transform duration-200 group-hover:scale-110">
              M
            </div>
            <h1 className="font-extrabold text-xl leading-none tracking-tight">
              <span className="text-gray-900">Mini</span>
              <span className="text-orange-500 ml-1">Market</span>
            </h1>
          </Link>

          {/* === BARRE DE RECHERCHE === */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.3-4.3" />
                <circle cx="10" cy="10" r="7" />
              </svg>
              <input
                type="text"
                placeholder="Rechercher un produit…"
                className="w-full bg-white rounded-full border border-gray-200 pl-10 pr-4 py-2.5 outline-none focus:ring-2 focus:ring-orange-500 placeholder:text-gray-400 transition"
              />
            </div>
          </div>

          {/* === BOUTONS UTILISATEUR === */}
          <div className="flex items-center gap-2">
            
            {/* Icône Panier */}
            <Link
              to="/cart"
              className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-gray-200 hover:bg-orange-50 transition"
              title="Panier"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                className="text-gray-700"
              >
                <path
                  d="M6 6h15l-1.5 9H7.5L6 6Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <path
                  d="M6 6 5 3H3"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <circle cx="9" cy="19" r="1.4" fill="currentColor" />
                <circle cx="18" cy="19" r="1.4" fill="currentColor" />
              </svg>
            </Link>

            {/* Boutons connexion / inscription */}
            <Link
              to="/login"
              className="text-sm px-4 py-2 rounded-xl hover:bg-orange-50 text-gray-700 hover:text-orange-500 transition"
            >
              Se connecter
            </Link>
            <Link
              to="/register"
              className="bg-orange-500 text-white px-4 py-2 rounded-xl hover:opacity-90 text-sm transition"
            >
              S’inscrire
            </Link>
            {/* <button
            onClick={() => signOut(auth)}
            className="text-sm px-4 py-2 rounded-xl hover:bg-orange-50"
          >
            Déconnexion
          </button> */}

          </div>
        </div>
      </header>
    </>
  );
}
