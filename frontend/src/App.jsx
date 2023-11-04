import React, {useState} from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import photos from "mocks/photos";
import topics from "mocks/topics";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import PhotoList from "components/PhotoList";
import useApplicationData from 'hooks/useApplicationData';

const App = () => {
  const{state,
    toggleFavourites,
    selectSinglePhotoDetails,
    closeDisplayModal}=useApplicationData();
 return( 
     <div className="App">
            <HomeRoute topics={topics} photos={photos} state={state} toggleFavourites={toggleFavourites} 
             selectSinglePhotoDetails={selectSinglePhotoDetails} 
             closeDisplayModal={closeDisplayModal}
             /> 
             
    </div>
   
    );
};

export default App;
