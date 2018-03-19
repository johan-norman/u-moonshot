import React from 'react'
import styled from 'styled-components';
import H2 from '../../components/H2'
import H3 from '../../components/H3'
import ChapterNumberLine from '../../components/ChapterNumberLine'
import { TimelineMax, TweenMax, Elastic } from 'gsap';
import { Flex, Box } from 'grid-styled'
import Card from '../../components/Card'

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

      </div>
    )
  }
}

export default ProfileSection;
