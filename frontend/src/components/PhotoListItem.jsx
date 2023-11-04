import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  
  return(  
<div className="photo-list__item">
  <PhotoFavButton 
    toggleFavourites={props.toggleFavourites}
    photoId={props.photoId}
    favourites={props.favourites}
  />
     <img src={props.photo.urls.full} className="photo-list__image" onClick={() => props.setDisplayModal(true)} />
     
     <div className="photo-list__user-details">
     <img src={props.photo.urls.regular} className="photo-list__user-profile "/>
     <p className= "photo-list__user-info">{props.photo.user.name}</p>
    <p className="photo-list__user-location photo-list__user-info">{props.photo.location.city},
    {props.photo.location.country}</p>
    
    </div>
      </div>
  
  );

}
export default PhotoListItem;
