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

import RecommendationCards from '../RecommendationCards'

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
    if (!this.props.data.user_data.elected.user_entered_data) {
      const oldState = this.state;
      const self = this;
      let count = 0;
      const work_environment_value = Array.from({length: 3}, () => this.getRandomInt(0, 10));
      const equality_value = Array.from({length: 3}, () => this.getRandomInt(0, 10));
      const workplace_interest_value = Array.from({length: 3}, () => this.getRandomInt(0, 10));
      const impact_value = Array.from({length: 3}, () => this.getRandomInt(0, 10));
      const safe_workspace_value = Array.from({length: 3}, () => this.getRandomInt(0, 10));
      function myFunction() {
          count++;
          if(count > 2) {
            self.setState(oldState);
            clearInterval(timeout);
          }
          else {
            self.setState({
              work_environment_value: safe_workspace_value[count],
              equality_value: equality_value[count],
              safe_workspace_value: safe_workspace_value[count],
              impact_value: impact_value[count],
              safe_workspace_value: safe_workspace_value[count]
            }); 
            self.handleDataChange(
              'elected',
              {
                work_environment_value: safe_workspace_value[count],
                equality_value: equality_value[count],
                safe_workspace_value: safe_workspace_value[count],
                impact_value: impact_value[count],
                safe_workspace_value: safe_workspace_value[count]
              },
            ); 
          }
      }
      const timeout = setInterval(myFunction, 1500);
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

    const Cards = this.props.showCards ? (
      <Box width={1/2} mt={120}>
        <RecommendedTag>Rekommenderas för dig:</RecommendedTag>
        <RecommendationCards data={this.props.data} rows={2} columns={2} sortBy="elected" onCardClick={this.props.onCardClick}></RecommendationCards>
      </Box>
    ) : (false);

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
          {Cards}
        </Flex>

      </Container>
    )
  }
}

export default ElectedInteraction;
