import React from 'react'
import styled from 'styled-components';
import H1 from '../../components/H1'
import UnionenVideoSrc from './unionen_compressed.mp4'
import Charming from 'react-charming'
import { TimelineMax, TweenMax, Elastic } from 'gsap';

const HeroVideo = styled.section`
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

  video {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: 1;
    width: 100%;
    height: auto;
  }

  .headline-wrapper {
    position: relative;
    z-index: 2;
  }

  .stopfade {
   opacity: .5;
  }
`;

//<H1>Kompetens ger kraft.<br />Fler och bättre jobb.<br />Balans i arbetslivet.</H1>
class HeroVideoModule extends React.Component{

  constructor(props){
    super(props);
  }

  componentDidMount() {
    // Start animation timeline with greensock
    var tl = new TimelineMax();
    tl
      .staggerFrom(".hero-headline span", 0.1, {yPercent: -100, autoAlpha:0}, 0.15);

    tl.play();
  }

  render() {
    return(
      <HeroVideo>
        <video poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/polina.jpg" id="bgvid" playsInline autoPlay muted loop>
          <source src={UnionenVideoSrc} type="video/mp4" />
        </video>
        <div className="headline-wrapper">
          <Charming className='hello' letters={"Kompetens ger kraft. Fler och bättre jobb. Balans i arbetslivet."} render={(letters) => (
            <H1 className='hero-headline'>{letters}</H1>
          )} />
        </div>
      </HeroVideo>
    )
  }
}

export default HeroVideoModule;
