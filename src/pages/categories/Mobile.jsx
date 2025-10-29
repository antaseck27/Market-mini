import React, { useState } from "react";

export default function Mobile() {
  const produits = [
    { id: 1, nom: "Tecno POP 10 PRO (KM4k)", prixActuel: "49 900 FCFA", prixAncien: "60 000 FCFA", reduction: "-17%", image: "https://sn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/50/577621/1.jpg?3323" },
    { id: 2, nom: "Samsung Galaxy A07 – 68", prixActuel: "51 900 FCFA", prixAncien: "57 100 FCFA", reduction: "-9%", image: "https://sn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/15/692721/1.jpg?6032" },
    { id: 3, nom: "ZTE A75 – ROM 128Go", prixActuel: "45 900 FCFA", prixAncien: "55 000 FCFA", reduction: "-17%", image: "https://sn.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/95/097621/2.jpg?8526" },
    { id: 4, nom: "Xiaomi Redmi A5 – 6.88", prixActuel: "42 900 FCFA", prixAncien: "50 000 FCFA", reduction: "-30%", image: "https://ci.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/70/838013/1.jpg?2774" },
    { id: 5, nom: "Xiaomi Redmi 14C - ROM 128", prixActuel: "54 900 FCFA", prixAncien: "59 468 FCFA", reduction: "-8%", image: "https://promo.sn/wp-content/uploads/2025/01/xiaomi-redmi-14c-memoire-128-go-ram-6-go-ecran-688-pouces-2.jpg" },
    { id: 6, nom: "Astech S9 (GH6573) – 128 Go", prixActuel: "43 900 FCFA", prixAncien: "46 700 FCFA", reduction: "-18%", image: "https://www.soumari.com/wp-content/uploads/2025/04/Telephone-Astech-S9-128GB-RAM-8-.jpg" },
    { id: 7, nom: "Kgtel Solo 10 - 6,6 - ROM 64", prixActuel: "32 900 FCFA", prixAncien: "45 000 FCFA", reduction: "-16%", image: "https://gsmsenegal.com/wp-content/uploads/2024/10/1m-1.png" },
    { id: 8, nom: "Corn C16 Pro Max - 6,6 ROM ", prixActuel: "32 500 FCFA", prixAncien: "50 000 FCFA", reduction: "-24%", image: "https://sn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/59/222321/1.jpg?1912" },
    { id: 9, nom: "ZTE A36 - 6,75 pouces - ROM", prixActuel: "35 900 FCFA", prixAncien: "45 000 FCFA", reduction: "-15%", image: "https://sn.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/88/963721/1.jpg?6603" },
    { id: 10, nom: "Tecno Spark 40 Pro Plus - 6.67", prixActuel: "93 900 FCFA", prixAncien: "120 000 FCFA", reduction: "-22%", image: "https://sn.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/76/577621/1.jpg?0009" },
    { id: 10, nom: "Tecno Camon 18 Premier - 6.7", prixActuel: "127 950 FCFA", prixAncien: "150 000 FCFA", reduction: "-49%", image: "https://s.alicdn.com/@sc04/kf/H30fd688d70ed4e91831e3d26d4b8107eX.jpg" },
    { id: 10, nom: "Tecno Spark 40 Pro Plus - 6.67", prixActuel: "85 200 FCFA", prixAncien: "93 000 FCFA", reduction: "-49%", image: "https://sn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/00/570721/1.jpg?4139" },
    { id: 10, nom: "Samsung Galaxy A07 - 6.7", prixActuel: "59 900 FCFA", prixAncien: "75 330 FCFA", reduction: "-20%", image: "https://sn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/05/692721/1.jpg?5717" },
    { id: 10, nom: "Samsung Galaxy A26 4G RAM", prixActuel: "166 200 FCFA", prixAncien: "184 670 FCFA", reduction: "-10%", image: "https://promo.sn/wp-content/uploads/2025/03/LD0006218738-768x768.jpg" },
    { id: 10, nom: "Samsung Galaxy A16 - RAM", prixActuel: "85 000 FCFA", prixAncien: "94 000 FCFA", reduction: "-10%", image: "https://sn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/89/713321/1.jpg?3335" },
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
            Meilleures offres Téléphones |
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
