import React, { useState } from "react";

export default function Cosmetics() {
  const produits = [
    { id: 1, nom: "Ensemble De Maquillage, Correcteur 15 Couleurs ", prixActuel: "5 880 FCFA", prixAncien: "14 900 FCFA", reduction: "-61%", image: "https://sn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/06/869221/1.jpg?3993g" },
    { id: 2, nom: "Sac De Rangement De Voyage , Cosmétiques", prixActuel: "7 500 FCFA", prixAncien: "47 844 FCFA", reduction: "-84%", image: "https://sn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/16/492711/1.jpg?3565" },
    { id: 3, nom: "Boite de rangement cosmétique - rotatif de 360 ", prixActuel: "4 900 FCFA", prixAncien: "7 990 FCFA", reduction: "-39%", image: "https://sn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/75/169221/1.jpg?4449" },
    { id: 4, nom: "Bioderma ATODERM INTENSIVE GEL MOUSSANT  ", prixActuel: "13 900 FCFA", prixAncien: "20 850 FCFA", reduction: "-33%", image: "https://www.maparatunisie.tn/wp-content/uploads/2024/09/27673-sxx81iw3sl.gif" },
    { id: 5, nom: "YARA – Eau de Parfum Femme 50 ml", prixActuel: "3 500 FCFA", prixAncien: "4 500 FCFA", reduction: "-22%", image: "https://www.avenuedumuslim.com/36829-mt_medium/yara-lattafa-parfum-en-spray-50-ml.jpg" },
    { id: 6, nom: "TOPICREM Pack de 2 Laits de Corps - Lait hydratant", prixActuel: "15 900 FCFA", prixAncien: "19 900 FCFA", reduction: "-16%", image: "https://sn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/57/467221/1.jpg?1389" },
    { id: 7, nom: "Original Black sense parfum chic and class -50ml", prixActuel: "12 900 FCFA", prixAncien: "23 000 FCFA", reduction: "-35%", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDxB4HD_-FKWiDioAb-SlzphV1vE6XyiH4jA&s" },
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
