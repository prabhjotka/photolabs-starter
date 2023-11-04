import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";


const PhotoList = (props) => {
   return (
    <ul className="photo-list">
   {props.photos.map((photo)=>

      <PhotoListItem 
      key={photo.id}
      photoId={photo.id}
      photo={photo}
      toggleFavourites={props.toggleFavourites}
      favourites={props.favourites}
      setDisplayModal={props.setDisplayModal}
      selectSinglePhotoDetails={props.selectSinglePhotoDetails}
    
      />
      )}
   
      
  
    </ul>
  );
};

export default PhotoList;
