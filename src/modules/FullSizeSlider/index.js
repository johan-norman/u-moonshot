import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import RightArrow from './right-arrow.svg'
import H2 from '../../components/H2'

import './default.css';
import './style.css';

class FullSizeSlider extends React.Component{

  constructor(props){
    super(props);
  }

  componentDidMount() {
  }

  render() {

    const sliderSettings = {
      dots: false,
      infinite: false,
      autoplay: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const renderCards = this.props.cards.map((card, index) => {
      return (
          <div className="full-size-slider-card" key={card.title + index}>
            <div className="card-text-container">
              <p className="category-text">{card.category}</p>
              <H2>{card.title}</H2>
            </div>
            <div className="card-image" style={ { backgroundImage: `url(${ card.imgsrc })` } }></div>
          </div>
      );
    })

    return(
      <div className="slick-container">
      <div className="slick-slider">
        <div className="slider-inner-container">
          <Slider {...sliderSettings}>
              {renderCards}
          </Slider>
        </div>
      </div>
      </div>
    )
  }
}

export default FullSizeSlider;
