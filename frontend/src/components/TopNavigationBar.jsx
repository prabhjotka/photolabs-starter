/**
 * TopNavigationBar.jsx
 * 
 * This component represents the top navigation bar of the application. It includes the application logo,
 * a list of topics, and a favorite badge to indicate the presence of favorite photos.
 */

import React from 'react';
import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={props.topics}
        fetchPhotosByTopic={props.fetchPhotosByTopic}
      />
      <FavBadge isFavPhotoExist={props.isFavPhotoExist} />
    </div>
  )
}

export default TopNavigation;