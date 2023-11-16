/**
 * TopNavigationBar.jsx
 * 
 * This component represents the top navigation bar of the application. It includes the application logo,
 * a list of topics, and a favorite badge to indicate the presence of favorite photos.
 */
import React, { useState } from 'react';
import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  const [searchText, setSearchText] = useState('');
   // Add a function to handle the search input change
   const handleSearchInputChange = (e) => {
    setSearchText(e.target.value);
  };

  // Add a function to handle the search button click
  const handleSearchClick = () => {
   console.log("I am clicked");
    props.fetchPhotosBySearch(searchText);
  };
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={props.topics}
        fetchPhotosByTopic={props.fetchPhotosByTopic}
           />
      <FavBadge isFavPhotoExist={props.isFavPhotoExist} />
      <input type="text" 
      value={searchText} 
      name="searchText"
      placeholder="Search photos"
       onChange={handleSearchInputChange}/>
      <input type ="button" name="search" value="Search" onClick={handleSearchClick}/>
    </div>
  )
}

export default TopNavigation;