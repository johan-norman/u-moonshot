import React from 'react'
import styled from 'styled-components';
import H2 from '../../components/H2'
import H3 from '../../components/H3'
import ChapterNumberLine from '../../components/ChapterNumberLine'
import { TimelineMax, TweenMax, Elastic } from 'gsap';
import { Flex, Box } from 'grid-styled'
import OnVisible from 'react-on-visible';
import Charming from 'react-charming'
import CardSlider from '../../components/CardSlider'
import Card from '../../components/Card'


const ModuleContainer = styled.section`
  padding: 0 10%;
  position: relative;

  h3 {
    font-weight: 400;
    transform: translate(-7%, 0);
    opacity: 0;
  }

  .chapter-container {
    top: 100px;
    opacity: 0;
  }

  .animate-on-scroll {
    transform: translate(0, 40%);
    opacity: 0;
  }

  .section-headline-2 {
    margin-top: -10px;
  }

  h2 {
    overflow: hidden;
    position: relative;
    line-height: 110%;
    margin: 0;
    span {
      transform: translate(0, 100%);
      opacity: 0;
      display: inline-block;

      &.section-headline-2-3 {
        width: 27px;
      }

    }
  }


`;

class IntroSection extends React.Component{

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
      <div className="introsection-container">

        <ModuleContainer>
          <ChapterNumberLine sectionnumber="01" sectiontitle="Lorem ipsum" />
          <Flex alignItems="center" justifyContent="center">

            <Box width={2/3} pt={100}>
              <OnVisible onChange={this.animateHeadline} className="animate-on-scroll">
                <Charming className='section-headline-1' letters={"Kompetens"} render={(letters) => (
                    <H2>{letters}</H2>
                )} />
                <Charming className='section-headline-2' letters={"ger kraft."} render={(letters) => (
                    <H2>{letters}</H2>
                )} />
              </OnVisible>
            </Box>

            <Box width={1/3} pt={100}>
              <H3 className="introsection-lower-headline">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam posuere quis lacus ut malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.
              </H3>
            </Box>
          </Flex>
        </ModuleContainer>

          <CardSlider>
            <Box width={1/4} m={15}>
              <Card cardType="ImageCard" title="Råd & StödZ" bodytext="lorem ipsum" />
            </Box>
            <Box width={1/4} m={15}>
              <Card cardType="ImageCard" title="Hej" bodytext="lorem ipsum" />
            </Box>
            <Box width={1/4} m={15}>
              <Card cardType="ImageCard" title="Förtroendevald" bodytext="lorem ipsum" />
            </Box>
            <Box width={1/4} m={15}>
              <Card cardType="ImageCard" title="Om Unionen" bodytext="lorem ipsum" />
            </Box>
            <Box width={1/4} m={15}>
              <Card cardType="ImageCard" title="Förtroendevald" bodytext="lorem ipsum" />
            </Box>
            <Box width={1/4} m={15}>
              <Card cardType="ImageCard" title="Förtroendevald" bodytext="lorem ipsum" />
            </Box>
          </CardSlider>

          {/*
        <Flex mt={150}>
          <Box width={1/4} m={15}>
            <Card cardType="ImageCard" title="Förtroendevald" />
          </Box>
          <Box width={1/4} m={15}>
            <Card type="ImageCard" title="Medlemskap" />
          </Box>
          <Box width={1/4} m={15}>
            <Card type="ImageCard" title="Råd & Stöd" />
          </Box>
          <Box width={1/4} m={15}>
            <Card type="ImageCard" title="Om Unionen" />
          </Box>
        </Flex>
        */}

      </div>

    )
  }
}

export default IntroSection;
