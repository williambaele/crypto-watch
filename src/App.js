import axios from "axios";
import { useEffect, useState } from "react";
import HeaderLeftBottom from "./components/HeaderLeftBottom";
import HeaderLeftTop from "./components/HeaderLeftTop";
import HeaderRight from "./components/HeaderRight";

function App() {
  const [coinsData, setCoinsData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C14d%2C30d%2C200d%2C1y")
      .then((res) => setCoinsData(res.data))
  },[])



  return (
    <div className="h-screen bg-[#1b2432] py-10 px-4 md:px-0">
      <div className="container mx-auto">
        <div className="grid md:grid-rows-6 md:grid-cols-5 md:grid-flow-col gap-4 h-72">
          <HeaderLeftTop/>
          <HeaderLeftBottom/>
          <HeaderRight/>
        </div>
      </div>
    </div>
  );
}

export default App;
