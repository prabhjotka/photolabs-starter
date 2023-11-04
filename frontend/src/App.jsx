import React, {useState} from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import photos from "mocks/photos";
import topics from "mocks/topics";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import PhotoList from "components/PhotoList";


const App = () => {
 

  
 return( 
     <div className="App">
            <HomeRoute topics={topics} photos={photos} /> 
             
    </div>
   
    );
};

export default App;
