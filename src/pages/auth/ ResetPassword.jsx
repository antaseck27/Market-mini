// src/pages/auth/ResetPassword.jsx
import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [ok, setOk] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setErr(""); setOk(""); setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email.trim(), {
        // URL de retour après clic sur l’email (doit être dans “Domaines autorisés”)
        url: `${window.location.origin}/reset/confirm`,
        handleCodeInApp: true,
      });
      setOk("Un e-mail de réinitialisation a été envoyé.");
    } catch (e) {
      setErr("Impossible d’envoyer l’e-mail. Vérifiez l’adresse.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-white rounded-2xl border border-orange-200 shadow-[0_10px_35px_rgba(255,122,0,0.10)] p-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">Réinitialiser le mot de passe</h1>
        <form onSubmit={onSubmit} className="grid gap-4">
          <label className="text-sm font-medium">Adresse e-mail</label>
          <input
            type="email"
            className="rounded-xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-orange-500"
            value={email} onChange={(e)=>setEmail(e.target.value)} required
          />
          {ok && <p className="text-green-700 bg-green-50 border border-green-200 rounded-lg px-3 py-2 text-sm">{ok}</p>}
          {err && <p className="text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2 text-sm">{err}</p>}
          <button disabled={loading} className="rounded-xl bg-orange-500 text-white px-6 py-3 font-medium hover:opacity-90 disabled:opacity-60">
            {loading ? "Envoi…" : "Envoyer le lien"}
          </button>
        </form>
      </div>
    </div>
  );
}


// /// src/pages/auth/ResetPassword.jsx
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { sendPasswordResetEmail } from "firebase/auth";
// import { auth } from "../../firebase";

// export default function ResetPassword() {
//   const [email, setEmail] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [err, setErr] = useState("");
//   const [done, setDone] = useState(false);

//   const mapErr = (code) => {
//     switch (code) {
//       case "auth/invalid-email": return "Adresse e-mail invalide.";
//       case "auth/user-not-found": return "Aucun compte ne correspond à cet e-mail.";
//       case "auth/too-many-requests": return "Trop de tentatives. Réessayez plus tard.";
//       default: return "Impossible d’envoyer l’e-mail. Réessayez.";
//     }
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     setErr("");
//     setDone(false);
//     setLoading(true);
//     try {
//       await sendPasswordResetEmail(auth, email.trim());
//       setDone(true);
//     } catch (e) {
//       setErr(mapErr(e.code));
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
//       <div className="w-full max-w-2xl">
//         <div className="bg-white rounded-2xl shadow-[0_10px_35px_rgba(255,122,0,0.10)] border border-orange-200/70 p-8">
//           <div className="text-center mb-6">
//             <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500 text-white font-extrabold">
//               MM
//             </div>
//             <h1 className="text-2xl sm:text-3xl font-bold">Réinitialiser le mot de passe</h1>
//             <p className="text-gray-600 mt-1 text-sm">
//               Saisis l’adresse e-mail de ton compte. Nous t’enverrons un lien.
//             </p>
//           </div>

//           <form onSubmit={onSubmit} className="grid gap-4">
//             <div>
//               <label className="block text-sm font-medium mb-1">Adresse e-mail</label>
//               <input
//                 type="email"
//                 className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-orange-500"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 autoComplete="email"
//                 required
//               />
//             </div>

//             {err && (
//               <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
//                 {err}
//               </div>
//             )}

//             {done && (
//               <div className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg px-3 py-2">
//                 E-mail envoyé. Vérifie ta boîte de réception et les spams.
//               </div>
//             )}

//             <button
//               type="submit"
//               disabled={loading}
//               className="mt-2 inline-flex items-center justify-center rounded-xl bg-orange-500 text-white px-6 py-3 font-medium hover:opacity-90 disabled:opacity-60"
//             >
//               {loading ? "Envoi en cours…" : "Envoyer le lien de réinitialisation"}
//             </button>
//           </form>

//           <div className="text-sm text-gray-600 mt-6 text-center">
//             <Link to="/login" className="text-orange-600 font-medium hover:underline">
//               Retour à la connexion
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }