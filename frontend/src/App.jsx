import React from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import photos from "mocks/photos";
import topics from "mocks/topics";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

const App = () => {
 return( 
    <>
     <div className="App">
{/* TODO address photoDetails Modal */}
     <HomeRoute  topics={ topics} photos={ photos} />
        </div>
  
    </>
   
    );
};

export default App;
