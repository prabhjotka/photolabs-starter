import React, {useState} from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import useApplicationData from 'hooks/useApplicationData';

const App = () => {
  const{state,
    toggleFavourites,
    selectSinglePhotoDetails,
    fetchPhotosByTopic ,
    closeDisplayModal}=useApplicationData();
 return( 
     <div className="App">
            <HomeRoute   topics={state.topicData} photos={state.photoData}  state={state} toggleFavourites={toggleFavourites} 
             selectSinglePhotoDetails={selectSinglePhotoDetails} 
             closeDisplayModal={closeDisplayModal} fetchPhotosByTopic ={fetchPhotosByTopic }
             /> 
             
    </div>
   
    );
};

export default App;
