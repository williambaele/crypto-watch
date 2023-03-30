import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PercentChange from './PercentChange';

const HeaderLeftTop = () => {

  const [headerData, setHeaderData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/global")
      .then((res) => setHeaderData(res.data.data))
  }, [])

  return (
    <div className="md:col-span-2 md:row-span-4 bg-[#E5E5E5] rounded-md shadow-sm grid p-2 px-4">
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
          {headerData.markets &&
            headerData.markets}
        </p>
        <p className="col-span-1 text-md font-large">ETC Dominance:</p>
        <p className=" col-span-1 text-md">
          {headerData.markets &&
            headerData.markets}
        </p>

      </div>
    </div>
  );
};

export default HeaderLeftTop;
