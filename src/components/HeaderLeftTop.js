import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PercentChange from './PercentChange';

const HeaderLeftTop = () => {

  const [headerData, setHeaderData] = useState([]);

  const fetchData = () => {
    axios
      .get("https://api.coingecko.com/api/v3/global")
      .then((res) => setHeaderData(res.data.data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleReloadClick = () => {
    fetchData();
    console.log("reloded");
  };

  return (
    <div className="md:col-span-2 md:row-span-4 bg-[#121420] rounded-md shadow-sm grid p-2 px-4 relative">
      <div className="grid grid-cols-2 gap-2 w-full">
        <p className="col-span-1 text-md font-large">Nombre de crypto:</p>
        <p className="col-span-1 text-md">
          {headerData.active_cryptocurrencies &&
          headerData.active_cryptocurrencies.toLocaleString()}
        </p>
        <p className="col-span-1 text-md font-large">Marchés:</p>
        <p className=" col-span-1 text-md">
          {headerData.markets &&
            headerData.markets}
        </p>
        <p className="col-span-1 text-md font-large">Global:</p>
        <p className=" col-span-1 text-md">
          <PercentChange percent={headerData.market_cap_change_percentage_24h_usd}/>
        </p>
        <p className="col-span-1 text-md font-large">BTC Dominance:</p>
        <p className=" col-span-1 text-md">
          {headerData.market_cap_percentage &&
          headerData.market_cap_percentage.btc.toFixed(2) + "%"}
        </p>
        <p className="col-span-1 text-md font-large">ETC Dominance:</p>
        <p className=" col-span-1 text-md">
          {headerData.market_cap_percentage &&
            headerData.market_cap_percentage.eth.toFixed(2)+ "%"}
        </p>
      <div className="absolute top-2 right-2 p-2 cursor-pointer reload" onClick={handleReloadClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#9CA3AF" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
          <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
        </svg>
      </div>
    </div>
  </div>
  );
};

export default HeaderLeftTop;
