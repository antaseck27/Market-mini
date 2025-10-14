// import { Link } from "react-router-dom";

// export default function Register(){
//   return (
//     <>
//       <h1 className="text-2xl font-bold mb-4 text-center">Créer un compte</h1>
//       <form className="grid gap-4">
//         <input className="w-full rounded-xl border border-gray-200 px-4 py-2.5 outline-none focus:ring-2 focus:ring-brand-orange" placeholder="Adresse e-mail" />
//         <input className="w-full rounded-xl border border-gray-200 px-4 py-2.5 outline-none focus:ring-2 focus:ring-brand-orange" placeholder="Mot de passe" type="password" />
//         <button className="inline-flex items-center justify-center w-full rounded-xl bg-brand-orange text-white py-2.5 font-medium hover:opacity-90 transition">
//           S’inscrire
//         </button>
//       </form>
//       <p className="text-sm text-gray-600 mt-4 text-center">
//         Déjà un compte ? <Link className="text-brand-orange font-medium" to="/login">Se connecter</Link>
//       </p>
//     </>
//   );
// }
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { doc, setDoc, serverTimestamp } from "firebase/firestore";
// import { auth, db } from "../../firebase";

export default function Register() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [role, setRole] = useState("buyer");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const nav = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    setErr("");
    setLoading(true);

    try {
      // const cred = await createUserWithEmailAndPassword(auth, email, pwd);
      // await setDoc(doc(db, "users", cred.user.uid), {
      //   email,
      //   role,
      //   createdAt: serverTimestamp(),
      // });

      await new Promise((r) => setTimeout(r, 600)); // simulation
      nav("/");
    } catch (e) {
      setErr("Inscription impossible. Vérifie tes informations.");
    } finally {
      setLoading(false);
    }
  };

  return (
    // <div className="max-w-lg flex items-center justify-center  px-4">
    //   <div className="w-full max-w-lg bg-white/95 backdrop-blur-sm rounded-2xl shadow-[0_15px_35px_rgba(255,122,0,0.15)] border border-orange-200/70 p-10">
    //     <h1 className="text-3xl font-extrabold text-center mb-8 text-gray-800">
    <div className="max-w-lg flex items-center justify-center  px-4">
    <div className="w-full max-w-lg bg-white/95 backdrop-blur-sm rounded-2xl shadow-[0_10px_35px_rgba(255,122,0,0.15)] border border-orange-200/70 p-10">
      <h1 className="text-3xl font-extrabold text-center mb-8 text-gray-800">
          Créer un compte
        </h1>

        {/* Sélecteur de rôle */}
        <div className="mb-6">
          <div className="text-sm font-medium text-gray-700 mb-3">
            Je suis :
          </div>
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setRole("buyer")}
              className={`rounded-xl border px-5 py-3 text-sm font-medium transition-all duration-200
                ${
                  role === "buyer"
                    ? "border-orange-500 bg-orange-50 text-orange-600 shadow-[0_6px_18px_rgba(255,122,0,0.15)]"
                    : "border-gray-200 hover:border-orange-300 hover:bg-orange-50/40"
                }`}
            >
              👤 Acheteur
            </button>
            <button
              type="button"
              onClick={() => setRole("seller")}
              className={`rounded-xl border px-5 py-3 text-sm font-medium transition-all duration-200
                ${
                  role === "seller"
                    ? "border-orange-500 bg-orange-50 text-orange-600 shadow-[0_6px_18px_rgba(255,122,0,0.15)]"
                    : "border-gray-200 hover:border-orange-300 hover:bg-orange-50/40"
                }`}
            >
              🛍️ Vendeur
            </button>
          </div>
          <p className="mt-2 text-xs text-gray-500">
            • Acheteur : pour naviguer et acheter. <br />• Vendeur : pour publier et gérer une boutique.
          </p>
        </div>

        <form onSubmit={onSubmit} className="grid gap-5">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Adresse e-mail
            </label>
            <input
              className="w-full rounded-xl border border-orange-200/70 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500 placeholder:text-gray-400 text-gray-700"
              placeholder="ex: nom@mail.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Mot de passe
            </label>
            <input
              className="w-full rounded-xl border border-orange-200/70 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500 placeholder:text-gray-400 text-gray-700"
              placeholder="••••••••"
              type="password"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              required
              minLength={6}
            />
            <p className="mt-1 text-xs text-gray-500">6 caractères minimum.</p>
          </div>

          {err && (
            <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
              {err}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center rounded-xl bg-orange-500 text-white px-6 py-3 font-medium hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Création en cours..." : "Créer mon compte"}
          </button>
        </form>

        <p className="text-sm text-center text-gray-700 mt-6">
          Déjà un compte ?{" "}
          <Link
            className="text-orange-600 font-medium hover:underline"
            to="/login"
          >
            Se connecter
          </Link>
        </p>
      </div>
    </div>
  );
}