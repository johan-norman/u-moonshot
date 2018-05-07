import React from 'react'

import styled from 'styled-components';
import Charming from 'react-charming'
import { TimelineMax, TweenMax, Elastic } from 'gsap';
import { Flex, Box } from 'grid-styled'
import H2 from '../../components/H2'

import Container from '../../components/Container'
import StyledTagItem from '../../components/StyledTagItem'
import RecommendedTag from '../../components/RecommendedTag'
import RecommendationCards from '../RecommendationCards'

import './style.css';


class WorkEnvironmentInteraction extends React.Component{

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleDataChange = this.handleDataChange.bind(this);

    this.state = {
      tagsData: this.props.data.user_data.work_environment.tags
    };

    const CardsData = this.props.data.cards_data;

  }

  componentDidMount() {
  }

  handleClick = index => {
    //WorkPlaceTags[index].active = !WorkPlaceTags[index].active
    this.setState(prevState => ({
      //tagsData: WorkPlaceTags
    }));
    this.props.onDataChange('work_environment', index);
  }

  handleDataChange() {

  }

  render() {

    const renderTags = this.state.tagsData.map((tag, index) => {
      return (
        <StyledTagItem key={tag.title + index} active={tag.active} onClick={this.handleClick.bind(this, index)}>
          {tag.title}
        </StyledTagItem>
      );
    })



    return(
      <div>

        <Flex>
          <Box width={2/3}>
              <H2>Vad passar in på<br/>din arbetsplats?</H2>
          </Box>
          <Box width={1/3}>
            <div>
              <p>lorem ipsum</p>
            </div>
          </Box>
        </Flex>

        <Flex mb={20}>
          <Box width={1/1}>
            {renderTags}
          </Box>
        </Flex>

        <RecommendedTag>Rekommenderas för dig:</RecommendedTag>
        <RecommendationCards data={this.props.data} rows={2} columns={4}></RecommendationCards>

      </div>
    )
  }
}

export default WorkEnvironmentInteraction;
