import React from "react";

import PhotoListItem from "./components/PhotoListItem";
import PhotoFavButton from "components/PhotoFavButton";
import "./App.scss";
import PhotoList from "components/PhotoList";

// Note: Rendering a single component to build components in isolation
// const photos = Array(3).fill(0);

// const photoListItems = photos.map((item,index) => 
//  <PhotoListItem key={index} {... sampleDataForPhotoListItem}/>
// )

const App = () => {
 return( 
    <>
     <div className="App">
        <PhotoList/>
        </div>
     
    </>
   
    );
};

export default App;
