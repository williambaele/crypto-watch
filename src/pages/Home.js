import React from 'react';

const Home = () => {
  return (
    <div className="h-screen bg-[#14213D] py-10 px-4 md:px-0">
      <div className="container mx-auto">
      <div className="grid md:grid-rows-5 md:grid-flow-col gap-4 h-40">
        <div className="md:row-span-3 bg-green-200 rounded-md">01</div>
        <div className="md:row-span-2 bg-purple-200 rounded-md">01</div>
        <div className="md:col-span-2 md:row-span-5 bg-red-200 rounded-md">02</div>
      </div>
      </div>
    </div>
  );
};

export default Home;
