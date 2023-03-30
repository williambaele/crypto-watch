import React, { useEffect, useState } from 'react';
import { Tooltip, Treemap } from 'recharts';

const HeaderRight = ({ coinsData }) => {

  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    let chartData = [];

    if(coinsData.length > 0){
      for(let i = 0; i < 40; i++){
        chartData.push({
          name: coinsData[i].symbol.toUpperCase() + " " + coinsData[i].market_cap_change_percentage_24h?.toFixed(2) + "%",
          size: coinsData[i].market_cap,
          fill: null
        });
      }
    }
    setDataArray(chartData);
  },[coinsData])

  const TreemapToolTip = ({active, payload}) => {
    if(active && payload && payload.length){
      return(
        <div className="bg-[#121420] p-4 border-0 rounded-md outline-none">
        <p className="text-lg ">{payload[0].payload.name}</p>
      </div>
      );
    }
    return null;
  }


  return (
    <div className="md:col-span-3 md:row-span-6 bg-[#121420] rounded-md shadow-sm">
      <Treemap
      width={761}
      height={288}
      data={dataArray}
      dataKey="size"
      stroke="rg(51,51,51)"
      fill="black"
      aspectRatio="1"
      >
      <Tooltip content={<TreemapToolTip/>} wrapperStyle={{ outline: "none" }}/>
      </Treemap>
    </div>
  );
};

export default HeaderRight;
