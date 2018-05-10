import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import { Link } from "react-router-dom";
import Container from '../../components/Container'
import './style.css';



class CardSlider extends React.Component{

  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
  }

  handleClick(id) {
    this.props.onCardClick(id);
  }

  render() {

    const sliderSettings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
       responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    const renderCards = this.props.cards.map((card, index) => {
      return (
          <div className="slider-card" key={card.title + index}>
          <Link to={`/articles/${card.id}`}  onClick={() => this.handleClick(card.id)} className="card-image" style={ { backgroundImage: `url(${ card.imgsrc })` } }></Link>
              <div className="card-text-container">
                <p className="category-text">{card.category}</p>
                <h3>{card.title}</h3>
              </div>
          </div>
      );
    })

    return(
      <Container>
        <div className="cards-slider">
        <div className="slider-inner-container">
          <Slider {...sliderSettings}>
              {renderCards}
          </Slider>
        </div>
        </div>
      </Container>
    )
  }
}

export default CardSlider;
