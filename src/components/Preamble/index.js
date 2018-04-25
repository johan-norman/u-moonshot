import React from 'react';
import './style.css';


const Preamble = (props) => {
  return (
    <p className="preamble">
      {props.children}
    </p>
  )
}

export default Preamble;
