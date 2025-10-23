
// src/pages/auth/Register.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../../firebase";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [role, setRole] = useState("acheteur"); // buyer | seller
  const [terms, setTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const nav = useNavigate();

  const mapErr = (code) => {
    switch (code) {
      case "auth/email-already-in-use": return "Cet e-mail est déjà utilisé.";
      case "auth/invalid-email": return "Adresse e-mail invalide.";
      case "auth/weak-password": return "Mot de passe trop faible (6+).";
      default: return "Inscription impossible. Réessaie.";
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setErr("");
    if (!terms) { setErr("Vous devez accepter les conditions."); return; }
    setLoading(true);
    try {
      // 1) Création Auth
      const cred = await createUserWithEmailAndPassword(auth, email.trim(), pwd);
      // 2) Maj displayName (Firebase Auth)
      await updateProfile(cred.user, { displayName: name.trim() });
      // 3) Profil Firestore
      await setDoc(doc(db, "users", cred.user.uid), {
        name: name.trim(),
        email: email.trim(),
        role,
        createdAt: serverTimestamp(),
      });
      nav("/");
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
            <h1 className="text-2xl sm:text-3xl font-bold">Créer un compte</h1>
          </div>

          {/* Rôle */}
          <div className="mb-6">
            <div className="text-sm font-medium mb-2">Je m’inscris en tant que :</div>
            <div className="grid grid-cols-2 gap-2">
              <button type="button" onClick={()=>setRole("acheteur")}
                className={`rounded-xl border px-4 py-2.5 text-sm font-medium transition ${role==="acheteur"?"bg-orange-500 text-white border-orange-500":"border-gray-200 hover:border-orange-300"}`}>
                Acheteur
              </button>
              <button type="button" onClick={()=>setRole("seller")}
                className={`rounded-xl border px-4 py-2.5 text-sm font-medium transition ${role==="seller"?"bg-orange-500 text-white border-orange-500":"border-gray-200 hover:border-orange-300"}`}>
                Vendeur
              </button>
            </div>
          </div>

          <form onSubmit={onSubmit} className="grid gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Nom complet</label>
              <input
                className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-orange-500"
                placeholder="Ex : Anta Seck"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Adresse e-mail</label>
              <input
                type="email"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-orange-500"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                autoComplete="email"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Mot de passe</label>
              <div className="relative">
                <input
                  type={showPwd?"text":"password"}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 pr-12 focus:ring-2 focus:ring-orange-500"
                  value={pwd}
                  onChange={(e)=>setPwd(e.target.value)}
                  autoComplete="new-password"
                  required
                />
                <button type="button" onClick={()=>setShowPwd(v=>!v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700">
                  {showPwd?"°":"-"}
                </button>
              </div>
            </div>

            <label className="flex items-start gap-3 mt-2">
              <input type="checkbox" className="mt-1" checked={terms} onChange={e=>setTerms(e.target.checked)} />
              <span className="text-sm text-gray-700">J’accepte les conditions et la politique de confidentialité.</span>
            </label>

            {err && <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">{err}</div>}

            <button type="submit" disabled={loading}
              className="mt-2 inline-flex items-center justify-center rounded-xl bg-orange-500 text-white px-6 py-3 font-medium hover:opacity-90 disabled:opacity-60">
              {loading ? "Création du compte…" : "Créer mon compte"}
            </button>
          </form>

          <div className="text-sm text-gray-600 mt-6 text-center">
            Déjà un compte ? <Link to="/login" className="text-orange-600 font-medium hover:underline">Se connecter</Link>
          </div>
        </div>
      </div>
    </div>
  );
}