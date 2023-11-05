//  import { useState } from "react";

// const useApplicationData = function() {
//   const [state, setState] = useState({

//     similarPhotos: [], // Initialize with an empty array
//     selectedPhoto: null, // Initialize as null
//     favourites: [], // Initialize with an empty array
//     displayModal: false, // Initialize as false
//   });

//   const selectSinglePhotoDetails = (photo) => {
//     setState((prevstate) => ({
//       ...prevstate,
//       displayModal: true,
//       selectedPhoto: photo,
//       similarPhotos: Object.values(photo.similar_photos),

//     }));

//   }
//   const toggleFavourites = (photoId) => {
//     if (state.favourites.includes(photoId)) {
//       const copyOfFavourites = state.favourites.filter(favPhotoId => favPhotoId !== photoId);
//       setState((prevState) => ({
//         ...prevState,
//         favourites: copyOfFavourites,
//       }));
//     } else {

//       setState((prevState) => ({
//         ...prevState,
//         favourites: [...prevState.favourites, photoId],
//       }));

//     }
//   }


//   const closeDisplayModal = () => {
//     setState((prevState) => ({
//       ...prevState,
//       displayModal: false, // Close the modal
//     }));
//   };
//   return {
//     state,
//     toggleFavourites,
//     selectSinglePhotoDetails,
//     closeDisplayModal
//   }

// }
// export default useApplicationData;

/* insert app levels actions below */
import { useReducer } from "react";
import { useEffect } from "react";
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  CLOSE_MODAL: 'CLOSE_MODAL'
}


function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      const addedFavPhotoId = action.payload;
      const updatedFavourites = [...state.favourites, addedFavPhotoId];
      return {
        ...state,
        favourites: updatedFavourites,
      };

      
    case ACTIONS.FAV_PHOTO_REMOVED:
      const removedFavPhotoId = action.payload;
      const filteredFavourites = state.favourites.filter((favPhotoId) => favPhotoId !== removedFavPhotoId);
      return {
        ...state,
        favourites: filteredFavourites,
      };
    case ACTIONS.SET_PHOTO_DATA:
      const  photo_data=action.payload;
      return {
        ...state,
        photoData:photo_data
      };
    case ACTIONS.SET_TOPIC_DATA:
      const topics_data=action.payload;
      return {
        ...state,
        topicData:topics_data
      };
    // case SELECT_PHOTO:
    //   return {
    //     ...state,
    //     // Insert logic to select a photo using action.payload
    //   };
    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      const photo = action.payload;
      return {
        ...state,
        displayModal: true,
        selectedPhoto: photo,
        similarPhotos: Object.values(photo.similar_photos)
      };
    
      case  ACTIONS.CLOSE_MODAL:
      return {
        ...state,
        displayModal: false
        
      };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}


const useApplicationData = function() {

  useEffect(() => {
    fetch("/api/photos")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
  }, []);

  useEffect(() => {
    fetch("/api/topics")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }))
  }, []);

  const [state, dispatch] = useReducer(reducer, {
    similarPhotos: [],
    selectedPhoto: null,
    favourites: [],
    displayModal: false,
    photoData: [],
    topicData: []
  });

  const selectSinglePhotoDetails = (photo) => {
    dispatch({
      type: 'DISPLAY_PHOTO_DETAILS',
      payload: photo,
    });
  }

  const toggleFavourites = (photoId) => {
    if (state.favourites.includes(photoId)) {
      dispatch({
        type: 'FAV_PHOTO_REMOVED',
        payload: photoId,
      });
    } else {
      dispatch({
        type: 'FAV_PHOTO_ADDED',
        payload: photoId,
      });
    }
  }

  const closeDisplayModal = () => {
    dispatch({
      type: 'CLOSE_MODAL',
      payload: null,
    });
  };

  return {
    state,
    toggleFavourites,
    selectSinglePhotoDetails,
    closeDisplayModal
  }
}

export default useApplicationData;
