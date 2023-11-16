import React, { useState } from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import useApplicationData from 'hooks/useApplicationData';
import PhotoDetailsModal from "routes/PhotoDetailsModal";

const App = () => {
  const { state,
    toggleFavourites,
    selectSinglePhotoDetails,
    fetchPhotosByTopic,
    fetchPhotosBySearch,
    closeDisplayModal } = useApplicationData();
  return (
    <div className="App">
      <HomeRoute topics={state.topicData} photos={state.photoData} state={state} toggleFavourites={toggleFavourites}
        selectSinglePhotoDetails={selectSinglePhotoDetails}
        closeDisplayModal={closeDisplayModal} fetchPhotosByTopic={fetchPhotosByTopic}
        fetchPhotosBySearch={fetchPhotosBySearch}
      />
 {state.displayModal && (
        <PhotoDetailsModal
          toggleFavourites={toggleFavourites}
          favourites={state.favourites}
          photo={state.selectedPhoto}
          similarPhotos={state.similarPhotos}
          closeDisplayModal={closeDisplayModal}
        />
      )}
    </div>

  );
};

export default App;
