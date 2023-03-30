import React from 'react';
import HeaderLeftBottom from '../components/HeaderLeftBottom';
import HeaderLeftTop from '../components/HeaderLeftTop';
import HeaderRight from '../components/HeaderRight';

const Home = () => {
  return (
    <div className="h-screen bg-[#14213D] py-10 px-4 md:px-0">
      <div className="container mx-auto">
        <div className="grid md:grid-rows-6 md:grid-cols-3 md:grid-flow-col gap-4 h-52">
          <HeaderLeftTop/>
          <HeaderLeftBottom/>
          <HeaderRight/>
        </div>
      </div>
    </div>
  );
};

export default Home;
