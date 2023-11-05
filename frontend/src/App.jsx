import React, {useState} from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import useApplicationData from 'hooks/useApplicationData';

const App = () => {
  const{state,
    toggleFavourites,
    selectSinglePhotoDetails,
    closeDisplayModal}=useApplicationData();
 return( 
     <div className="App">
            <HomeRoute   state={state} topics={state.topicData} photos={state.photoData} toggleFavourites={toggleFavourites} 
             selectSinglePhotoDetails={selectSinglePhotoDetails} 
             closeDisplayModal={closeDisplayModal}
             /> 
             
    </div>
   
    );
};

export default App;
