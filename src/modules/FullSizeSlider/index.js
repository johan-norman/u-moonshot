import React from 'react'
import { Link } from "react-router-dom"
import styled from 'styled-components'
import Slider from 'react-slick'
import RightArrow from './right-arrow.svg'
import H2 from '../../components/H2'
import Container from '../../components/Container'
import CityTag from '../../components/CityTag'

import './default.css';
import './style.css';

class FullSizeSlider extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      location: this.props.location
    }
    this.handleDataChange = this.handleDataChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
  }

  handleDataChange(key, payload) {
    this.props.onDataChange(key, payload);
  }

  handleClick(id) {
    this.props.onCardClick(id);
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      location: newProps.location
    })
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
            <Link to={`/articles/${card.id}`}  onClick={() => this.handleClick(card.id)} className="card-image" style={ { backgroundImage: `url(${ card.imgsrc })` } }></Link>
            <Container>
              <div className="card-text-container">
                <p className="category-text">{card.category}</p>
                <H2>{card.title}</H2>
              </div>
            </Container>
          </div>
      );
    })

    return(
      <div className="slick-container">
      <Container>
      <CityTag 
          onCityChange={this.handleDataChange}
          active={this.state.location}
        />
      </Container>
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
