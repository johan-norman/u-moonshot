import React from 'react'
import styled from 'styled-components';
import H1 from '../../components/H1'
import Charming from 'react-charming'
import { TimelineMax, TweenMax, Elastic } from 'gsap';

const ModuleContainer = styled.section`
  position: relative;
  z-index: 1;
  margin: -1px 0 0;
  padding: 1px 0 0;
  height: 100vh;
  max-height: 1350px;
  width: 100%;
  min-height: 550px;
  user-select: none;
  background: #fff;
  opacity: 1;
  background: #000;
`;


const ImageContainer = styled.div`
  opacity: 0;
  &:before {
    content: '';
    position: absolute;
    background: rgba(240,90,57,0.10);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
  }
`;

const Image = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 1;
  width: 100%;
  height: 100%;
  background-size: cover;
  object-fit: cover;
  background: #666;
`;

const HeadlineContainer = styled.div`
  position: absolute;
  height: auto;
  top: 50%;
  padding: 0px 50px;
  display: inline-block;
  transform: translate(0, -60%);
  z-index: 2;

  .hero-headline-2, .hero-headline-3 {
    margin-top: -5px;
  }

  h1 {
    overflow: hidden;
    position: relative;
    line-height: 110%;
    span {
      transform: translate(0, 100%);
      opacity: 0;
      display: inline-block;

      &.hero-headline-1-9, &.hero-headline-1-13, &.hero-headline-2-4,
      &.hero-headline-2-8, &.hero-headline-2-15, &.hero-headline-3-6, &.hero-headline-3-8 {
        width: 27px;
      }

    }
  }



`;

//<H1>Kompetens ger kraft.<br />Fler och bättre jobb.<br />Balans i arbetslivet.</H1>
class HeroImageModule extends React.Component{

  constructor(props){
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return(
      <ModuleContainer className="hero-image-wrapper">
        <ImageContainer className="hero-image-container">
          <Image>

          </Image>
        </ImageContainer>
        <HeadlineContainer>
          <H1>{this.props.text}</H1>
        </HeadlineContainer>
      </ModuleContainer>
    )
  }
}

export default HeroImageModule;
