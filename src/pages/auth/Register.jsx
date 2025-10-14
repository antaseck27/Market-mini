import { Link } from "react-router-dom";

export default function Register(){
  return (
    <>
      <h1 className="text-2xl font-bold mb-4 text-center">Créer un compte</h1>
      <form className="grid gap-4">
        <input className="w-full rounded-xl border border-gray-200 px-4 py-2.5 outline-none focus:ring-2 focus:ring-brand-orange" placeholder="Adresse e-mail" />
        <input className="w-full rounded-xl border border-gray-200 px-4 py-2.5 outline-none focus:ring-2 focus:ring-brand-orange" placeholder="Mot de passe" type="password" />
        <button className="inline-flex items-center justify-center w-full rounded-xl bg-brand-orange text-white py-2.5 font-medium hover:opacity-90 transition">
          S’inscrire
        </button>
      </form>
      <p className="text-sm text-gray-600 mt-4 text-center">
        Déjà un compte ? <Link className="text-brand-orange font-medium" to="/login">Se connecter</Link>
      </p>
    </>
  );
}
