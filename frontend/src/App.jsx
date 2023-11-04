import React, {useState} from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import photos from "mocks/photos";
import topics from "mocks/topics";
import PhotoDetailsModal from "routes/PhotoDetailsModal";


const App = () => {
    const [displayModal, setDisplayModal] = useState(false)
    const selectSinglePhotoDetails = (photo) => {

        setDisplayModal(true)
    } 
 return( 
     <div className="App">
            <HomeRoute topics={topics} photos={photos} setDisplayModal={setDisplayModal} />

            {displayModal && <PhotoDetailsModal
            closeDisplayModal={setDisplayModal}
             />}
    </div>
   
    );
};

export default App;
