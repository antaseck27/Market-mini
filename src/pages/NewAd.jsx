export default function NewAd() {
    return (
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow p-6 border border-orange-200/70">
        <h1 className="text-2xl font-bold mb-4">Publier une annonce</h1>
  
        <form className="grid gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Titre</label>
            <input className="w-full rounded-xl border border-gray-200 px-4 py-2.5 focus:ring-2 focus:ring-orange-500"
                   placeholder="Ex: iPhone 13 Pro"
            />
          </div>
  
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Prix (FCFA)</label>
              <input type="number" className="w-full rounded-xl border border-gray-200 px-4 py-2.5 focus:ring-2 focus:ring-orange-500"
                     placeholder="Ex: 350000" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Catégorie</label>
              <select className="w-full rounded-xl border border-gray-200 px-4 py-2.5 focus:ring-2 focus:ring-orange-500">
                <option>Mobile</option>
                <option>Electronics</option>
                <option>Cosmetics</option>
                <option>Furniture</option>
                <option>Watches</option>
                <option>Decor</option>
                <option>Accessories</option>
              </select>
            </div>
          </div>
  
          <div>
            <label className="block text-sm font-medium mb-1">Localisation</label>
            <input className="w-full rounded-xl border border-gray-200 px-4 py-2.5 focus:ring-2 focus:ring-orange-500"
                   placeholder="Ex: Dakar, Liberté 6" />
          </div>
  
          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea rows="4" className="w-full rounded-xl border border-gray-200 px-4 py-2.5 focus:ring-2 focus:ring-orange-500"
                      placeholder="Décrivez votre article, l’état, les accessoires, etc."></textarea>
          </div>
  
          <div>
            <label className="block text-sm font-medium mb-1">Images</label>
            <input type="file" multiple className="block w-full text-sm" />
            <p className="text-xs text-gray-500 mt-1">Jusqu’à 5 images (PNG/JPG)</p>
          </div>
  
          <div className="pt-2">
            <button type="button"
                    className="inline-flex items-center justify-center rounded-xl bg-orange-500 text-white px-5 py-2.5 font-medium hover:opacity-90">
              Publier
            </button>
          </div>
        </form>
      </div>
    );
  }