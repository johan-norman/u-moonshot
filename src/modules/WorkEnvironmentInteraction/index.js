import React from 'react'
import styled from 'styled-components';
import Charming from 'react-charming'
import { TimelineMax, TweenMax, Elastic } from 'gsap';
import { Flex, Box } from 'grid-styled'
import H2 from '../../components/H2'

class WorkEnvironmentInteraction extends React.Component{

  constructor(props){
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return(
      <Flex>
        <div>
        <H2>Vad passar in på<br/>din arbetsplats?</H2>
        </div>

      </Flex>
    )
  }
}

export default WorkEnvironmentInteraction;
