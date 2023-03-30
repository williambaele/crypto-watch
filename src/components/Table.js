import React, { useState } from 'react';

const Table = ({coinsData}) => {
  console.log(coinsData);


  const [rangeNumber, setRangeNumber] = useState(100);
  const [orderBy, setOrderBy] = useState("");

  const tableHeader = [ "Prix", "MarketCap", "Volume", "1h", "1j", "1s","1m", "6m", "1y", "ATH"];

  return (

<div className="relative overflow-x-auto rounded-md">
    <table className="w-full text-sm text-left text-gray-500">
        <thead class="text-sm uppercase bg-[#121420]">
            <tr>
              <th scope="col" className="px-2 py-3 flex items-center">
                Top <input className="bg-[#121420] pl-2 text-sm text-gray-500 uppercase w-1/3 outline-none" type="text" value={rangeNumber} onChange={(e) => setRangeNumber(e.target.value)} />
              </th>
              <th scope="col" className="px-6 py-3">
                <input type="range" min="1" max="250" value={rangeNumber} onChange={(e) => setRangeNumber(e.target.value)} />
              </th>
              {tableHeader.map((el) => (
                <th scope="col" className="px-6 py-3" key={el}>
                 <input type="radio" id={el} name="header-el" className="hidden" defaultChecked={
                   el === orderBy || el === orderBy + "reverse" ? true : false
                 } onClick={(e) => {
                  setOrderBy(el);
                 }}/>
                 <label htmlFor={el}>{el}</label>
               </th>
              )
              )}
            </tr>
        </thead>
        <tbody>
          <tr className="bg-none border-b border-[#6B7280]">
              <th scope="row" className="px-6 py-4 font-medium">
                1
              </th>
              <td className="px-6 py-4">
                Silver
              </td>
              <td className="px-6 py-4">
                Laptop
              </td>
              <td className="px-6 py-4">
                $2999
              </td>
              <td className="px-6 py-4">
                $2999
              </td>
              <td className="px-6 py-4">
                $2999
              </td>
              <td className="px-6 py-4">
                $2999
              </td>
              <td className="px-6 py-4">
                $2999
              </td>
              <td className="px-6 py-4">
                $2999
              </td>
              <td className="px-6 py-4">
                $2999
              </td>
              <td className="px-6 py-4">
                $2999
              </td>
              <td className="px-6 py-4">
                $2999
              </td>
          </tr>
          <tr className="bg-none border-b border-[#6B7280]">
              <th scope="row" className="px-6 py-4 font-medium">
                1
              </th>
              <td className="px-6 py-4">
                Silver
              </td>
              <td className="px-6 py-4">
                Laptop
              </td>
              <td className="px-6 py-4">
                $2999
              </td>
              <td className="px-6 py-4">
                $2999
              </td>
              <td className="px-6 py-4">
                $2999
              </td>
              <td className="px-6 py-4">
                $2999
              </td>
              <td className="px-6 py-4">
                $2999
              </td>
              <td className="px-6 py-4">
                $2999
              </td>
              <td className="px-6 py-4">
                $2999
              </td>
              <td className="px-6 py-4">
                $2999
              </td>
              <td className="px-6 py-4">
                $2999
              </td>
          </tr>
        </tbody>
    </table>
</div>

  );
};

export default Table;
