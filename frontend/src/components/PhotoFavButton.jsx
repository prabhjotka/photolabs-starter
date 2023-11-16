/**
 * PhotoFavButton.jsx
 * 
 * This component represents a button for favoriting a photo. It displays a favorite icon
 * and allows users to toggle the photo as a favorite by clicking on it.
 */
import React from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  return (
    <div className="photo-list__fav-icon"  onClick={() => props.toggleFavourites(props.photoId)}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon className='photo-list__fav-icon' selected={props.favourites.includes(props.photoId)} />

      </div>
    </div>
  );
}

export default PhotoFavButton;