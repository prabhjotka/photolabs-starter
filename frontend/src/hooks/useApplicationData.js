import { useReducer } from "react";
import { useEffect } from "react";

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS',
  SELECT_PHOTO_BY_TOPIC_ID: 'SELECT_PHOTO_BY_TOPIC_ID',
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
      const photo_data = action.payload;
      return {
        ...state,
        photoData: photo_data
      };
    case ACTIONS.SET_TOPIC_DATA:
      const topics_data = action.payload;
      return {
        ...state,
        topicData: topics_data
      };
    case ACTIONS.SELECT_PHOTO_BY_TOPIC_ID:
      return {
        ...state,
        topic_id: action.payload
      };
    case ACTIONS.GET_PHOTOS_BY_TOPICS:
      const photo_by_topics = action.payload;
      return {
        ...state,
        photoData:photo_by_topics
      };
    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      const photo = action.payload;
      return {
        ...state,
        displayModal: true,
        selectedPhoto: photo,
        similarPhotos: Object.values(photo.similar_photos)
      };

    case ACTIONS.CLOSE_MODAL:
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

  const [state, dispatch] = useReducer(reducer, {
    similarPhotos: [],
    selectedPhoto: null,
    favourites: [],
    displayModal: false,
    photoData: [],
    topicData: [],
    category_photos: [],
    topic_id: null
  });

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
  useEffect(() => {
    fetch(`/api/topics/photos/${state.topic_id}`)
      .then((response) => response.json())
      .then((data) =>dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: data }));
  }, [state.topic_id]);



  const selectSinglePhotoDetails = (photo) => {
    dispatch({
      type: 'DISPLAY_PHOTO_DETAILS',
      payload: photo,
    });
  }
  const selectTopicId = (topicid) => {
    dispatch({
      type: 'SELECT_PHOTO_BY_TOPIC_ID',
      payload: topicid,
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
    selectTopicId,
    closeDisplayModal
  }
}

export default useApplicationData;
