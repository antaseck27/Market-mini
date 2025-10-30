import React, { useState } from "react";

export default function Cosmetics() {
  const produits = [
    { id: 1, nom: "Ensemble De Maquillage, Correcteur 15 Couleurs ", prixActuel: "5 880 FCFA", prixAncien: "14 900 FCFA", reduction: "-61%", image: "https://sn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/06/869221/1.jpg?3993g" },
    { id: 2, nom: "Sac De Rangement De Voyage , Cosmétiques", prixActuel: "7 500 FCFA", prixAncien: "47 844 FCFA", reduction: "-84%", image: "https://sn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/16/492711/1.jpg?3565" },
    { id: 3, nom: "Boite de rangement cosmétique - rotatif de 360 ", prixActuel: "4 900 FCFA", prixAncien: "7 990 FCFA", reduction: "-39%", image: "https://sn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/75/169221/1.jpg?4449" },
    { id: 4, nom: "Bioderma ATODERM INTENSIVE GEL MOUSSANT  ", prixActuel: "13 900 FCFA", prixAncien: "20 850 FCFA", reduction: "-33%", image: "https://www.maparatunisie.tn/wp-content/uploads/2024/09/27673-sxx81iw3sl.gif" },
    { id: 5, nom: "YARA – Eau de Parfum Femme 50 ml", prixActuel: "3 500 FCFA", prixAncien: "4 500 FCFA", reduction: "-22%", image: "https://www.avenuedumuslim.com/36829-mt_medium/yara-lattafa-parfum-en-spray-50-ml.jpg" },
    { id: 6, nom: "TOPICREM Pack de 2 Laits de Corps - Lait hydratant", prixActuel: "15 900 FCFA", prixAncien: "19 900 FCFA", reduction: "-16%", image: "https://sn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/57/467221/1.jpg?1389" },
    { id: 7, nom: "Savon Visage / Anti-Acné / Exfoliant - Curcuma", prixActuel: "2 250 FCFA", prixAncien: "2 475 FCFA", reduction: "-9%", image: "https://sn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/30/914221/1.jpg?7801" },
    { id: 8, nom: "Original Parfum Paris 24 Heures -100ml ", prixActuel: "2 500 FCFA", prixAncien: "15 000 FCFA", reduction: "-84%", image: "https://diaytar.com/wp-content/uploads/sn221/original-parfum-paris-24-heureseau-de-parfum100ml_951_dakar_senegal.png" },
    { id: 9, nom: "Oud Parfum Oud Orchid Premium - 100 ML", prixActuel: "3 800 FCFA", prixAncien: "15 000 FCFA", reduction: "-75%", image: "https://rukminim2.flixcart.com/image/480/640/xif0q/perfume/e/t/o/100-oud-orchid-eau-de-parfum-feelhigh-men-women-original-imahgfjmratkehct.jpeg?q=90" },
    { id: 10, nom: "Luxury LAVOCADO- hydratant et unifiant ", prixActuel: "9 900 FCFA", prixAncien: "15 000FCFA", reduction: "-33%", image: "https://sn.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/43/925321/1.jpg?4466" },
    { id: 10, nom: "Peau sujette avec CeraVe - Expert Skincare Solutions", prixActuel: "31 500 FCFA", prixAncien: "50 000 FCFA", reduction: "-9%", image: "https://africa.cerave.com/fr/-/media/Project/Loreal/BrandSites/CeraVe/Master/France/Product/Blemish-control-Gel/blemish-all-products.jpg" },
    { id: 10, nom: "EVOLUDERM – Routine 100% Éclat – Lait Corps Carotte +", prixActuel: "29 704 FCFA", prixAncien: "60 000 FCFA", reduction: "-50%", image: "https://m.media-amazon.com/images/I/71E2PmpzvmL._AC_UF894,1000_QL80_.jpg" },
    { id: 10, nom: "Gamme Nature Beaute – Soin Des Cheveux a L'huile D'olive", prixActuel: "5 452 FCFA", prixAncien: "10 000 ", reduction: "-45%", image: "https://sn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/86/726221/2.jpg?9968" },
    { id: 10, nom: "Ozentya Authentique-Gamme Mayana- Lait + 3 Savons", prixActuel: "35 920 FCFA", prixAncien: "55 982 FCFA", reduction: "-36%", image: "https://sn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/92/78999/1.jpg?5067" },
    { id: 10, nom: "Biolane Biolane-Gel corps et cheveux-Flacon 350ml", prixActuel: "4 800 FCFA", prixAncien: "6 258 FCFA", reduction: "-29%", image: "https://www.cdiscount.com/pdt2/1/9/2/1/700x700/auc1689592749192/rw/lot-de-4-gels-corps-et-cheveux-2-en-1-nouveau-pa.jpg" },
  ];

  // 👇 nombre de produits visibles au départ
  const [visibleCount, setVisibleCount] = useState(5);

  // fonction du bouton
  const handleVoirPlus = () => {
    if (visibleCount < produits.length) {
      setVisibleCount(produits.length); // tout afficher
    } else {
      setVisibleCount(5); // refermer (optionnel)
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-orange-500 rounded-lg w-full max-w-6xl">
        {/* Titre et lien */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-white font-bold text-lg ">
           Meilleures offres Electroménager
          </h2>
          <button
            onClick={handleVoirPlus}
            className="text-white hover:underline focus:outline-none"
          >
            {visibleCount < produits.length ? "Voir plus →" : "Voir moins ↑"}
          </button>
        </div>

        {/* Grille produits */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 bg-white p-4 rounded-lg">
          {produits.slice(0, visibleCount).map((p) => (
            <div
              key={p.id}
              className="relative border rounded-lg p-2 shadow hover:shadow-lg hover:scale-105 transition transform cursor-pointer"
            >
              <span className="absolute top-2 left-2 bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded">
                {p.reduction}
              </span>

              <img
                src={p.image}
                alt={p.nom}
                className="h-36 w-full object-contain mb-2"
              />

              <p className="text-sm font-semibold">{p.nom}</p>
              <p className="text-lg font-bold">{p.prixActuel}</p>
              <p className="text-gray-400 text-sm line-through">
                {p.prixAncien}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
