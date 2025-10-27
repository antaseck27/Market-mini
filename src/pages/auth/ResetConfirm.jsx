// src/pages/auth/ResetConfirm.jsx
import { useEffect, useState } from "react";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { verifyPasswordResetCode, confirmPasswordReset, signInWithEmailAndPassword } from "firebase/auth";

export default function ResetConfirm() {
  const [sp] = useSearchParams();
  const nav = useNavigate();
  const oobCode = sp.get("oobCode");
  const mode = sp.get("mode"); // juste pour info
  const [email, setEmail] = useState("");
  const [pwd1, setPwd1] = useState("");
  const [pwd2, setPwd2] = useState("");
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [ok, setOk] = useState("");

  useEffect(() => {
    let mounted = true;
    const check = async () => {
      try {
        if (!oobCode) throw new Error("Lien invalide.");
        const em = await verifyPasswordResetCode(auth, oobCode);
        if (mounted) { setEmail(em); setLoading(false); }
      } catch (e) {
        setErr("Lien expiré ou invalide. Redemandez un e-mail.");
        setLoading(false);
      }
    };
    check();
    return () => { mounted = false; };
  }, [oobCode]);

  const onSubmit = async (e) => {
    e.preventDefault();
    setErr(""); setOk("");
    if (pwd1.length < 6) return setErr("Le mot de passe doit contenir au moins 6 caractères.");
    if (pwd1 !== pwd2) return setErr("Les mots de passe ne correspondent pas.");
    try {
      await confirmPasswordReset(auth, oobCode, pwd1);
      setOk("Mot de passe réinitialisé avec succès.");
      // Optionnel: connexion auto puis redirection
      try {
        await signInWithEmailAndPassword(auth, email, pwd1);
        nav("/login", { replace: true });
      } catch {
        nav("/login", { replace: true });
      }
    } catch {
      setErr("Impossible d’appliquer le nouveau mot de passe. Lien expiré ?");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-white rounded-2xl border border-orange-200 shadow-[0_10px_35px_rgba(255,122,0,0.10)] p-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">Nouveau mot de passe</h1>

        {loading ? (
          <p className="text-center text-gray-600">Vérification du lien…</p>
        ) : err ? (
          <div className="text-center">
            <p className="text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2 inline-block">{err}</p>
            <div className="mt-4"><Link className="text-orange-600 font-medium hover:underline" to="/reset">Demander un nouveau lien</Link></div>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="grid gap-4">
            <div>
              <label className="text-sm font-medium">Adresse e-mail</label>
              <input disabled value={email} className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3" />
            </div>
            <div>
              <label className="text-sm font-medium">Nouveau mot de passe</label>
              <input
                type="password"
                value={pwd1}
                onChange={(e)=>setPwd1(e.target.value)}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-orange-500"
                placeholder="••••••••"
                required
              />
              <p className="text-xs text-gray-500 mt-1">Au moins 6 caractères.</p>
            </div>
            <div>
              <label className="text-sm font-medium">Confirmer le mot de passe</label>
              <input
                type="password"
                value={pwd2}
                onChange={(e)=>setPwd2(e.target.value)}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-orange-500"
                placeholder="••••••••"
                required
              />
            </div>

            {ok && <p className="text-green-700 bg-green-50 border border-green-200 rounded-lg px-3 py-2 text-sm">{ok}</p>}
            {err && !loading && <p className="text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2 text-sm">{err}</p>}

            <button className="mt-2 rounded-xl bg-orange-500 text-white px-6 py-3 font-medium hover:opacity-90">
              Valider le nouveau mot de passe
            </button>
          </form>
        )}
      </div>
    </div>
  );
}