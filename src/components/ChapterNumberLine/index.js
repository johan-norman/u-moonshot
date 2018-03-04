import React from 'react'
import styled from 'styled-components';
import Charming from 'react-charming'
import { TimelineMax, TweenMax, Elastic } from 'gsap';

const Container = styled.div`
  position: relative;
  display: inline-block;
  transform: rotate(-90deg);
  position: absolute;
  left: -50px;
  top: 168px;
`;

const TextContainer = styled.div`
  display: inline-block;
  font-weight: 700;
  font-size: 17px;
  color: #293662;

  span {
    color: #1FA22E;
  }

`;

const Line = styled.div`
  width: 115px;
  height: 1px;
  opacity: 0.62;
  background: #293662;
  display: inline-block;
  position: relative;
  left: 30px;
  top: -4px;
`;

//<H1>Kompetens ger kraft.<br />Fler och bättre jobb.<br />Balans i arbetslivet.</H1>
class ChapterNumberLine extends React.Component{

  constructor(props){
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return(
      <Container className="chapter-container">
        <TextContainer className="chapter-text-container">
          <span>{this.props.sectionnumber}</span>
          &nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;{this.props.sectiontitle}
        </TextContainer>
        <Line className="chapter-line" />
      </Container>
    )
  }
}

export default ChapterNumberLine;
