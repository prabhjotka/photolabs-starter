import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import PhotoFavButton from './PhotoFavButton';

const TopNavigation = (props) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={props.topics}/>
      <PhotoFavButton/>
    </div>
  )
}

export default TopNavigation;