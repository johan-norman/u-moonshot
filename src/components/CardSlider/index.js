import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import RightArrow from './right-arrow.svg'

const SliderContainer = styled.section`
  overflow: hidden;
  padding: 0 10% 100px 10%;
  position: relative;
  margin-top: 50px;
  margin-bottom: 50px;

  .slider-inner-container {
    background: #F2F2F2;
    display: inline-block;
    padding: 40px 0px 0px 0px;
    margin-left: 10px;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      width: 100px;
      height: 100%;
      background: #F2F2F2;
      left: -100px;
      top: 0px;
    }

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: -100px;
      width: 100px;
      height: 100px;
      background: #fff;
    }
  }

  .slick-slider {
    display: inline-block;
    margin-left: -15px;
    position: relative;
    top: 70px;
    z-index: 10;
  }

  .slick-slide {
    float: left;
  }

  .slick-arrow {
    position: absolute;
    top: -110px;
    width: 100px;
    height: 100px;
    opacity: 0.64;
    background: #1FA22E;
    border: 0;
    padding: 0px;
    font-size: 0;
    line-height: 0;
    cursor: pointer;
    outline: 0;

    &:hover {
      opacity: .8;
    }

    &:before {
      content: '';
      position: absolute;
      width: 12px;
      height: 21px;
      left: 50%;
      top: 50%;
      margin-top: -10px;
      margin-left: -6px;
    }

    &.slick-prev {
      margin-left: 15px;
      &:before {
        background: url(${RightArrow});
        transform: rotate(-180deg);
      }
    }

    &.slick-next {
      margin-left: 116px;
      &:before {
        background: url(${RightArrow});
      }
    }

    &:active {
      outline: 0;
    }

  }

  .card-container {

    img {
      user-select: none;
    }

  }

`;

class CardSlider extends React.Component{

  constructor(props){
    super(props);
  }

  componentDidMount() {
  }

  render() {

    const sliderSettings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };

    return(
      <SliderContainer>
        <div className="slider-inner-container">
          <Slider {...sliderSettings}>
            {this.props.children}
          </Slider>
        </div>
      </SliderContainer>
    )
  }
}

export default CardSlider;
