import React from 'react';

const Home = () => {
  return (
    <div className="h-screen bg-[#14213D] py-10 px-4 md:px-0">
      <div className="container mx-auto">
      <div className="grid md:grid-rows-6 md:grid-cols-3 md:grid-flow-col gap-4 h-52">
        <div className="md:col-span-1 md:row-span-4 bg-green-200 rounded-md shadow-sm grid p-2">
          <h1 className="text-4xl font-large text-center">Crypto Watch</h1>
          <p>Nombre de crypto:</p>
          <p>Marchés:</p>
        </div>
        <div className="md:row-span-2 bg-purple-200 rounded-md shadow-sm flex items-center justify-around p-2">
          <p>Avec stable coins</p>
          <p>Aucune liste</p>
          <p>Liste de favoris</p>
        </div>
        <div className="md:col-span-2 md:row-span-6 bg-red-200 rounded-md shadow-sm">

        </div>
      </div>
      </div>
    </div>
  );
};

export default Home;
