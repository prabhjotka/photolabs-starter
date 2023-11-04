import React from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={() => props.toggleFavourites(props.photoId)}>
      <FavIcon className='photo-list__fav-icon' selected={props.favourites.includes(props.photoId)}/>
    
      </div>
    </div>
  );
}

export default PhotoFavButton;