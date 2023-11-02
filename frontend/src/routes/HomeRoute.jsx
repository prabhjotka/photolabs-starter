import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import  { useCallback, useState } from 'react';
const HomeRoute = (props) => {

  const [selected,setSelected]=useState(false);
  const [favPhotoArray,setfavphotoArray]=useState([]);

function addPhototofav(url)
{
  setfavphotoArray(()=>
[...favPhotoArray,url]

  )
}
  const toggle=()=>{
    setSelected(selected===true?false:true);
    }
  return (
    <div className="home-route">
     <TopNavigationBar 
     topics={props.topics} 
     toggle={toggle}
     selected={selected}
     favPhotoArray={favPhotoArray}
     />
       <PhotoList photos={props.photos}  toggle={toggle}
     selected={selected}
     addPhototofav={addPhototofav}
     />
    </div>
  );
};

export default HomeRoute;
