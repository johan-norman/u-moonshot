import React from 'react'
import styled from 'styled-components';
import H2 from '../../components/H2'
import ChapterNumberLine from '../../components/ChapterNumberLine'
import { TimelineMax, TweenMax, Elastic } from 'gsap';

const ModuleContainer = styled.section`
  min-height: 500px;
  padding: 0 10%;
  position: relative;
`;

class IntroSection extends React.Component{

  constructor(props){
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return(
      <ModuleContainer>
        <ChapterNumberLine sectionnumber="01" sectiontitle="Lorem ipsum" />
        <H2>Kompetens<br/>ger kraft.</H2>
      </ModuleContainer>
    )
  }
}

export default IntroSection;
