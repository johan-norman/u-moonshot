import React from 'react';
import './style.css';


const RecommendedTag = (props) => {
  return (
    <p className="recommended-tag">
      {props.children}
    </p>
  )
}

export default RecommendedTag;
