/**
 * PhotoDetailsModal.jsx
 * 
 * This component represents a modal that displays detailed information about a photo,
 * including the photo itself, photographer details, and similar photos.
 * It also provides options to close the modal and interact with the photo (e.g., add to favorites).
 */
import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';


const PhotoDetailsModal = (props) => {

  return (
    <div className="photo-details-modal photo-details-modal__header">
      <button className="photo-details-modal__close-button" onClick={() => props.closeDisplayModal()}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className="photo-list__item">
        <PhotoFavButton
          toggleFavourites={props.toggleFavourites}
          photoId={props.photo.id}
          favourites={props.favourites}
        />
        <img src={props.photo.urls.full} className="photo-details-modal__image photo-card img" />
        <div className="photo-list__user-details photo-details-modal__header">
          <img src={props.photo.urls.regular} className="photo-details-modal__photographer-profile" />
          <p className="photo-list__user-info photo-details-modal__photographer-details">{props.photo.user.name}</p>
          <p className="photo-list__user-location photo-details-modal__photographer-info photo-details-modal__photographer-location">{props.photo.location.city}, {props.photo.location.country}</p>
        </div>
      </div>

      <p>Similar photos</p>
      <PhotoList
        photos={props.similarPhotos}
        toggleFavourites={props.toggleFavourites}
        favourites={props.favourites}

       
      />
    </div>
  );
};

export default PhotoDetailsModal;

