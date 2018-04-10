import React from 'react'
import styled from 'styled-components';
import H2 from '../../components/H2'
import H3 from '../../components/H3'
import ChapterNumberLine from '../../components/ChapterNumberLine'
import { TimelineMax, TweenMax, Elastic } from 'gsap';
import { Flex, Box } from 'grid-styled';
import Card from '../../components/Card';
import { SalaryHorizontal, TimeHorizontal } from '../../components/ValueSliders';
import Tag from '../../components/Tag';

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
      </div>
    )
  }
}

export default ProfileSection;
