import React from 'react';
import './style.css';


const RangeSlider = (props) => {
  return (
    <section className="range-slider-wrap">
      {props.children}
    </section>
  )
}

export default RangeSlider;
