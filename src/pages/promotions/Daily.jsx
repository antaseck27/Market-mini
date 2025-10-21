import React from 'react';

const Daily = () => {
  const chaussures = [
    {
      id: 1,
      image: 'https://images.prodirectsport.com/ProductImages/Gallery_4/1017638_Gallery_4_1844779.jpg',
      nom: 'Chaussure Nike',
      prixActuel: 18000,
      ancienPrix: 25000,
    },
    {
      id: 2,
      image: 'https://www.electrodepot.fr/media/catalog/product/P10001980.jpg',
      nom: 'Montre',
       prixActuel: 15000,
      ancienPrix: 20000,
    },
    {
      id: 3,
      image: 'https://cdn.shopify.com/s/files/1/0036/4806/1509/files/af40910640d69f455aa4fbc9246608ef8f19ccc8_square3094822_1_df817710-c058-469a-a2e1-dd35e0ac12a2_159x@2x.progressive.jpg?v=1759945653',
      nom: 'Tablette',
       prixActuel: 45000,
      ancienPrix: 60000,
    },
    {
      id: 4,
      image: 'https://sac-bandouliere.fr/wp-content/uploads/2017/12/set-sac-a-main-sac-bandouliere-pochette-femme-cuir-roug.jpg',
      nom: 'Sac Femmes',
       prixActuel: 13000,
      ancienPrix: 19000,
    },

    {
      id: 1,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTIvFdmzQ1HQ_Nfu0VYnwf653MPxF-Zi7kgg&s',
      nom: 'Cosmetic',
       prixActuel: 27000,
      ancienPrix: 35000,
    },
    {
      id: 2,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC91_UFIl_1Qi5G4wOTvxIHE5F01f8OvGYFw&s',
      nom: 'Furniture',
       prixActuel: 8000,
      ancienPrix: 13000,
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1606741965509-717b9fdd6549?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWlycG9kfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1000',
      nom: 'Telephone',
       prixActuel: 15000,
      ancienPrix: 2000,
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGFsb25zJTIwaGF1dHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=1000',
      nom: 'Chaussure Femme',
       prixActuel: 17000,
      ancienPrix: 22000,
    },

     {
      id: 1,
      image: 'https://ae01.alicdn.com/kf/S62a7fd01368c4c6e93e4bbb6ba9e669a3.jpg',
      nom: 'Chauffe eau',
       prixActuel: 18000,
      ancienPrix: 25000,
    },
    {
      id: 2,
      image: 'https://www.sencor.com/Sencor/media/content/Products/SLE32S700TCS-2.jpg',
      nom: 'Television',
       prixActuel: 100000,
      ancienPrix: 120000,
    },
    {
      id: 3,
      image: 'https://nova.sn/30252-large_default/sac-a-dos-oxford-etanche-style-decontracte-noir-sc2454.jpg',
      nom: 'Sac a dos',
       prixActuel: 19000,
      ancienPrix: 23000,
    },
    {
      id: 4,
      image: 'https://www.kazima.in/wp-content/uploads/2024/03/cosmetics.jpg',
      nom: 'Lait de corp',
       prixActuel: 14000,
      ancienPrix: 22500,
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center text-orange-500 mb-8">Offres du jour</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {chaussures.map((chaussure) => (
          <div
            key={chaussure.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={chaussure.image}
              alt={chaussure.nom}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold">{chaussure.nom}</h2>
              <p className="text-orange-500 font-bold text-lg">{chaussure.prixActuel} FCFA</p>
  <p className="text-gray-500 line-through text-sm">{chaussure.ancienPrix} FCFA</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Daily;
