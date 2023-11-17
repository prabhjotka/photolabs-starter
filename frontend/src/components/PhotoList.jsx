/**
 * PhotoList.jsx
 * 
 * This component represents a list of photos. It maps through the provided photo data
 * and renders individual photo items using the PhotoListItem component.
 */
import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";


const PhotoList = (props) => {
  return props.photos && (

    <ul className="photo-list photo-card">
      {props.photos.map((photo) =>

        <PhotoListItem
          key={photo.id}
          photoId={photo.id}
          photo={photo}
          toggleFavourites={props.toggleFavourites}
          favourites={props.favourites}
          selectSinglePhotoDetails={props.selectSinglePhotoDetails}

        />
      )}



    </ul>
  );
};

export default PhotoList;