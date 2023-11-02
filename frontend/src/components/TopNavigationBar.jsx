import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import PhotoFavButton from './PhotoFavButton';

const TopNavigation = (props) => {
  console.log(props.favPhotoArray);
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={props.topics}/>
      {props.favPhotoArray.length>0 && <PhotoFavButton toggle={props.toggle} selected={true} displayAlert={true}/>}
    </div>
  )
}

export default TopNavigation;