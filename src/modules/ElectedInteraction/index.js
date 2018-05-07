import React from 'react'
import styled from 'styled-components';
import Charming from 'react-charming'
import { TimelineMax, TweenMax, Elastic } from 'gsap';
import { Flex, Box } from 'grid-styled'
import H2 from '../../components/H2'
import Slider from 'react-rangeslider';
import DelayedComponent from '../../components/DelayedComponent'

import Container from '../../components/Container'
import StyledCard from '../../components/StyledCard'
import RecommendedTag from '../../components/RecommendedTag'
import Preamble from '../../components/Preamble'
import RangeSlider from '../../components/RangeSlider'
import Tooltip from '../../components/Tooltip'

import orderBy from 'lodash/orderBy'
import debounce from 'lodash/debounce'

import './style.css'

class ElectedInteraction extends React.Component{

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      work_environment_value: this.props.data.user_data.elected.work_environment_value,
      equality_value: this.props.data.user_data.elected.equality_value,
      workplace_interest_value: this.props.data.user_data.elected.workplace_interest_value,
      impact_value: this.props.data.user_data.elected.impact_value,
      safe_workspace_value: this.props.data.user_data.elected.safe_workspace_value
    }

    this.handleDataChange = debounce(this.handleDataChange.bind(this), 500);
  }

  componentDidMount() {
  }

  renderCards(data) {
    var groupSize = 2;
    const CardsData = data.cards_data;
    const UserData = Object.assign({}, data.user_data.elected, this.state);
    //console.log(UserData);
    let CardsDataScored = CardsData.map(function(card) {
      let score = 0;
      score += UserData.work_environment_value * card.scores.work_environment_value;
      score += UserData.equality_value * card.scores.equality_value;
      score += UserData.workplace_interest_value * card.scores.workplace_interest_value;
      score += UserData.impact_value * card.scores.impact_value;
      score += UserData.safe_workspace_value * card.scores.safe_workspace_value;
      let ScoredCard = Object.assign({}, card);
      ScoredCard.score = score;
      return ScoredCard;
    });
    console.log(CardsDataScored.score);
    CardsDataScored = orderBy(CardsDataScored, 'score', 'desc')
    let waitCounter = 1;
    var rows = CardsDataScored.map(function(card, index) {
        if (index > 3) return;
        waitCounter++;
        // map content to html elements
        return(
          <DelayedComponent wait={waitCounter*110} key={card.title + index}>
          <Box width={300} mx={"8px"}>
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
    }).reduce(function(r, element, index) {
        // create element groups with size 3, result looks like:
        // [[elem1, elem2, elem3], [elem4, elem5, elem6], ...]
        index % groupSize === 0 && r.push([]);
        r[r.length - 1].push(element);
        return r;
    }, []).map(function(rowContent) {
        // surround every group with 'row'
        return <Flex>{rowContent}</Flex>;
    });
    return <div className="cards-container">{rows}</div>;
}

  handleClick = index => {

  }

  handleDataChange(key, payload) {
    this.props.onDataChange(key, payload);
  }

  // FIRST SLIDER - WORK ENVIRONMENT
  handleWorkEnvironmentChangeStart = () => {
    console.log('Change event handleExperienceChangeStart')
  };
  handleWorkEnvironmentChange = value  => {
    if (this.state.workEnvironmentValue !== value) {
      this.handleDataChange('elected', {work_environment_value: value});
      this.setState({
        work_environment_value: value
      })
    }
  };
  handleWorkEnvironmentChangeComplete = () => {
    console.log('Change event completed')
  };

  // SECOND SLIDER - EQUALITY
  handleEqualityChangeStart = () => {
    console.log('Change event handleExperienceChangeStart')
  };
  handleEqualityChange = value  => {
    if (this.state.equalityValue !== value) {
      this.handleDataChange('elected', {equality_value: value});
      this.setState({
        equality_value: value
      })
    }
  };
  handleEqualityChangeComplete = () => {
    console.log('Change event completed')
  };

  // THIRD SLIDER - impactValue
  handleWorkplaceInterestChangeStart = () => {
    console.log('Change event handleExperienceChangeStart')
  };
  handleWorkplaceInterestChange = value  => {
    if (this.state.workplaceInterestValue !== value) {
      this.handleDataChange('elected', {workplace_interest_value: value});
      this.setState({
        workplace_interest_value: value
      })
    }
  };
  handleWorkplaceInterestChangeComplete = () => {
    console.log('Change event completed')
  };

  // FOURTH SLIDER - Impact
  handleImpactChangeStart = () => {
    console.log('Change event handleExperienceChangeStart')
  };
  handleImpactChange = value  => {
    if (this.state.impactValue !== value) {
      this.handleDataChange('elected', {impact_value: value});
      this.setState({
        impact_value: value
      })
    }
  };
  handleImpactChangeComplete = () => {
    console.log('Change event completed')
  };

  // FIFTH SLIDER - Safe Workspace
  handleSafeWorkspaceChangeStart = () => {
    console.log('Change event handleExperienceChangeStart')
  };
  handleSafeWorkspaceChange = value  => {
    if (this.state.safeWorkspaceValue !== value) {
      this.handleDataChange('elected', {safe_workspace_value: value});
      this.setState({
        safe_workspace_value: value
      })
    }
  };
  handleSafeWorkspaceChangeComplete = () => {
    console.log('Change event completed')
  };

  render() {

    const workEnvironmentValue = this.state.work_environment_value;
    const equalityValue = this.state.equality_value;
    const workplaceInterestValue = this.state.workplace_interest_value;
    const impactValue = this.state.impact_value;
    const safeWorkspaceValue = this.state.safe_workspace_value;

    return(
      <Container className="container">

        <Flex pb={100}>
          <Box width={1/2} pr={140}>
            <H2>Vad brinner<br/>du för?</H2>
            <Preamble>Vi vill kunna ge dig så relevant information som möjligt och för att kunna göra det behöver vi veta lite mer om dig.</Preamble>

            <div className="slider-wrapper">

              <RangeSlider>
              
                <div className="question-label">En trivsam arbetsmiljö<Tooltip text="This is a tooltip text. It could be a short/long explanation of the element."></Tooltip></div>
                <div className="slider">
                  <div className="steps">
                    <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                  </div>
                  <Slider
                    min={0}
                    max={10}
                    step={1}
                    tooltip={false}
                    value={workEnvironmentValue}
                    onChangeStart={this.handleWorkEnvironmentChangeStart}
                    onChange={this.handleWorkEnvironmentChange}
                    onChangeComplete={this.handleWorkEnvironmentChangeComplete}
                  />
                </div>
                <div className="range-labels">
                  <span className="left-label">Lite</span>
                  <span className="right-label">Mycket</span>
                </div>
              </RangeSlider>

              <RangeSlider>
                <div className="question-label">En jämlik arbetsplats<Tooltip text="A short one"></Tooltip></div>
                <div className="slider">
                  <div className="steps">
                    <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                  </div>
                  <Slider
                    min={0}
                    max={10}
                    step={1}
                    tooltip={false}
                    value={equalityValue}
                    onChangeStart={this.handleEqualityChangeStart}
                    onChange={this.handleEqualityChange}
                    onChangeComplete={this.handleEqualityChangeComplete}
                  />
                </div>
                <div className="range-labels">
                  <span className="left-label">Lite</span>
                  <span className="right-label">Mycket</span>
                </div>
              </RangeSlider>

              <RangeSlider>
                <div className="question-label">Att ligga i framkant i arbetsplatsfrågor<Tooltip text="This is a tooltip text again. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "></Tooltip></div>
                <div className="slider">
                  <div className="steps">
                    <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                  </div>
                  <Slider
                    min={0}
                    max={10}
                    step={1}
                    tooltip={false}
                    value={workplaceInterestValue}
                    onChangeStart={this.handleWorkplaceInterestChangeStart}
                    onChange={this.handleWorkplaceInterestChange}
                    onChangeComplete={this.handleWorkplaceInterestChangeComplete}
                  />
                </div>
                <div className="range-labels">
                  <span className="left-label">Lite</span>
                  <span className="right-label">Mycket</span>
                </div>
              </RangeSlider>

              <RangeSlider>
                <div className="question-label">Möjlighet att påverka<Tooltip text="A short one"></Tooltip></div>
                <div className="slider">
                  <div className="steps">
                    <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                  </div>
                  <Slider
                    min={0}
                    max={10}
                    step={1}
                    value={impactValue}
                    tooltip={false}
                    onChangeStart={this.handleImpactChangeStart}
                    onChange={this.handleImpactChange}
                    onChangeComplete={this.handleImpactChangeComplete}
                  />
                </div>
                <div className="range-labels">
                  <span className="left-label">Lite</span>
                  <span className="right-label">Mycket</span>
                </div>
              </RangeSlider>

              <RangeSlider>
                <div className="question-label">En säker arbetsmiljö<Tooltip text="A short one"></Tooltip></div>
                <div className="slider">
                  <div className="steps">
                    <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                  </div>
                  <Slider
                    min={0}
                    max={10}
                    step={1}
                    tooltip={false}
                    value={safeWorkspaceValue}
                    onChangeStart={this.handleSafeWorkspaceChangeStart}
                    onChange={this.handleSafeWorkspaceChange}
                    onChangeComplete={this.handleSafeWorkspaceChangeComplete}
                  />
                </div>
                <div className="range-labels">
                  <span className="left-label">Lite</span>
                  <span className="right-label">Mycket</span>
                </div>
              </RangeSlider>

            </div>

          </Box>
          <Box width={1/2} mt={120}>
            <RecommendedTag>Rekommenderas för dig:</RecommendedTag>
            {this.renderCards(this.props.data)}
          </Box>
        </Flex>

      </Container>
    )
  }
}

export default ElectedInteraction;
