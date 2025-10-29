import React, { useState } from "react";

export default function Electronics() {
  const produits = [
    { id: 1, nom: "Roch Congélateur Vertical 8 Tiroirs", prixActuel: "219 900 FCFA", prixAncien: "300 000 FCFA", reduction: "-27%", image: "https://gsmsenegal.com/wp-content/uploads/2023/03/2-12.png" },
    { id: 2, nom: "Roch Cuisinière à Gaz 4 Feux - 50x50 cm ", prixActuel: "78 900 FCFA", prixAncien: "90 000 FCFA", reduction: "-12%", image: "https://sn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/92/343911/1.jpg?8031" },
    { id: 3, nom: "Roch Réfrigérateur 135 Litres – 2 Portes", prixActuel: "107 900 FCFA", prixAncien: "155 000 FCFA", reduction: "-17%", image: "https://generalcool.sn/wp-content/uploads/2023/06/1-9.jpg" },
    { id: 4, nom: "Roch Combiné 290 Litres Brut – 2 Portes ", prixActuel: "300 000 FCFA", prixAncien: "350 000 FCFA", reduction: "-5%", image: "https://sn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/69/957321/1.jpg?8004" },
    { id: 5, nom: "Roch Congélateur Rcf-120 120 L Brut – Couleur Gris", prixActuel: "75 900 FCFA", prixAncien: "79 000 FCFA", reduction: "-5%", image: "https://sn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/97/839221/1.jpg?3026" },
    { id: 6, nom: "Roch REFRIGERATEUR VITRINE ROCH 260 LITRES", prixActuel: "222 000 FCFA", prixAncien: "260 000 FCFA", reduction: "-15%", image: "https://sn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/58/798621/1.jpg?0864" },
    { id: 7, nom: "Machine à Café électrique - 1.25 L - Noir", prixActuel: "12 900 FCFA", prixAncien: "23 000 FCFA", reduction: "-35%", image: "https://www.soumari.com/wp-content/uploads/2025/08/Machine-A-Cafe-Nespresso-Delonghi-Vertuo-Noir-ENV90-B.jpg" },
    { id: 8, nom: "Hachoir à Viande Electrique - Inox - 3 Litres - Trancheuse ", prixActuel: "6 900 FCFA", prixAncien: "15 000 FCFA", reduction: "-54%", image: "https://sn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/55/331221/1.jpg?4952" },
    { id: 9, nom: "Astech Machine à laver inverter MLV70B-LD - 7kg", prixActuel: "174 380 FCFA", prixAncien: "232 637 FCFA", reduction: "-54%", image: "https://sn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/23/921221/1.jpg?8400" },
    { id: 10, nom: "Congélateur Horizontal 280 Litres- Garantie 12 Mois", prixActuel: "157 650 FCFA", prixAncien: "182 057 FCFA", reduction: "-13%", image: "https://www.electromenager-dakar.com/wp-content/uploads/2025/02/Electromenager-Dakar1-20-6.png" },
    { id: 10, nom: "Machine à laver automatique 8kg-Garantie 12 mois", prixActuel: "81 500 FCFA", prixAncien: "90 000 FCFA", reduction: "-9%", image: "https://sn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/72/944621/1.jpg?2570" },
    { id: 10, nom: "Astech AIR FRYER AF007D-BK FRITEUSE A AIR 7L", prixActuel: "29 704 FCFA", prixAncien: "60 000 FCFA", reduction: "-50%", image: "https://sn.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/70/627321/1.jpg?7253" },
    { id: 10, nom: "Fer A Repasser à vapeur", prixActuel: "5 452 FCFA", prixAncien: "10 000 ", reduction: "-45%", image: "https://sn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/38/432001/1.jpg?4799" },
    { id: 10, nom: "Astech Micro-ondes 20 Litres - 20MAD4-IA - Noir", prixActuel: "35 920 FCFA", prixAncien: "55 982 FCFA", reduction: "-36%", image: "https://www.electromenager-dakar.com/wp-content/uploads/2022/05/astech.png" },
    { id: 10, nom: "Hisense Téléviseur LED 32 Pouces-Garantie 12 Mois", prixActuel: "61 800 FCFA", prixAncien: "111 258 FCFA", reduction: "-44%", image: "https://www.electromenager-dakar.com/wp-content/uploads/2020/12/11-6.jpg" },
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
          <h2 className="text-white font-bold text-lg">
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
