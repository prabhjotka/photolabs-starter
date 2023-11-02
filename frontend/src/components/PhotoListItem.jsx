import React, { useState } from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const[selected,setSelected]=useState(false);
  function favphoto()
  {
    setSelected(selected===false?true:false);
    props.addPhototofav(props.urls.full)
  }
  return(  
<div className="photo-list__item">
  <PhotoFavButton 
  selected={selected}
  toggle={favphoto}
  />
     <img src={props.urls.full} className="photo-list__image"/>
     <div className="photo-list__user-details">
     <img src={props.urls.regular} className="photo-list__user-profile "/>
     <p className= "photo-list__user-info">{props.user.name}</p>
    <p className="photo-list__user-location photo-list__user-info">{props.location.city},
    {props.location.country}</p>
    
    </div>
      </div>
   
  );
}
export default PhotoListItem;
