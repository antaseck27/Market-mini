// // src/layouts/AdminLayout.jsx
// // import MainLayout from "./MainLayout";
// import { NavLink } from "react-router-dom";

// export default function AdminLayout({ children }) {
//   const navItem =
//     "block px-3 py-2 rounded-lg text-sm font-medium hover:bg-orange-50";
//   const active =
//     "bg-orange-100 text-orange-700 border border-orange-200 hover:bg-orange-100";

//   return (
//     <MainLayout>
//       <div className="max-w-7xl mx-auto px-4 py-8">
//         <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6">
//           {/* Sidebar */}
//           <aside className="bg-white rounded-xl shadow border border-orange-100 p-4 h-max sticky top-24">
//             <div className="mb-3">
//               <div className="text-xs uppercase tracking-wide text-gray-500">
//                 Administration
//               </div>
//             </div>
//             <nav className="space-y-1">
//               <NavLink
//                 to="/admin"
//                 end
//                 className={({ isActive }) =>
//                   `${navItem} ${isActive ? active : "text-gray-700"}`
//                 }
//               >
//                 📊 Dashboard
//               </NavLink>
//               <NavLink
//                 to="/admin/users"
//                 className={({ isActive }) =>
//                   `${navItem} ${isActive ? active : "text-gray-700"}`
//                 }
//               >
//                 👥 Utilisateurs
//               </NavLink>
//               <NavLink
//                 to="/admin/ads"
//                 className={({ isActive }) =>
//                   `${navItem} ${isActive ? active : "text-gray-700"}`
//                 }
//               >
//                 🛍️ Annonces
//               </NavLink>
//               <NavLink
//                 to="/admin/shops"
//                 className={({ isActive }) =>
//                   `${navItem} ${isActive ? active : "text-gray-700"}`
//                 }
//               >
//                 🏪 Boutiques
//               </NavLink>
//               <NavLink
//                 to="/admin/reports"
//                 className={({ isActive }) =>
//                   `${navItem} ${isActive ? active : "text-gray-700"}`
//                 }
//               >
//                 🧾 Signalements
//               </NavLink>
//             </nav>
//           </aside>

//           {/* Zone de contenu admin */}
//           <main>{children}</main>
//         </div>
//       </div>
//     </MainLayout>
//   );
// }


// AdminLayout indépendant (sans MainLayout)
import { NavLink } from "react-router-dom";

export default function AdminLayout({ children }) {
  const link =
    "block px-3 py-2 rounded-lg text-sm font-medium hover:bg-orange-50";
  const active =
    "bg-orange-100 text-orange-700 border border-orange-200 hover:bg-orange-100";

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Topbar Admin */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500 text-white font-bold">
              AD
            </span>
            <span className="font-semibold">Mini Market — Admin</span>
          </div>
          <a
            href="/"
            className="text-sm px-3 py-1.5 rounded-lg border border-orange-500 hover:bg-orange-50"
          >
            ← Retour au site
          </a>
        </div>
      </header>

      {/* Contenu */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6">
        {/* Sidebar */}
        <aside className="bg-white rounded-xl shadow border border-orange-500 p-4 h-max md:sticky md:top-20">
          <div className="text-xs uppercase tracking-wide text-gray-500 mb-2">
            Navigation
          </div>
          <nav className="space-y-1">
            <NavLink to="/admin" end className={({isActive}) => `${link} ${isActive?active:"text-gray-700"}`}>📊 Dashboard</NavLink>
            <NavLink to="/admin/users" className={({isActive}) => `${link} ${isActive?active:"text-gray-700"}`}>👥 Utilisateurs</NavLink>
            <NavLink to="/admin/ads" className={({isActive}) => `${link} ${isActive?active:"text-gray-700"}`}>🛍️ Annonces</NavLink>
            <NavLink to="/admin/shops" className={({isActive}) => `${link} ${isActive?active:"text-gray-700"}`}>🏪 Boutiques</NavLink>
            <NavLink to="/admin/reports" className={({isActive}) => `${link} ${isActive?active:"text-gray-700"}`}>🧾 Signalements</NavLink>
          </nav>
        </aside>

        {/* Zone principale */}
        <main>{children}</main>
      </div>
    </div>
  );
}