import React from 'react';
import './style.css';


const SentenceFormContainer = (props) => {
  return (
    <section className="sentence-form-container">
      {props.children}
    </section>
  )
}

export default SentenceFormContainer;
