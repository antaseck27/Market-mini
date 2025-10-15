
// // src/pages/auth/Login.jsx
// import { useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../firebase";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [pwd, setPwd] = useState("");
//   const [showPwd, setShowPwd] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [err, setErr] = useState("");

//   const nav = useNavigate();
//   const loc = useLocation();
//   const from = loc.state?.from?.pathname || "/";

//   const mapFirebaseError = (code) => {
//     switch (code) {
//       case "auth/invalid-email":
//         return "Adresse e-mail invalide.";
//       case "auth/user-disabled":
//         return "Ce compte a été désactivé.";
//       case "auth/user-not-found":
//         return "Aucun compte ne correspond à cet e-mail.";
//       case "auth/wrong-password":
//         return "Mot de passe incorrect.";
//       case "auth/too-many-requests":
//         return "Trop de tentatives, réessayez plus tard.";
//       default:
//         return "Connexion impossible. Réessayez.";
//     }
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     setErr("");
//     setLoading(true);
//     try {
//       await signInWithEmailAndPassword(auth, email.trim(), pwd);
//       nav(from, { replace: true });
//     } catch (e) {
//       setErr(mapFirebaseError(e.code));
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
//       <div className="w-full max-w-2xl">
//         {/* Carte */}
//         <div className="bg-white rounded-2xl shadow-[0_10px_35px_rgba(255,122,0,0.10)] border border-orange-200/70 p-8">
//           {/* Titre */}
//           <div className="text-center mb-6">
//             <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500 text-white font-extrabold">
//               MM
//             </div>
//             <h1 className="text-2xl sm:text-3xl font-bold">Se connecter</h1>
//             <p className="text-gray-600 mt-1 text-sm">
//               Accédez à votre compte Mini Marketplace.
//             </p>
//           </div>

//           {/* Formulaire */}
//           <form onSubmit={onSubmit} className="grid gap-4">
//             <div>
//               <label className="block text-sm font-medium mb-1">Adresse e-mail</label>
//               <input
//                 type="email"
//                 placeholder="votre@email.com"
//                 className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-orange-500"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 autoComplete="email"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1">Mot de passe</label>
//               <div className="relative">
//                 <input
//                   type={showPwd ? "text" : "password"}
//                   placeholder="Votre mot de passe"
//                   className="w-full rounded-xl border border-gray-200 px-4 py-3 pr-12 focus:ring-2 focus:ring-orange-500"
//                   value={pwd}
//                   onChange={(e) => setPwd(e.target.value)}
//                   autoComplete="current-password"
//                   required
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPwd((v) => !v)}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
//                   aria-label={showPwd ? "Masquer le mot de passe" : "Afficher le mot de passe"}
//                 >
//                   {showPwd ? "°" : "°"}
//                 </button>
//               </div>
//             </div>

//             {err && (
//               <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
//                 {err}
//               </div>
//             )}

//             <div className="flex items-center justify-between text-sm">
//               <div className="flex items-center gap-2">
//                 <input id="remember" type="checkbox" className="rounded" />
//                 <label htmlFor="remember" className="text-gray-700">
//                   Se souvenir de moi
//                 </label>
//               </div>
//               <Link to="/reset" className="text-orange-600 hover:underline">
//                 Mot de passe oublié ?
//               </Link>
//             </div>

//             <button
//               type="submit"
//               disabled={loading}
//               className="mt-2 inline-flex items-center justify-center rounded-xl bg-orange-500 text-white px-6 py-3 font-medium hover:opacity-90 disabled:opacity-60"
//             >
//               {loading ? "Connexion…" : "Se connecter"}
//             </button>
//           </form>

//           {/* Lien d'inscription */}
//           <div className="text-sm text-gray-600 mt-6 text-center">
//             Pas encore de compte ?{" "}
//             <Link to="/register" className="text-orange-600 font-medium hover:underline">
//               Créer un compte
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// src/pages/auth/Login.jsx
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const nav = useNavigate();
  const loc = useLocation();
  const from = loc.state?.from?.pathname || "/";

  const mapErr = (code) => {
    switch (code) {
      case "auth/invalid-email": return "Adresse e-mail invalide.";
      case "auth/user-disabled": return "Ce compte a été désactivé.";
      case "auth/user-not-found": return "Aucun compte ne correspond à cet e-mail.";
      case "auth/wrong-password": return "Mot de passe incorrect.";
      case "auth/too-many-requests": return "Trop de tentatives, réessayez plus tard.";
      default: return "Connexion impossible. Réessayez.";
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setErr(""); setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email.trim(), pwd);
      nav(from, { replace: true });
    } catch (e) {
      setErr(mapErr(e.code));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl">
        <div className="bg-white rounded-2xl shadow-[0_10px_35px_rgba(255,122,0,0.10)] border border-orange-200/70 p-8">
          <div className="text-center mb-6">
            <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500 text-white font-extrabold">MM</div>
            <h1 className="text-2xl sm:text-3xl font-bold">Se connecter</h1>
          </div>
          <form onSubmit={onSubmit} className="grid gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Adresse e-mail</label>
              <input type="email" className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-orange-500"
                value={email} onChange={(e)=>setEmail(e.target.value)} autoComplete="email" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Mot de passe</label>
              <div className="relative">
                <input type={showPwd?"text":"password"} className="w-full rounded-xl border border-gray-200 px-4 py-3 pr-12 focus:ring-2 focus:ring-orange-500"
                  value={pwd} onChange={(e)=>setPwd(e.target.value)} autoComplete="current-password" required />
                <button type="button" onClick={()=>setShowPwd(v=>!v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700">
                  {showPwd ? "°" : "-"}
                </button>
              </div>
            </div>
            {err && <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">{err}</div>}
            <button type="submit" disabled={loading}
              className="mt-2 inline-flex items-center justify-center rounded-xl bg-orange-500 text-white px-6 py-3 font-medium hover:opacity-90 disabled:opacity-60">
              {loading ? "Connexion…" : "Se connecter"}
            </button>
          </form>
          <div className="text-sm text-gray-600 mt-6 text-center">
            Pas encore de compte ? <Link to="/register" className="text-orange-600 font-medium hover:underline">Créer un compte</Link>
          </div>
        </div>
      </div>
    </div>
  );
}