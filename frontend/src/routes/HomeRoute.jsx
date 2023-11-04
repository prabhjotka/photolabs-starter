import React, { useCallback, useState } from 'react';
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import '../styles/HomeRoute.scss';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
const HomeRoute = (props) => {
  const [favourites, setFavourites] = useState([])
  const [displayModal, setDisplayModal] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState(null); 
  const [similarPhotos, setSimilarPhotos] = useState([]); 
  let similarPhotosArray =[];
    const selectSinglePhotoDetails = (photo) => {
        setSelectedPhoto(photo);
        similarPhotosArray=Object.values(photo.similar_photos); 
        setSimilarPhotos(similarPhotosArray);
        setDisplayModal(true);
       
         } 

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
    selectSinglePhotoDetails={selectSinglePhotoDetails}
     />
      {displayModal && (
        <PhotoDetailsModal
          closeDisplayModal={() => {
            setDisplayModal(false);
          }}
          toggleFavourites={toggleFavourites} 
          favourites={favourites} 
          photo={selectedPhoto}
          similarPhotos={similarPhotos} // Pass the similar photos here
        />
      )}
     
    </div>
  );
};

export default HomeRoute;
