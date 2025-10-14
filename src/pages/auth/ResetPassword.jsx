import { useState } from "react";
import { Link } from "react-router-dom";
// import { sendPasswordResetEmail } from "firebase/auth";
// import { auth } from "../../firebase";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    setErr("");
    setLoading(true);

    try {
      // await sendPasswordResetEmail(auth, email);
      await new Promise((r) => setTimeout(r, 1000)); // simulation
      setMsg("Un lien de réinitialisation a été envoyé à votre adresse e-mail.");
    } catch (error) {
      setErr("Impossible d’envoyer le lien. Vérifiez votre adresse e-mail.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-orange-100 px-4">
      <div className="w-full max-w-lg bg-white/95 backdrop-blur-sm rounded-2xl shadow-[0_10px_35px_rgba(255,122,0,0.15)] border border-orange-200/70 p-10">
        <h1 className="text-3xl font-extrabold text-center mb-8 text-gray-800">
          Réinitialiser le mot de passe
        </h1>

        <form onSubmit={handleSubmit} className="grid gap-5">
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
            />
          </div>

          {msg && (
            <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg px-3 py-2">
              {msg}
            </p>
          )}
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
            {loading ? "Envoi en cours..." : "Envoyer le lien"}
          </button>
        </form>

        <p className="text-sm text-center text-gray-700 mt-6">
          <Link to="/login" className="text-orange-600 font-medium hover:underline">
            Revenir à la connexion
          </Link>
        </p>
      </div>
    </div>
  );
}