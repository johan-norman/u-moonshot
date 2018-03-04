import React from 'react'
import styled from 'styled-components';
import H1 from '../../components/H1'
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
`;


const VideoContainer = styled.div`

  &:before {
    content: '';
    position: absolute;
    background: rgba(41, 54, 98, 0.30);
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
  transform: translate(0, -50%);
  z-index: 2;

  h1 {
    overflow: hidden;
    position: relative;
    line-height: 105%;
    span {
      transform: translate(0, 100%);
      opacity: 0;
      display: inline-block;
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
      .staggerTo('.hero-headline-1 span', .4, {y:0, autoAlpha: 1, force3D: true, ease:"Sine.easeOut"}, 0.025, "firstRow")
      .staggerTo('.hero-headline-2 span', .4, {y:0, autoAlpha: 1, force3D: true, ease:"Sine.easeOut"}, 0.025, "firstRow+=.15")
      .staggerTo('.hero-headline-3 span', .4, {y:0, autoAlpha: 1, force3D: true, ease:"Sine.easeOut"}, 0.025, "firstRow+=.25");

    tl.play();
  }

  render() {
    return(
      <ModuleContainer>
        <VideoContainer>
          <Video poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/polina.jpg" id="bgvid" playsInline autoPlay muted loop>
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

          {/*
          <H1 className='hero-headline-1'><span>Kompetens ger kraft.</span></H1>
          <H1 className='hero-headline-2'><span>Fler och bättre jobb.</span></H1>
          <H1 className='hero-headline-3'><span>Balans i arbetslivet.</span></H1>
          */}
        </HeadlineContainer>
      </ModuleContainer>
    )
  }
}

export default HeroVideoModule;
