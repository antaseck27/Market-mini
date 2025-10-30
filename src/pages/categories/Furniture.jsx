import React, { useState } from "react";

export default function Furniture() {
  const produits = [
    { id: 1, nom: "Ensemble de literie queen size  ", prixActuel: "9 030 FCFA", prixAncien: "14 000 FCFA", reduction: "-36%", image: "https://ci.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/96/776692/1.jpg?3611" },
    { id: 2, nom: "Ensemble de meuble en bois mélaminé de style moderne", prixActuel: "75 500 FCFA", prixAncien: "107 844 FCFA", reduction: "-24%", image: "https://sc04.alicdn.com/kf/Hc5e7384d84f14a6aa0f9582ee2ef7ae32.jpg" },
    { id: 3, nom: "Camif, spécialiste du meuble made in France ou Europe ", prixActuel: "104 900 FCFA", prixAncien: "227 990 FCFA", reduction: "-39%", image: "https://cdnimage.camif.fr/m/1f0e1f6ee5bacd09/original/360__camif__home__20251001__collection_atlantiques.jpg" },
    { id: 4, nom: "Meuble à chaussures multifonctionnel Noir", prixActuel: "6 797 FCFA", prixAncien: "12 656 FCFA", reduction: "-46%", image: "https://sn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/87/204321/1.jpg?5762" },
    { id: 5, nom: "Tapis De Salon Rectangulaire 200cmx100cm", prixActuel: "7 315 FCFA", prixAncien: "13 993 FCFA", reduction: "-48%", image: "https://sn.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/15/304621/1.jpg?0272" },
    { id: 6, nom: "TOPFLEX Matelas Orthopédique Haute", prixActuel: "55 900 FCFA", prixAncien: "76 000 FCFA", reduction: "-26%", image: "https://sn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/97/222321/3.jpg?1559" },
    { id: 7, nom: "Luna Lot de 2 Oreillers Orthopédiques LUNA ", prixActuel: "3 200 FCFA", prixAncien: "5 000 FCFA", reduction: "-36%", image: "https://sn.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/24/441811/1.jpg?6552" },
    { id: 8, nom: "Ensemble lit coffre + matelas Clara Gris L 150 X  ", prixActuel: "552 500 FCFA", prixAncien: "715 000 FCFA", reduction: "-24%", image: "https://www.basika.fr/photos/100074376/lits-adultes-clara.webp" },
    { id: 9, nom: "Sofa | Causeuse | Mobilier de maison - Salon", prixActuel: "333 800 FCFA", prixAncien: "515 000 FCFA", reduction: "-25%", image: "https://lh5.googleusercontent.com/proxy/5-f3-t7OcfgNrzRlSd5w6iSBY_tjT3mNs0_47QB7Q7DCx-AtPYQbICSXUxH7WmN2hcFINoR1R6CTRoaF2viGciYDiqJuL3aaeU-atCIBkA" },
    { id: 10, nom: "Coiffeuse - avec un tabouret - rose", prixActuel: "69 000 FCFA", prixAncien: "100 000FCFA", reduction: "-33%", image: "https://sn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/51/825621/1.jpg?4363" },
    { id: 10, nom: "Chaise de détente pliante relaxation et confortable", prixActuel: "33 750 FCFA", prixAncien: " 37 500 FCFA", reduction: "-10%", image: "https://sn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/05/558521/1.jpg?7917" },
    { id: 10, nom: "Comment choisir son mobilier de salle à manger", prixActuel: "105 452 FCFA", prixAncien: "150 000 FCFA ", reduction: "-45%", image: "https://images.ctfassets.net/j4m9q0fykyy4/3Ujq0xnLDxkxTzrKrFyx5p/a0843136a1e3a952df4d2c8006cb2a1f/2021-12-table-de-salle-manger.jpg" },
    { id: 10, nom: "Rideaux De Salle à Manger | Ombre Interieur | Rideaux", prixActuel: "35 920 FCFA", prixAncien: "55 982 FCFA", reduction: "-36%", image: "https://i.pinimg.com/736x/2b/28/2a/2b282aff0c868b375a3be97b3929d18d.jpg" },
    { id: 10, nom: "Quel miroir choisir pour son salon ? - ART INDUSTRIEL", prixActuel: "14 800 FCFA", prixAncien: "26 258 FCFA", reduction: "-29%", image: "https://art-industriel.fr/wp-content/uploads/2022/03/Eurus_190_80_02.webp" },
    { id: 10, nom: "Lot de 6 Chaises de Salle à Manger en Sherpa- Style", prixActuel: "84 800 FCFA", prixAncien: "106 258 FCFA", reduction: "-29%", image: "https://www.cdiscount.com/pdt2/7/0/7/1/700x700/auc1695721083707/rw/lot-de-6-chaises-de-salle-a-manger-style-scandinav.jpg" },
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
