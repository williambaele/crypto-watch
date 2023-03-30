import axios from 'axios';
import React, { useEffect, useState } from 'react';

const HeaderLeftTop = () => {

  const [headerData, setHeaderData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/global")
      .then((res) => setHeaderData(res.data.data))
  }, [])

  return (
    <div className="md:col-span-1 md:row-span-4 bg-green-200 rounded-md shadow-sm grid p-2">
      <h1 className="text-4xl font-large text-center text-gray-600">Crypto Watch</h1>
      <div className="flex flex-col justify-center">
        <div className="flex gap-4">
          <p className="text-md font-large">Nombre de crypto:</p>
          <p className="text-md">
            {headerData.active_cryptocurrencies &&
            headerData.active_cryptocurrencies.toLocaleString()}
          </p>
        </div>
        <div className="flex gap-4">
          <p className="text-md font-medium">Marchés:</p>
          <p className="text-md">
            {headerData.markets &&
            headerData.markets}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderLeftTop;
