/**
 * PhotoListItem.jsx
 * 
 * This component represents an individual item in a list of photos. It displays a photo,
 * allows users to toggle the photo as a favorite, and provides user details and location information.
 */

import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  console.log(props)
  return (
    <div className="photo-list__item photo-card">
      <PhotoFavButton
        toggleFavourites={props.toggleFavourites}
        photoId={props.photoId}
        favourites={props.favourites}
      />
      <img src={props.photo.urls.full} className="photo-list__image" onClick={() => props.selectSinglePhotoDetails(props.photo)} />
      <div className="photo-list__user-details">
        <img src={props.photo.urls.regular} className="photo-list__user-profile " />
        <p className="photo-list__user-info">{props.photo.user.name}</p>
        <p className="photo-list__user-location  photo-list__user-info">{props.photo.location.city},
          {props.photo.location.country}</p>
      </div>
    </div>

  );

}
export default PhotoListItem;
