import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [selected,setSelected]=useState(false);
const handleClick=()=>{
setSelected(selected===true?false:true);
}
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={handleClick}>
      <FavIcon className='photo-list__fav-icon' displayAlert={false} selected={selected} />
      </div>
    </div>
  );
}

export default PhotoFavButton;