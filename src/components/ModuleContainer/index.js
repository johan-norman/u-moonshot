import React from 'react';
import './style.css';


const ModuleContainer = (props) => {
  return (
    <section className="module-container">
      {props.children}
    </section>
  )
}

export default ModuleContainer;
