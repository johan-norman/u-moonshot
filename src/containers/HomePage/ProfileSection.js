import React from 'react'
import styled from 'styled-components';
import H2 from '../../components/H2'
import H3 from '../../components/H3'
import ChapterNumberLine from '../../components/ChapterNumberLine'
import { TimelineMax, TweenMax, Elastic } from 'gsap';
import { Flex, Box } from 'grid-styled';
import Card from '../../components/Card';
import { SalaryHorizontal, TimeHorizontal } from '../../components/ValueSliders';
import Tags from '../../components/Tags';

const ModuleContainer = styled.section`
  min-height: 500px;
  padding: 4% 10% 9% 10%;
  position: relative;
  /*background: #020B2A;*/

  /* Rectangle 8 Copy:*/
  background-image: linear-gradient(220deg, #F45454 0%, #EF8D56 100%);

  .chapter-container {
    top: 268px;
  }

  h2 {
    font-size: 5.4vw;
    color: #561C05;
    line-height: 110%;
    margin: 0.5em 0em;

    span {
      color: #fff;
      position: relative;

      &:before {
        content: '';
        height: 2px;
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 15px;
        border-bottom: 1px dashed #fff;
      }
    }

  }

  .chapter-text-container {
    color: #fff;
  }

  .chapter-line {
    background: #fff;
    opacity: 1;
  }

  h3 {
    color: #fff;
  }

`;

const SecondaryText = styled.p`
  opacity: 0.66;
  font-size: 1.1vw;
  color: rgba(255, 255, 255, .95);
  letter-spacing: 0;
  line-height: 1.5;
`;

const ProfileCardsContainer = styled.section`
  position: relative;
  z-index: 5;
`;

const Button = styled.button`
  border-radius: 2px;
  padding: 1em 2em;
  margin: 0 1em;
  background: transparent;
  color: #000000;
  border: 2px solid #000000;
`;

class ProfileSection extends React.Component{

  constructor(props){
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return(
      <div className="profile-section-container">
        <ModuleContainer>
          <ChapterNumberLine sectionnumber="02" sectiontitle="Skapa profil" />
          <Flex>
            <Box width={1/2}/>
            <Box width={1/2}>
              <H3>
                Unionen finns för och kan hjälpa en mängd olika personer. För att visa ett så relevant innehåll som möjligt skulle vi vilja veta lite mer om dig. Lorem ipsum dolor sit amet.
              </H3>
            </Box>
          </Flex>

          <Flex>
            <Box width={3/3}>
              <H2>För dig som: <span>Systemutvecklare</span><br/>med en lön på <span>35 000</span> kr och med<br/><span>6 års</span> erfarenhet i yrket.</H2>
            </Box>
          </Flex>

          <Flex>
            <Box width={1/2}/>
            <Box width={1/2}>
              <SecondaryText>
                Du kan alltid spara och utveckla din profil för ett mer personligt bemötande Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam posuere quis lacus ut malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis vitae placerat felis.
              </SecondaryText>
            </Box>
          </Flex>
        </ModuleContainer>

        <ProfileCardsContainer>
          <Flex mt={-110}>
            <Box width={1/5} m={15}>
              <Card cardType="ImageCard" title="Förtroendevald" bodytext="lorem ipsum" />
            </Box>
            <Box width={1/5} m={15}>
              <Card cardType="ImageCard" title="Förtroendevald" bodytext="lorem ipsum" />
            </Box>
            <Box width={1/5} m={15}>
              <Card cardType="ImageCard" title="Förtroendevald" bodytext="lorem ipsum" />
            </Box>
            <Box width={1/5} m={15}>
              <Card cardType="ImageCard" title="Förtroendevald" bodytext="lorem ipsum" />
            </Box>
            <Box width={1/5} m={15}>
              <Card cardType="ImageCard" title="Förtroendevald" bodytext="lorem ipsum" />
            </Box>
          </Flex>
        </ProfileCardsContainer>

        <ModuleContainer>
        <ChapterNumberLine sectionnumber="02" sectiontitle="Skapa profil" />
          <Flex mt={-60}>
            <Box width={1/2} m={50}>
              <H2>
                Berätta mer om dig.
              </H2>
              <SecondaryText>
                Du kan alltid spara och utveckla din profil för ett mer personligt bemötande Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Nam posuere quis lacus ut malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.
              </SecondaryText>
            </Box>
            <Box width={1/2} m={50}>
              <Button>Logga in med din profil</Button>
              <Button>Spara profil</Button>
            </Box>
          </Flex>

          <Flex>
            <Box width={1/2} m={50}>
              <H3>
                Lorem ipsum dolor sit amet?
              </H3>

              <SalaryHorizontal />
              <TimeHorizontal />
               <br/>
               <br/>
              Lorem ipsum dolor sit amet? <br/>
              <Tags />
            </Box>

            <Box width={1/2} m={50}>
              Rekommenderas för dig: <br/>
              2x2 imagecards
            </Box>
          </Flex>
        </ModuleContainer>

      </div>
    )
  }
}

export default ProfileSection;
