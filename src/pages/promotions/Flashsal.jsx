

const produitsFlash = [
  {
    id: 1,
    image: 'https://plus.unsplash.com/premium_photo-1678375722686-c7ea507c3003?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y3Vpc2luZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=1000',
    nom: 'Cuisine',
    prixActuel: 12000,
    ancienPrix: 15000,
  },
  {
    id: 2,
    image: 'https://sn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/94/289621/1.jpg?1440',
    nom: 'Horloge Murale',
    prixActuel: 17000,
    ancienPrix: 23000,
  },
  {
    id: 3,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy2AEnbZfHh_JpecBxZkzWhDqwg0x0pOxePg&s',
    nom: 'Television',
    prixActuel: 150000,
    ancienPrix: 200000,
  },
];

export default function Flashsal() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center text-orange-500 mb-8">
        Vente flash
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {produitsFlash.map((produit) => (
          <div
            key={produit.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={produit.image}
              alt={produit.nom}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold mb-2">{produit.nom}</h2>
              <p className="text-red-600 font-bold text-lg">
                {produit.prixActuel} FCFA
              </p>
              <p className="text-gray-500 line-through text-sm">
                {produit.ancienPrix} FCFA
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
