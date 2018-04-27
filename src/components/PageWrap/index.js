import React from 'react';
import './style.css';


const PageWrap = (props) => {
  return (
    <div className="page-wrap">
      {props.children}
    </div>
  )
}

export default PageWrap;