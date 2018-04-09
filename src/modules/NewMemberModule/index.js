import React from 'react'
import styled from 'styled-components';
import Charming from 'react-charming'
import { TimelineMax, TweenMax, Elastic } from 'gsap';
import { Flex, Box } from 'grid-styled'
import Button from '../../components/Button'

const ModuleContainer = styled.section`

`;

class NewMemberModule extends React.Component{

  constructor(props){
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return(
      <ModuleContainer style={{backgroundColor: this.props.inverted ? "#fff" : "#F0F0F0"}}>
        <Flex pt={50} pb={50}>
          <Box width={1/2} px={2}>
            <h2>{this.props.title}</h2>
            <p>{this.props.subtext}</p>
            <Button to="/bli-medlem" text="Bli medlem" />
          </Box>
          <Box width={1/2} px={2}>
            <div className="tab-container">
              <div className="tab-content">
                <p>Fyll i ditt nummer så ringer vi upp och berättar allt</p>
                <input type="number" placeholder="T.ex: 070 123 45 678" />
                <Button to="/bli-medlem" text="Ring upp mig" />
                <a href="#">Få mail istället?</a>
              </div>
            </div>
            <div className="tabs-nav">
              <nav>
                <a href="#">
                  <b>Ring upp mig</b>
                  <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                </a>
                <a href="#">
                  <b>Chatta live</b>
                  <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                </a>
                <a href="#">
                  <b>Följ oss</b>
                  <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                </a>
              </nav>
            </div>
          </Box>
        </Flex>
      </ModuleContainer>
    )
  }
}

export default NewMemberModule;
