import { useState } from "react";

const useApplicationData = function() {
  const [state, setState] = useState({

    similarPhotos: [], // Initialize with an empty array
    selectedPhoto: null, // Initialize as null
    favourites: [], // Initialize with an empty array
    displayModal: false, // Initialize as false
  });

  const selectSinglePhotoDetails = (photo) => {
    setState((prevstate) => ({
      ...prevstate,
      displayModal: true,
      selectedPhoto: photo,
      similarPhotos: Object.values(photo.similar_photos),

    }));

  }
  const toggleFavourites = (photoId) => {
    if (state.favourites.includes(photoId)) {
      const copyOfFavourites = state.favourites.filter(favPhotoId => favPhotoId !== photoId);
      setState((prevState) => ({
        ...prevState,
        favourites: copyOfFavourites,
      }));
    } else {
      
      setState((prevState) => ({
        ...prevState,
        favourites: [...prevState.favourites, photoId],
      }));
      
    }
  }
  

  const closeDisplayModal = () => {
    setState((prevState) => ({
      ...prevState,
      displayModal: false, // Close the modal
    }));
  };
  return {
    state,
    toggleFavourites,
    selectSinglePhotoDetails,
    closeDisplayModal
  }

}
export default useApplicationData;