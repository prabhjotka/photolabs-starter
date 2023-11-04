import React, { useCallback, useState } from 'react';
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import '../styles/HomeRoute.scss';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  console.log(props.state.favourites);
  // const [favourites, setFavourites] = useState([])
  // const [displayModal, setDisplayModal] = useState(false);
  //   const [selectedPhoto, setSelectedPhoto] = useState(null); 
  // const [similarPhotos, setSimilarPhotos] = useState([]); 
  // let similarPhotosArray =[];
  //   const selectSinglePhotoDetails = (photo) => {
  //       setSelectedPhoto(photo);
  //       similarPhotosArray=Object.values(photo.similar_photos); 
  //       setSimilarPhotos(similarPhotosArray);
  //       setDisplayModal(true);
      
  //        } 
  // const toggleFavourites = (photoId) => {
  //   if (favourites.includes(photoId)) {
  //     const copyOfFavourites = [...favourites].filter(favPhotoId => favPhotoId !== photoId);
  //     setFavourites(copyOfFavourites);
  //     return
  //   }
  //   setFavourites(prev => [...prev, photoId])
  // }


  return (
    <div className="home-route">
     <TopNavigationBar 
     topics={props.topics} 
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
