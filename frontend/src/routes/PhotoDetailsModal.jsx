import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';


const PhotoDetailsModal = (props) => {
 
  return (
    <div className="photo-details-modal photo-details-modal__header">
      <button className="photo-details-modal__close-button" >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-list__item">
      <img src={props.full} className="photo-details-modal__image"/>
     <div className="photo-list__user-details photo-details-modal__header">
     <img src={props.regular} className="photo-details-modal__photographer-profile"/>
     <p className= "photo-list__user-info photo-details-modal__photographer-details">{props.username}</p>
    <p className="photo-list__user-location photo-details-modal__photographer-info photo-details-modal__photographer-location">{props.city},
    {props.country}</p>
            </div>
        </div>
        <p>Similar photos</p>
  
    </div>
  )
};

export default PhotoDetailsModal;
