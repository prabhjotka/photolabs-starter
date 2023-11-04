import React, { useCallback, useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
const HomeRoute = (props) => {
  const [favourites, setFavourites] = useState([])

  const toggleFavourites = (photoId) => {
    if (favourites.includes(photoId)) {
      const copyOfFavourites = [...favourites].filter(favPhotoId => favPhotoId !== photoId);
      setFavourites(copyOfFavourites);
      return
    }
    setFavourites(prev => [...prev, photoId])
  }


  return (
    <div className="home-route">
     <TopNavigationBar 
     topics={props.topics} 
     isFavPhotoExist={favourites.length > 0}
     />
    <PhotoList
    photos={props.photos}
    toggleFavourites={toggleFavourites} 
    favourites={favourites} 
     />
     
    </div>
  );
};

export default HomeRoute;
