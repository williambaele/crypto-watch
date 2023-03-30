import React from 'react';

const Table = ({coinsData}) => {
  console.log(coinsData);
  return (

<div class="relative overflow-x-auto rounded-md">
    <table class="w-full text-sm text-left text-gray-500">
        <thead class="text-xs uppercase bg-[#121420]">
            <tr>
              <th scope="col" class="px-6 py-3">
                Top
              </th>
              <th scope="col" class="px-6 py-3">
                XXXX
              </th>
              <th scope="col" class="px-6 py-3">
                Prix
              </th>
              <th scope="col" class="px-6 py-3">
                MarketCap
              </th>
              <th scope="col" class="px-6 py-3">
                Volume
              </th>
              <th scope="col" class="px-6 py-3">
                1h
              </th>
              <th scope="col" class="px-6 py-3">
                1j
              </th>
              <th scope="col" class="px-6 py-3">
                1s
              </th>
              <th scope="col" class="px-6 py-3">
                1m
              </th>
              <th scope="col" class="px-6 py-3">
                6m
              </th>
              <th scope="col" class="px-6 py-3">
                1y
              </th>
              <th scope="col" class="px-6 py-3">
                ATH
              </th>
            </tr>
        </thead>
        <tbody>
          <tr class="bg-none border-b border-[#6B7280]">
              <th scope="row" class="px-6 py-4 font-medium">
                1
              </th>
              <td class="px-6 py-4">
                Silver
              </td>
              <td class="px-6 py-4">
                Laptop
              </td>
              <td class="px-6 py-4">
                $2999
              </td>
              <td class="px-6 py-4">
                $2999
              </td>
              <td class="px-6 py-4">
                $2999
              </td>
              <td class="px-6 py-4">
                $2999
              </td>
              <td class="px-6 py-4">
                $2999
              </td>
              <td class="px-6 py-4">
                $2999
              </td>
              <td class="px-6 py-4">
                $2999
              </td>
              <td class="px-6 py-4">
                $2999
              </td>
              <td class="px-6 py-4">
                $2999
              </td>
          </tr>
          <tr class="bg-none border-b border-[#6B7280]">
              <th scope="row" class="px-6 py-4 font-medium">
                1
              </th>
              <td class="px-6 py-4">
                Silver
              </td>
              <td class="px-6 py-4">
                Laptop
              </td>
              <td class="px-6 py-4">
                $2999
              </td>
              <td class="px-6 py-4">
                $2999
              </td>
              <td class="px-6 py-4">
                $2999
              </td>
              <td class="px-6 py-4">
                $2999
              </td>
              <td class="px-6 py-4">
                $2999
              </td>
              <td class="px-6 py-4">
                $2999
              </td>
              <td class="px-6 py-4">
                $2999
              </td>
              <td class="px-6 py-4">
                $2999
              </td>
              <td class="px-6 py-4">
                $2999
              </td>
          </tr>
        </tbody>
    </table>
</div>

  );
};

export default Table;
