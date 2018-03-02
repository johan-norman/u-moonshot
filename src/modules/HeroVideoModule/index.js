import React from 'react'
import styled from 'styled-components';
import H1 from '../../components/H1'
import UnionenVideoSrc from './unionen_compressed.mp4'

const HeroVideo = styled.section`
  video {
    position: fixed;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -100;
    transform: translateX(-50%) translateY(-50%);
    background: url('//demosthenes.info/assets/images/polina.jpg') no-repeat;
    background-size: cover;
    transition: 1s opacity;
  }
  .stopfade {
   opacity: .5;
  }
`;

const src1 = "http://thenewcode.com/assets/videos/polina.webm";
const src2 = "http://thenewcode.com/assets/videos/polina.mp4";

export default () => (
  <HeroVideo>
    <video poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/polina.jpg" id="bgvid" playsInline autoPlay muted loop>
      <source src={UnionenVideoSrc} type="video/mp4" />
    </video>
    <div>
      <H1>Kompetens ger kraft.<br />Fler och bättre jobb.<br />Balans i arbetslivet.</H1>
    </div>
  </HeroVideo>
)
