import React from 'react';
import './style.css';


const StyledCard = (props) => {
  return (
    <div className="styled-card">
      {props.children}
    </div>
  )
}

export default StyledCard;
