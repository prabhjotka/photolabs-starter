import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={props.toggle}>
      <FavIcon className='photo-list__fav-icon' displayAlert={props.displayAlert} selected={props.selected}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;