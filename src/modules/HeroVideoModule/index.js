import React from 'react'
import styled from 'styled-components';
import H1 from '../../components/H1'
import ChapterNumberLine from '../../components/ChapterNumberLine'
import UnionenVideoSrc from './unionen_compressed.mp4'
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


const VideoContainer = styled.div`
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

const Video = styled.video`
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

const SubHeadlineContainer = styled.div`
  position: absolute;
  bottom: 60px;
  left: 50px;
  height: 50px;
  z-index: 10;

  .chapter-container {
    left: -67px;
    top: -50px;
    opacity: 0;
  }

  .chapter-text-container {
    color: #fff;

    span {
      color: #6BD18E;
    }

  }

  .chapter-line {
    background: #fff;
    width: 80px;
  }

  p {
    font-size: 17px;
    color: rgba(255, 255, 255, 0.9);
    margin-left: 70px;
    font-weight: 400;
    max-width: 500px;
    letter-spacing: 1px;
    position: relative;
    top: -30px;
    line-height: 1.4;
    left: -10px;
    opacity: 0;

    span {
      font-weight: 700;
    }
  }

`;

//<H1>Kompetens ger kraft.<br />Fler och bättre jobb.<br />Balans i arbetslivet.</H1>
class HeroVideoModule extends React.Component{

  constructor(props){
    super(props);
  }

  componentDidMount() {
    // Start animation timeline with greensock
    var tl = new TimelineMax({delay:0.5});
    tl
      .to('.hero-video-container', 1, {autoAlpha: 1, ease:"Sine.easeOut"})
      .staggerTo('.hero-headline-1 span', .4, {y:0, autoAlpha: 1, force3D: true, ease:"Sine.easeOut"}, 0.025, "firstRow")
      .staggerTo('.hero-headline-2 span', .4, {y:0, autoAlpha: 1, force3D: true, ease:"Sine.easeOut"}, 0.025, "firstRow+=.15")
      .staggerTo('.hero-headline-3 span', .4, {y:0, autoAlpha: 1, force3D: true, ease:"Sine.easeOut"}, 0.025, "firstRow+=.25")
      .to('.hero-sub-headline .chapter-container', .3, {top: -10, autoAlpha: .75, ease:"Sine.easeOut"})
      .to('.hero-sub-headline p', .5, {left: 0, autoAlpha: 1, ease:"Sine.easeOut"});

    tl.play();
  }

  render() {
    return(
      <ModuleContainer className="hero-container">
        <VideoContainer className="hero-video-container">
          <Video poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/polina.jpg" id="unionen-bgVid" playsInline autoPlay muted loop>
            <source src={UnionenVideoSrc} type="video/mp4" />
          </Video>
        </VideoContainer>
        <HeadlineContainer>
          <Charming className='hero-headline-1' letters={"Kompetens ger kraft."} render={(letters) => (
              <H1>{letters}</H1>
          )} />

          <Charming className='hero-headline-2' letters={"Fler och bättre jobb."} render={(letters) => (
              <H1>{letters}</H1>
          )} />

          <Charming className='hero-headline-3' letters={"Balans i arbetslivet."} render={(letters) => (
              <H1>{letters}</H1>
          )} />
        </HeadlineContainer>
        <SubHeadlineContainer className="hero-sub-headline">
          <ChapterNumberLine sectionnumber="01" sectiontitle="04" />
          <p><span>Visste du att?</span> consectetur adipiscing elit. Nam posuere quis lacus ut malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis vitae placerat felis.</p>
        </SubHeadlineContainer>
      </ModuleContainer>
    )
  }
}

export default HeroVideoModule;
