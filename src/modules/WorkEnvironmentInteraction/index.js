import React from 'react'

import styled from 'styled-components';
import Charming from 'react-charming'
import { TimelineMax, TweenMax, Elastic } from 'gsap';
import { Flex, Box } from 'grid-styled'
import H2 from '../../components/H2'
import DelayedComponent from '../../components/DelayedComponent'
import Container from '../../components/Container'
import StyledCard from '../../components/StyledCard'
import StyledTagItem from '../../components/StyledTagItem'
import RecommendedTag from '../../components/RecommendedTag'

import orderBy from 'lodash/orderBy'

import './style.css';

const renderCards = function(data) {
    var groupSize = 4;
    const CardsData = data.cards_data;
    const tags = data.user_data.work_environment.tags;
    let SelectedTags = tags.map(tag => {
      if (tag.active) return tag.title;
    });
    let CardsDataScored = CardsData.map(function(card) {
      let score = 0;
      card.tags.forEach(tag => {
        if (SelectedTags.includes(tag)) score++;
      })
      let ScoredCard = Object.assign({}, card);
      ScoredCard.score = score;
      return ScoredCard;
    });
    CardsDataScored = orderBy(CardsDataScored, 'score', 'desc')
    let waitCounter = 1;
    var rows = CardsDataScored.map(function(card, index) {
        waitCounter++;
        // map content to html elements
        if (index < 8) {
        return(
          <DelayedComponent wait={waitCounter*110} key={card.title + index}>
          <Box width={300} mx={"8px"} className="show animated-box">
            <StyledCard key={card.title + index}>
                <div className="card-image" style={ { backgroundImage: `url(${ card.imgsrc })` } }></div>
                <div className="card-text-container">
                  <p className="category-text">{card.category}</p>
                  <h3>{card.title}</h3>
                </div>
            </StyledCard>
          </Box>
          </DelayedComponent>
        )
        }
    }).reduce(function(r, element, index) {
        // create element groups with size 3, result looks like:
        // [[elem1, elem2, elem3], [elem4, elem5, elem6], ...]
        index % groupSize === 0 && r.push([]);
        r[r.length - 1].push(element);
        return r;
    }, []).map(function(rowContent, index) {
        // surround every group with 'row'
        return <Flex key={index}>{rowContent}</Flex>;
    });
    return <div className="cards-container">{rows}</div>;
}

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
      <Container>

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
        {renderCards(this.props.data)}

      </Container>
    )
  }
}

export default WorkEnvironmentInteraction;
