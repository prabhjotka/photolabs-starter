import React from "react";

import "../styles/TopicListItem.scss";


const TopicListItem = (props) => {
  return (
    <div className="topic-list__item">
      {<h2 className="topic-list__item" onClick={undefined}>{props.title}</h2>}
   
    </div>
  );
};

export default TopicListItem;
