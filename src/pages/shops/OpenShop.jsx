// src/pages/shops/OpenShop.jsx
import { useState } from "react";

const CATEGORIES = [
  "Mobile",
  "Electronics",
  "Cosmetics",
  "Furniture",
  "Watches",
  "Decor",
  "Accessories",
  "Services",
];

export default function OpenShop() {
  const [form, setForm] = useState({
    name: "",
    slug: "",
    description: "",
    category: "",
    city: "",
    address: "",
    phone: "",
    whatsapp: "",
    email: "",
    website: "",
    facebook: "",
    instagram: "",
    delivery: "no",      // no | local | nationwide
  
    logo: null,
    cover: null,
    terms: false,
  });

  const [err, setErr] = useState("");
  const [ok, setOk] = useState("");

  const update = (key, val) => setForm((f) => ({ ...f, [key]: val }));

  const handleFile = (key, file) => {
    if (!file) return;
    // (tu pluggeras Firebase Storage plus tard)
    update(key, file);
  };

  const genSlug = (s) =>
    s
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^\w\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");

  const onSubmit = async (e) => {
    e.preventDefault();
    setErr(""); setOk("");

    // validations simples
    if (!form.name || !form.category || !form.city || !form.phone) {
      setErr("Merci de renseigner au minimum : Nom, Catégorie, Ville, Téléphone.");
      return;
    }
    if (!form.terms) {
      setErr("Vous devez accepter les conditions d’utilisation.");
      return;
    }

    // Simule une sauvegarde (tu pluggeras Firestore ici)
    await new Promise((r) => setTimeout(r, 700));
    setOk("Votre boutique a été créée. Vous pourrez ajouter des produits ensuite.");
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <header className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-orange-600">
          Ouvrir une boutique
        </h1>
        <p className="text-gray-600">
          Renseignez les informations ci-dessous pour créer votre espace vendeur.
        </p>
      </header>

      <form
        onSubmit={onSubmit}
        className="bg-white rounded-2xl shadow-[0_10px_35px_rgba(255,122,0,0.10)] border border-orange-200/60 p-6 grid gap-6"
      >
        {/* Identité */}
        <section>
          <h2 className="text-lg font-semibold mb-3">Identité de la boutique</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Nom de la boutique *</label>
              <input
                className="w-full rounded-xl border border-orange-200/70 px-4 py-2.5 focus:ring-2 focus:ring-orange-500"
                placeholder="Ex : Boutique Ndaw"
                value={form.name}
                onChange={(e) => {
                  const name = e.target.value;
                  update("name", name);
                  if (!form.slug) update("slug", genSlug(name));
                }}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Identifiant (URL) <span className="text-xs text-gray-500">(optionnel)</span>
              </label>
              <input
                className="w-full rounded-xl border border-orange-200/70 px-4 py-2.5 focus:ring-2 focus:ring-orange-500"
                placeholder="ex: boutique-ndaw"
                value={form.slug}
                onChange={(e) => update("slug", genSlug(e.target.value))}
              />
              <p className="text-xs text-gray-500 mt-1">Votre URL : /shops/{form.slug || "mon-shop"}</p>
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              rows={4}
              className="w-full rounded-xl border border-orange-200/70 px-4 py-2.5 focus:ring-2 focus:ring-orange-500"
              placeholder="Décrivez votre activité, vos produits, vos services..."
              value={form.description}
              onChange={(e) => update("description", e.target.value)}
            />
          </div>
        </section>

        {/* Catégorie & localisation */}
        <section>
          <h2 className="text-lg font-semibold mb-3">Catégorie & Localisation</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Catégorie principale *</label>
              <select
                className="w-full rounded-xl border border-orange-200/70 px-4 py-2.5 focus:ring-2 focus:ring-orange-500"
                value={form.category}
                onChange={(e) => update("category", e.target.value)}
              >
                <option value="">-- Choisir --</option>
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Ville *</label>
              <input
                className="w-full rounded-xl border border-orange-200/70 px-4 py-2.5 focus:ring-2 focus:ring-orange-500"
                placeholder="Ex : Dakar"
                value={form.city}
                onChange={(e) => update("city", e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Adresse</label>
              <input
                className="w-full rounded-xl border border-orange-200/70 px-4 py-2.5 focus:ring-2 focus:ring-orange-500"
                placeholder="Quartier, rue, etc."
                value={form.address}
                onChange={(e) => update("address", e.target.value)}
              />
            </div>
          </div>
        </section>

        {/* Contacts */}
        <section>
          <h2 className="text-lg font-semibold mb-3">Contacts</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Téléphone *</label>
              <input
                className="w-full rounded-xl border border-orange-200/70 px-4 py-2.5 focus:ring-2 focus:ring-orange-500"
                placeholder="+221 77 000 00 00"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">WhatsApp</label>
              <input
                className="w-full rounded-xl border border-orange-200/70 px-4 py-2.5 focus:ring-2 focus:ring-orange-500"
                placeholder="+221 77 000 00 00"
                value={form.whatsapp}
                onChange={(e) => update("whatsapp", e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full rounded-xl border border-orange-200/70 px-4 py-2.5 focus:ring-2 focus:ring-orange-500"
                placeholder="contact@boutique.sn"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div>
              <label className="block text-sm font-medium mb-1">Site web</label>
              <input
                className="w-full rounded-xl border border-orange-200/70 px-4 py-2.5 focus:ring-2 focus:ring-orange-500"
                placeholder="https://"
                value={form.website}
                onChange={(e) => update("website", e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Facebook</label>
              <input
                className="w-full rounded-xl border border-orange-200/70 px-4 py-2.5 focus:ring-2 focus:ring-orange-500"
                placeholder="https://facebook.com/..."
                value={form.facebook}
                onChange={(e) => update("facebook", e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Instagram</label>
              <input
                className="w-full rounded-xl border border-orange-200/70 px-4 py-2.5 focus:ring-2 focus:ring-orange-500"
                placeholder="https://instagram.com/..."
                value={form.instagram}
                onChange={(e) => update("instagram", e.target.value)}
              />
            </div>
          </div>
        </section>

        {/* Livraison & Horaires */}
        <section>
          <h2 className="text-lg font-semibold mb-3">Livraison & Horaires</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Livraison</label>
              <select
                className="w-full rounded-xl border border-orange-200/70 px-4 py-2.5 focus:ring-2 focus:ring-orange-500"
                value={form.delivery}
                onChange={(e) => update("delivery", e.target.value)}
              >
                <option value="no">Pas de livraison</option>
                <option value="local">Livraison locale</option>
                <option value="nationwide">Livraison nationale</option>
              </select>
            </div>

            {/* Horaires simple (tu pourras faire un composant plus tard) */}
            <div className="rounded-xl border border-orange-200/70 p-3">
              <div className="text-sm font-medium mb-2">Horaires (simplifiés)</div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {Object.entries(form.hours).map(([day, v]) => (
                  <div key={day} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={v.on}
                      onChange={(e) =>
                        setForm((f) => ({
                          ...f,
                          hours: {
                            ...f.hours,
                            [day]: { ...v, on: e.target.checked },
                          },
                        }))
                      }
                    />
                    <span className="w-10 capitalize">{day}</span>
                    <input
                      type="time"
                      className="border rounded px-2 py-1"
                      value={v.open}
                      onChange={(e) =>
                        setForm((f) => ({
                          ...f,
                          hours: {
                            ...f.hours,
                            [day]: { ...v, open: e.target.value },
                          },
                        }))
                      }
                    />
                    <span>-</span>
                    <input
                      type="time"
                      className="border rounded px-2 py-1"
                      value={v.close}
                      onChange={(e) =>
                        setForm((f) => ({
                          ...f,
                          hours: {
                            ...f.hours,
                            [day]: { ...v, close: e.target.value },
                          },
                        }))
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Médias */}
        <section>
          <h2 className="text-lg font-semibold mb-3">Visuels</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Logo</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFile("logo", e.target.files?.[0] || null)}
                className="block w-full text-sm"
              />
              <p className="text-xs text-gray-500 mt-1">PNG/JPG, 512×512 recommandé.</p>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Bannière (cover)</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFile("cover", e.target.files?.[0] || null)}
                className="block w-full text-sm"
              />
              <p className="text-xs text-gray-500 mt-1">1600×500 recommandé.</p>
            </div>
          </div>
        </section>

        {/* Conditions */}
        <section className="flex items-start gap-3">
          <input
            id="terms"
            type="checkbox"
            checked={form.terms}
            onChange={(e) => update("terms", e.target.checked)}
            className="mt-1"
          />
          <label htmlFor="terms" className="text-sm text-gray-700">
            J’accepte les conditions d’utilisation et la politique de confidentialité.
          </label>
        </section>

        {/* Messages */}
        {err && (
          <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
            {err}
          </p>
        )}
        {ok && (
          <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg px-3 py-2">
            {ok}
          </p>
        )}

        {/* CTA */}
        <div className="pt-2">
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-xl bg-orange-500 text-white px-6 py-3 font-medium hover:opacity-90"
          >
            Créer ma boutique
          </button>
        </div>
      </form>
    </div>
  );
}