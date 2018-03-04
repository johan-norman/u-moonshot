import React from 'react'
import styled from 'styled-components';
import H2 from '../../components/H2'
import ChapterNumberLine from '../../components/ChapterNumberLine'
import { TimelineMax, TweenMax, Elastic } from 'gsap';

const ModuleContainer = styled.section`
  min-height: 500px;
  padding: 10% 10%;
  position: relative;
  background: #020B2A;

  .chapter-container {
    top: 268px;
  }

  h2 {
    font-size: 5.2vw;
    color: #B2D0FF;
    line-height: 110%;

    span {
      color: #6BD18E;
      position: relative;

      &:before {
        content: '';
        height: 2px;
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 15px;
        border-bottom: 1px dashed #6BD18E;
      }
    }

  }

  .chapter-text-container {
    color: #B2D0FF;
  }

  .chapter-line {
    background: #B2D0FF;
    opacity: 1;
  }

`;

class ProfileSection extends React.Component{

  constructor(props){
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return(
      <ModuleContainer>
        <ChapterNumberLine sectionnumber="02" sectiontitle="Skapa profil" />
        <H2>För dig som: <span>Systemutvecklare</span><br/>med en lön på <span>35 000</span> kr och med<br/><span>6 års</span> erfarenhet i yrket.</H2>
      </ModuleContainer>
    )
  }
}

export default ProfileSection;
