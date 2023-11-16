/**
 * HomeRoute.jsx
 * 
 * This component represents the main home route of the application, displaying a list of photos
 * and providing navigation options. It includes a top navigation bar, a photo list, and a photo details modal.
 */
import React from "react";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import '../styles/HomeRoute.scss';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
console.log("in home",props)
  return (
    <div className="home-route">
      <TopNavigationBar
        topics={props.topics}
        fetchPhotosByTopic={props.fetchPhotosByTopic}
        fetchPhotosBySearch={props.fetchPhotosBySearch}
        isFavPhotoExist={props.state.favourites.length > 0}
      />
      <PhotoList
        photos={props.photos}
        toggleFavourites={props.toggleFavourites}
        favourites={props.state.favourites}
        selectSinglePhotoDetails={props.selectSinglePhotoDetails}

      />
      {/* {props.state.displayModal && (
        <PhotoDetailsModal
          toggleFavourites={props.toggleFavourites}
          favourites={props.state.favourites}
          photo={props.state.selectedPhoto}
          similarPhotos={props.state.similarPhotos}
          closeDisplayModal={props.closeDisplayModal}
        />
      )} */}

    </div>
  );
};

export default HomeRoute;
