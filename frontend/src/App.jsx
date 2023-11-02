import React from "react";
import "./App.scss";
import PhotoList from "components/PhotoList";
import TopNavigation from "components/TopNavigationBar";
import TopicList from "components/TopicList";
import TopNavigationBar from "components/TopNavigationBar";
import HomeRoute from "routes/HomeRoute";
import photos from "mocks/photos";
import topics from "mocks/topics";

const App = () => {
 return( 
    <>
     <div className="App">

     <HomeRoute  topics={ topics} photos={ photos}/>
   
        </div>
  
    </>
   
    );
};

export default App;
