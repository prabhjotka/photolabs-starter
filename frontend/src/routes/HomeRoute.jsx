import React, { useCallback, useState } from 'react';
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import '../styles/HomeRoute.scss';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {

  return (
    <div className="home-route">
     <TopNavigationBar 
     topics={props.topics} 
     fetchPhotosByTopic ={props.fetchPhotosByTopic }
     isFavPhotoExist={props.state.favourites.length > 0}
     />
    <PhotoList
    photos={props.photos}
    toggleFavourites={props.toggleFavourites} 
    favourites={props.state.favourites} 
    selectSinglePhotoDetails={props.selectSinglePhotoDetails}
     />
      {props.state.displayModal && (
        <PhotoDetailsModal 
          toggleFavourites={props.toggleFavourites} 
          favourites={props.state.favourites} 
          photo={props.state.selectedPhoto} 
          similarPhotos={props.state.similarPhotos} // Pass the similar photos here  
          closeDisplayModal={props.closeDisplayModal}
        />
      )}
     
    </div>
  );
};

export default HomeRoute;
