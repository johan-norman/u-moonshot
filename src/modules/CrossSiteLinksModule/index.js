import React from 'react'
import styled from 'styled-components';
import H2 from '../../components/H2'
import H3 from '../../components/H3'
import ChapterNumberLine from '../../components/ChapterNumberLine'
import { TimelineMax, TweenMax, Elastic } from 'gsap';
import { Flex, Box } from 'grid-styled'
import OnVisible from 'react-on-visible';
import Charming from 'react-charming'
import { Link } from 'react-router-dom'

import './style.css';

class CrossSiteLinks extends React.Component{

  constructor(props){
    super(props);
  }

  componentDidMount() {

  }

  animateHeadline () {
    // Start animation timeline with greensock
    var tl = new TimelineMax({delay:0.3});
    tl
      .to('.introsection-container .chapter-container', .1, {top: 270, autoAlpha: 1, ease:"Sine.easeOut"})
      .to('.animate-on-scroll', .2, {y:0, autoAlpha: 1, force3D: true, ease:"Sine.easeOut"}, "ContainerAnim")
      .staggerTo('.section-headline-1 span', .4, {y:0, autoAlpha: 1, force3D: true, ease:"Sine.easeOut"}, 0.025, "ContainerAnim+=0.55")
      .staggerTo('.section-headline-2 span', .6, {y:0, autoAlpha: 1, force3D: true, ease:"Sine.easeOut"}, 0.025, "ContainerAnim+=0.55")
      .to('.introsection-lower-headline', .3, {x:0, autoAlpha: 1, force3D: true, ease:"Sine.easeOut"});

    tl.play();

    //.staggerTo('.introsection-container .card-container', .2, {y:0, autoAlpha: 1, force3D: true, ease:"Sine.easeOut"}, 0.05)
  }

  render() {
    return(
      <div className="image-box-wrap">
        <Flex className="image-box-container" alignItems="bottom" justifyContent="bottom" flexDirection={['column', 'unset']}>
          <Box width={[1, 1/2, 1/4]} className="image-box" style={{backgroundImage: 'url(/x0279.jpg)'}}>
            <Link to="/karriar">
              <div className="image-box-content">
                <span>01</span>
                <h2>Karriär</h2>
              </div>
            </Link>
          </Box>
          <Box width={[1, 1/2, 1/4]} className="image-box" style={{backgroundImage: 'url(/x0374.jpg)'}}>
            <Link to="/arbetsmiljo">
              <div className="image-box-content">
                <span>02</span>
                <h2>Arbetsmiljö</h2>
              </div>
            </Link>
          </Box>
          <Box width={[1, 1/2, 1/4]} className="image-box" style={{backgroundImage: 'url(/x0863.jpg)'}}>
            <Link to="/fortroendevald">
              <div className="image-box-content">
                <span>03</span>
                <h2>Förtroendevald</h2>
              </div>
            </Link>
          </Box>
          <Box width={[1, 1/2, 1/4]} className="image-box" style={{backgroundImage: 'url(/x0959.jpg)'}}>
            <Link to="/bli-medlem">
              <div className="image-box-content">
                <span>04</span>
                <h2>Bli medlem</h2>
              </div>
            </Link>
          </Box>
        </Flex>
      </div>

    )
  }
}

export default CrossSiteLinks;
