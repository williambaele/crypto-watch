import React from 'react';

const HeaderLeftBottom = () => {
  return (
    <div className="md:row-span-2 md:col-span-2 bg-[#121420] rounded-md shadow-sm flex items-center justify-around p-2">
      <div className="cursor-pointer">
        <input type="checkbox" defaultChecked={true} id="stableCoin" />
        <label htmlFor="stableCoin" >Avec stable coins</label>
      </div>
      <div className="cursor-pointer">
        <p>Aucune liste</p>
      </div>
      <div className="flex gap-1 items-center cursor-pointer">
        <p>Liste de favoris</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
        </svg>
      </div>
    </div>
  );
};

export default HeaderLeftBottom;
