import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import photos from "mocks/photos";

const PhotoList = (props) => {
  return (
    <ul className="photo-list">
   {props.photos.map((photo)=>
      <PhotoListItem 
      key={photo.id}
      urls={photo.urls}
      user={photo.user}
      location={photo.location}
     
      />
      )}
   
      
  
    </ul>
  );
};

export default PhotoList;
