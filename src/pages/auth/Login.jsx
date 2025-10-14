// import { Link } from "react-router-dom";

// export default function Login(){
//   return (
//     <>
//       <h1 className="text-2xl font-bold mb-4 text-center">Connexion</h1>
//       <form className="grid gap-4">
//         <input className="w-full rounded-xl border border-gray-200 px-4 py-2.5 outline-none focus:ring-2 focus:ring-brand-orange" placeholder="Adresse e-mail" />
//         <input className="w-full rounded-xl border border-gray-200 px-4 py-2.5 outline-none focus:ring-2 focus:ring-brand-orange" placeholder="Mot de passe" type="password" />
//         <button className="inline-flex items-center justify-center w-full rounded-xl bg-brand-orange text-white py-2.5 font-medium hover:opacity-90 transition">
//           Se connecter
//         </button>
//       </form>
//       <p className="text-sm text-gray-600 mt-4 text-center">
//         Pas de compte ? <Link className="text-brand-orange font-medium" to="/register">Créer un compte</Link>
//       </p>
//     </>
//   );
// }


import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// 🔐 Décommente quand Firebase sera installé et configuré
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../firebase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const nav = useNavigate();
  const loc = useLocation();
  const from = loc.state?.from?.pathname || "/";

  const onSubmit = async (e) => {
    e.preventDefault();
    setErr("");
    setLoading(true);

    try {
      // 🔐 Version Firebase (quand prêt) :
      // await signInWithEmailAndPassword(auth, email, pwd);

      // 👉 Version sans backend (simulation)
      await new Promise((r) => setTimeout(r, 600));

      nav(from, { replace: true });
    } catch (e) {
      setErr("Identifiants invalides. Merci de réessayer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg flex items-center justify-center  px-4">
      <div className="w-full max-w-lg bg-white/95 backdrop-blur-sm rounded-2xl shadow-[0_10px_35px_rgba(255,122,0,0.15)] border border-orange-200/70 p-10">
        <h1 className="text-3xl font-extrabold text-center mb-8 text-gray-800">
          Se connecter
        </h1>

        <form onSubmit={onSubmit} className="grid gap-5">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Adresse e-mail
            </label>
            <input
              className="w-full rounded-xl border border-orange-200/70 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500 placeholder:text-gray-400 text-gray-700"
              type="email"
              placeholder="ex: nom@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-sm font-medium text-gray-700">
                Mot de passe
              </label>
              <Link
                to="/reset"
                className="text-xs text-orange-600 hover:underline"
              >
                Mot de passe oublié ?
              </Link>
            </div>
            <input
              className="w-full rounded-xl border border-orange-200/70 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500 placeholder:text-gray-400 text-gray-700"
              type="password"
              placeholder="••••••••"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              required
              autoComplete="current-password"
            />
          </div>

          {/* Message d’erreur */}
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
            {loading ? "Connexion..." : "Se connecter"}
          </button>
        </form>

        <p className="text-sm text-center text-gray-700 mt-6">
          Pas encore de compte ?{" "}
          <Link
            to="/register"
            className="text-orange-600 font-medium hover:underline"
          >
            Créer un compte
          </Link>
        </p>
      </div>
    </div>
  );
}