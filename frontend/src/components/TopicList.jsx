
/**
 * TopicList.jsx
 * 
 * This component represents a list of topics. It maps through the provided topic data
 * and renders individual topic items using the TopicListItem component.
 */

import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  return (
    <div className="top-nav-bar__topic-list">
      {props.topics.map((topic) =>
        <TopicListItem
          key={topic.id}
          {...topic}
          fetchPhotosByTopic={props.fetchPhotosByTopic}
        />
      )}
    </div>
  );
};

export default TopicList;
