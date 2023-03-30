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
          fill: colorPicker(coinsData[i].price_change_percentage_24h)
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

  const colorPicker = (number) => {
    if(number >= 20){
      return "#00cc00";
    } else if (number >= 5){
      return "#009900";
    } else if (number >= 0){
      return "#006600";
    } else if (number >= -5){
      return "#cc0000";
    } else if (number >= -20){
      return "#990000";
    } else {
      return "#000000";
    }
  }
  console.log(dataArray);

  return (
    <div className="md:col-span-3 md:row-span-6 bg-[#121420] rounded-md shadow-sm overflow-hidden">
      <Treemap
      width={761}
      height={288}
      data={dataArray}
      dataKey="size"
      stroke="rgb(51,51,51)"
      fill="#121420"
      aspectRatio="1"
      className="content-cover"
      isAnimationActive={false} >
      <Tooltip content={<TreemapToolTip/>} wrapperStyle={{ outline: "none" }} />
      </Treemap>
    </div>
  );
};

export default HeaderRight;
