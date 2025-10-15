// // export default function AdminDashboard() {
// //     return (
// //       <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow p-6 border border-orange-200/70">
// //         <h1 className="text-2xl font-bold mb-4">Admin — Tableau de bord</h1>
  
// //         <div className="grid md:grid-cols-3 gap-4 mb-6">
// //           <div className="rounded-xl border border-orange-200/70 p-4 bg-orange-50">
// //             <div className="text-sm text-gray-600">Utilisateurs</div>
// //             <div className="text-2xl font-extrabold">—</div>
// //           </div>
// //           <div className="rounded-xl border border-orange-200/70 p-4 bg-orange-50">
// //             <div className="text-sm text-gray-600">Annonces</div>
// //             <div className="text-2xl font-extrabold">—</div>
// //           </div>
// //           <div className="rounded-xl border border-orange-200/70 p-4 bg-orange-50">
// //             <div className="text-sm text-gray-600">Boutiques</div>
// //             <div className="text-2xl font-extrabold">—</div>
// //           </div>
// //         </div>
  
// //         <div className="rounded-xl border border-gray-200 overflow-x-auto">
// //           <table className="min-w-full text-sm">
// //             <thead className="bg-gray-50 text-gray-700">
// //               <tr>
// //                 <th className="text-left px-4 py-3">Utilisateur</th>
// //                 <th className="text-left px-4 py-3">Email</th>
// //                 <th className="text-left px-4 py-3">Rôle</th>
// //                 <th className="text-left px-4 py-3">Actions</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               <tr className="border-t">
// //                 <td className="px-4 py-3">—</td>
// //                 <td className="px-4 py-3">—</td>
// //                 <td className="px-4 py-3"><span className="inline-flex rounded-full bg-orange-100 text-orange-700 px-2 py-0.5">buyer</span></td>
// //                 <td className="px-4 py-3">
// //                   <button className="text-orange-600 hover:underline">Voir</button>
// //                 </td>
// //               </tr>
// //               {/* Tu rempliras avec des données plus tard */}
// //             </tbody>
// //           </table>
// //         </div>
// //       </div>
// //     );
// //   }


// import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// // Layouts
// import MainLayout from "../../layouts/MainLayout";
// import AuthLayout from "./layouts/AuthLayout";

// // Pages publiques
// import Home from "./pages/Home";
// import NewAd from "./pages/NewAd"; // vendeur
// import AdminDashboard from "./pages/admin/AdminDashboard"; // admin

// // Pages d'auth
// import Login from "./pages/auth/Login";
// import Register from "./pages/auth/Register";
// import ResetPassword from "./pages/auth/ResetPassword";

// export default function App() {
//   const { pathname } = useLocation();
//   const AUTH_ROUTES = ["/login", "/register", "/reset"];
//   const isAuthPage = AUTH_ROUTES.includes(pathname);

//   // Pages d'auth (sans Navbar/Footer)
//   if (isAuthPage) {
//     return (
//       <AuthLayout>
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/reset" element={<ResetPassword />} />
//           <Route path="*" element={<Navigate to="/login" replace />} />
//         </Routes>
//       </AuthLayout>
//     );
//   }

//   // Site principal (avec Navbar, MegaRowNav, Footer via MainLayout)
//   return (
//     <MainLayout>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/nouvelle-annonce" element={<NewAd />} />
//         <Route path="/admin" element={<AdminDashboard />} />

//         {/* fallback */}
//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes>
//     </MainLayout>
//   );
// }


// src/pages/admin/AdminDashboard.jsx
import AdminLayout from "../../layouts/AdminLayout";

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Header */}
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-brand-orange">
              Tableau de bord – Administration
            </h1>
            <p className="text-gray-600">Vue d’ensemble de la plateforme.</p>
          </div>
          <button className="bg-brand-orange text-white px-4 py-2 rounded-lg font-medium hover:opacity-90">
            + Nouvelle action
          </button>
        </header>

        {/* Stats */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            ["Utilisateurs inscrits", "1 254"],
            ["Annonces actives", "387"],
            ["Boutiques vérifiées", "72"],
            ["Demandes en attente", "14"],
          ].map(([label, value], i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow p-5 border border-orange-500 border-brand-orange/70"
            >
              <div className="text-sm text-gray-500">{label}</div>
              <div className="text-2xl font-semibold text-gray-800">{value}</div>
            </div>
          ))}
        </section>

        {/* Cartes de gestion */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            [" Gestion des utilisateurs", "Voir la liste"],
            [" Gestion des annonces", "Gérer les annonces"],
            [" Gestion des boutiques", "Voir les boutiques"],
          ].map(([title, cta], i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-xl shadow border border-orange-500 hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                {title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Actions d’administration rapides.
              </p>
              <button className="w-full bg-brand-orange text-white px-4 py-2 rounded-lg hover:opacity-90">
                {cta}
              </button>
            </div>
          ))}
        </section>

        {/* Historique */}
        <section className="bg-white rounded-xl shadow p-6 border border-orange-500">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
             Activités récentes
          </h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Vendeur “Boutique Ndaw” approuvé.</li>
            <li>Annonce “Samsung Galaxy S24” signalée.</li>
            <li> Nouvel utilisateur : “Awa Diop”.</li>
            <li> Nouveau message de support reçu.</li>
          </ul>
        </section>
      </div>
    </AdminLayout>
  );
}