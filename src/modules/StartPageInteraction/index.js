import React from 'react'
import styled from 'styled-components';
import Charming from 'react-charming'
import { TimelineMax, TweenMax, Elastic } from 'gsap';
import { Flex, Box } from 'grid-styled'

const ModuleContainer = styled.section`

`;

class StartPageInteraction extends React.Component{

  constructor(props){
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return(
      <ModuleContainer>
        <Flex>
          <Box></Box>
        </Flex>
      </ModuleContainer>
    )
  }
}

export default StartPageInteraction;
