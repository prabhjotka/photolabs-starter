import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  return(  
<div className="photo-list__item">
  <PhotoFavButton/>
     <img src={props.urls.full} className="photo-list__image"/>
     <div className="photo-list__user-details">
     <img src={props.urls.regular} className="photo-list__user-profile "/>
     <p className= "photo-list__user-info">{props.user.name}</p>
    <p className="photo-list__user-location photo-list__user-info">{props.location.city},
    {props.location.country}</p></div>
      </div>
   
  );
}
export default PhotoListItem;
