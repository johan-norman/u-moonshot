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
    if (!this.props.data.user_data.work_environment.user_entered_data) {
      this.state.tagsData.map((tag, index) => {
        return (tag.active = false);
      });
      let newState = Object.assign({}, this.state);
      const self = this;
      let count = -1;
      const randomTags = Array.from({length: 6}, () => this.getRandomInt(0, self.state.tagsData.length-1));
      function myFunction() {
          count++;
          if(count > randomTags.length - 1) {
            clearInterval(timeout);
          }
          else {
            newState.tagsData[randomTags[count]].active = true;
            self.setState(newState);
          }
      }
      const timeout = setInterval(myFunction, 300);
    }
  }

  getRandomInt(min, max) {
      if (max < min) {
          // Swap min and max
          [min, max] = [min, max];
      }

      // Generate random number n, where min <= n <= max
      let range = max - min + 1;
      return Math.floor(Math.random() * range) + min;
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
        <StyledTagItem key={tag.title + index} active={tag.active} onClick={this.handleClick.bind(this, index)} hovered={tag.hovered}>
          {tag.title}
        </StyledTagItem>
      );
    })
    const Cards = this.props.showCards ? (
      <div>
      <RecommendedTag>Rekommenderas för dig:</RecommendedTag>
      <RecommendationCards data={this.props.data} rows={2} columns={4} scoreBy='environment' onCardClick={this.props.onCardClick}></RecommendationCards>
      </div>
    ) : (false);


    return(
      <div>

        <Flex>
          <Box width={2/3}>
              <H2>Vad passar in på<br/>din arbetsplats?</H2>
          </Box>
          <Box width={1/3}>
            <div>
              <p></p>
            </div>
          </Box>
        </Flex>

        <Flex mb={20}>
          <Box width={1/1}>
            {renderTags}
          </Box>
        </Flex>

        {Cards}

      </div>
    )
  }
}

export default WorkEnvironmentInteraction;
