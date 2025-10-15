// src/pages/account/Account.jsx
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { useUserDoc } from "../../hooks/useUserDoc";

export default function Account() {
  const { user, me, loading } = useUserDoc();
  const nav = useNavigate();

  const initialName = useMemo(
    () => me?.name || user?.displayName || user?.email?.split("@")[0] || "",
    [me, user]
  );

  const [name, setName] = useState(initialName);
  const [role, setRole] = useState(me?.role || "buyer"); // miroir Firestore
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");

  useEffect(() => {
    if (!loading && !user) nav("/login", { replace: true });
  }, [loading, user, nav]);

  useEffect(() => {
    setName(initialName);
  }, [initialName]);

  useEffect(() => {
    if (me?.role) setRole(me.role);
  }, [me?.role]);

  if (loading || !user) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="animate-pulse h-6 w-40 bg-gray-200 rounded mb-4" />
        <div className="animate-pulse h-32 w-full bg-gray-100 rounded-xl" />
      </div>
    );
  }

  const displayEmail = user.email || "—";
  const avatar = (name?.[0] || displayEmail?.[0] || "U").toUpperCase();

  const onSave = async (e) => {
    e.preventDefault();
    setErr("");
    setMsg("");
    if (!name.trim()) {
      setErr("Le nom ne peut pas être vide.");
      return;
    }
    setSaving(true);
    try {
      // 1) Mettre à jour le displayName (Firebase Auth)
      await updateProfile(user, { displayName: name.trim() });
      // 2) Mettre à jour le doc Firestore de l'utilisateur
      const ref = doc(db, "users", user.uid);
      const payload = { name: name.trim() };

      // Seul un admin peut changer son rôle (pour lui-même)
      if (me?.role === "admin" && role) {
        payload.role = role;
      }

      await updateDoc(ref, payload);
      setMsg("Profil mis à jour avec succès.");
    } catch (e) {
      setErr("Impossible de mettre à jour le profil pour le moment.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <header className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-orange-600">Mon compte</h1>
        <p className="text-gray-600">Gérez vos informations personnelles.</p>
      </header>

      {/* carte profil */}
      <div className="bg-white rounded-2xl shadow-[0_10px_35px_rgba(255,122,0,0.08)] border border-orange-200/60 p-6">
        {/* En-tête utilisateur */}
        <div className="flex items-center gap-4 pb-5 border-b border-orange-100/60">
          <div className="h-12 w-12 rounded-full bg-orange-500/10 text-orange-600 font-bold grid place-items-center">
            {avatar}
          </div>
          <div>
            <div className="text-lg font-semibold">{initialName}</div>
            <div className="text-sm text-gray-600">{displayEmail}</div>
            <div className="text-xs mt-1">
              <span className="inline-flex items-center rounded-full bg-orange-100 text-orange-700 px-2 py-0.5">
                Rôle : {me?.role || "buyer"}
              </span>
            </div>
          </div>
        </div>

        {/* Formulaire */}
        <form onSubmit={onSave} className="pt-6 grid gap-5">
          <div>
            <label className="block text-sm font-medium mb-1">Nom complet</label>
            <input
              className="w-full rounded-xl border border-orange-200/70 px-4 py-2.5 focus:ring-2 focus:ring-orange-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ex : Anta Seck"
            />
          </div>

          {/* Changement de rôle — visible uniquement pour admin */}
          {me?.role === "admin" && (
            <div>
              <label className="block text-sm font-medium mb-1">Rôle (admin seulement)</label>
              <select
                className="w-full rounded-xl border border-orange-200/70 px-4 py-2.5 focus:ring-2 focus:ring-orange-500"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="buyer">Acheteur</option>
                <option value="seller">Vendeur</option>
                <option value="admin">Admin</option>
              </select>
              <p className="text-xs text-gray-500 mt-1">
                ⚠️ Changer ce rôle affecte vos autorisations dans l’application.
              </p>
            </div>
          )}

          {/* messages */}
          {err && (
            <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
              {err}
            </div>
          )}
          {msg && (
            <div className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg px-3 py-2">
              {msg}
            </div>
          )}

          <div className="pt-1">
            <button
              type="submit"
              disabled={saving}
              className="inline-flex items-center justify-center rounded-xl bg-orange-500 text-white px-6 py-3 font-medium hover:opacity-90 disabled:opacity-60"
            >
              {saving ? "Sauvegarde…" : "Enregistrer les modifications"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}