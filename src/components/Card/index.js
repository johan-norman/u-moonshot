import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import CardImage1 from './images/card-image-1.jpg'
import CardImage2 from './images/card-image-2.jpg'
import CardImage3 from './images/card-image-3.jpg'
import CardImage4 from './images/card-image-4.jpg'

const CardContainer = styled.div`
  background: #fff;
  box-shadow: 0 2px 14px 0 rgba(0,0,0,0.14);

  &:hover {
    box-shadow: 0 2px 41px 0 rgba(41,54,98,0.30);

    img {
      transform: scale(1.1, 1.1);
    }

  }

  .card-image-container {
    overflow: hidden;
  }

  img {
    max-width: 100%;
    transition: .2s ease-out;
  }

  .card-text-container {
    padding: 30px;
  }

  .card-link {
    display: inline-block;
    outline: 0;
    text-decoration: none;
    border: 0;

    &:visited {
      outline: 0;
      text-decoration: none;
    }
  }

  h3 {
    color: #1A1A1A;
    font-family: 'Roboto', sans-serif;
    font-size: 2vw;
    letter-spacing: -0.5px;
    line-height: 1.2;
    text-decoration: none;
    margin-top: 0;
    padding-top: 0;
    margin-bottom: 0px;
    padding-bottom: 0px;
  }

  p {
    font-size: 1.2vw;
    color: #4A4B50;
    letter-spacing: 0;
    line-height: 1.4;
    text-decoration: none;
    margin: 0;
    margin-top: 10px;
  }

`;

const imageArr = [CardImage1, CardImage2, CardImage3, CardImage4];

const randomImage = imageArr[Math.floor(Math.random()*imageArr.length)];
console.log(randomImage);

const ImageCard = (props) => (
  <CardContainer className="card-container">
    <Link to="/about-us" className="card-link">
        <div className="card-image-container">
          <img src={randomImage} />
        </div>
        <div className="card-text-container">
          <h3>{props.title}</h3>
          <p>{props.bodytext}.</p>
        </div>
    </Link>
  </CardContainer>
)

const QuoteCard = (props) => (
  <CardContainer className="card-container">
    <Link to="/about-us" className="card-link">
        <div className="card-text-container">
          <h3>{props.quote}</h3>
          <p>{props.author}.</p>
        </div>
    </Link>
  </CardContainer>
)

class Card extends React.Component{

  constructor(props){
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return(
      <div>
        <ImageCard title={this.props.title} bodytext={this.props.bodytext} />
        {/* <QuoteCard quote={this.props.quote} author={this.props.author} /> */ }
      </div>
    )
  }
}

export default Card;
