import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import RightArrow from './right-arrow.svg'
import H2 from '../../components/H2'

const SliderContainer = styled.section`
  overflow: hidden;
  padding: 0;
  position: relative;
  margin-top: 50px;

  .slick-list,.slick-slider,.slick-track{position:relative;display:block}.slick-loading .slick-slide,.slick-loading .slick-track{visibility:hidden}.slick-slider{box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none;-khtml-user-select:none;-ms-touch-action:pan-y;touch-action:pan-y;-webkit-tap-highlight-color:transparent}.slick-list{overflow:hidden;margin:0;padding:0}.slick-list:focus{outline:0}.slick-list.dragging{cursor:pointer;cursor:hand}.slick-slider .slick-list,.slick-slider .slick-track{-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);-o-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.slick-track{top:0;left:0}.slick-track:after,.slick-track:before{display:table;content:''}.slick-track:after{clear:both}.slick-slide{display:none;float:left;min-height:1px}[dir=rtl] .slick-slide{float:right}.slick-slide img{display:block}.slick-slide.slick-loading img{display:none}.slick-slide.dragging img{pointer-events:none}.slick-initialized .slick-slide{display:block}.slick-vertical .slick-slide{display:block;height:auto;border:1px solid transparent}.slick-arrow.slick-hidden{display:none}/*# sourceMappingURL=slick.min.css.map */

  .slider-inner-container {
    background: #fff;
    display: inline-block;
    padding: 0px;
    position: relative;
  }

  .slick-slider {
    display: inline-block;
    position: relative;
    z-index: 10;
  }

  .slick-slide {

    height: 660px;
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



  }

  img {
    user-select: none;
  }

`;

const StyledCard = styled.div`

  position: relative;
  cursor: move; /* fallback if grab cursor is unsupported */
  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;

  img {
    user-select: none;
  }

  .card-image {
    background: rgba(0,0,0,.5);
    width: 100vw;
    height: 660px;
    display: inline-block;
  }

  .card-text-container {
    bottom: 20px;
    left: 30px;
    position: absolute;
    color: #fff;
  }

  h2 {
    color: #fff;
    margin-top: 0;
  }

`;

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
      arrows: false,
      autoplay: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const renderCards = this.props.cards.map((card, index) => {
      return (
          <StyledCard key={card.title + index}>
            <div className="card-text-container">
              <p className="category-text">{card.category}</p>
              <H2>{card.title}</H2>
            </div>
            <div className="card-image" style={ { backgroundImage: `url(http://placekitten.com/g/1440/800)` } }></div>
          </StyledCard>
      );
    })

    return(
      <SliderContainer>
        <div className="slider-inner-container">
          <Slider {...sliderSettings}>
              {renderCards}
          </Slider>
        </div>
      </SliderContainer>
    )
  }
}

export default FullSizeSlider;
