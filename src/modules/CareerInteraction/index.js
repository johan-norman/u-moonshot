import React from 'react'
import styled from 'styled-components';
import Charming from 'react-charming'
import { TimelineMax, TweenMax, Elastic } from 'gsap'
import debounce from 'lodash/debounce'
import { Flex, Box } from 'grid-styled'
import delay from 'lodash/delay';
import H2 from '../../components/H2'
import H3 from '../../components/H3'
import Container from '../../components/Container'
import SentenceFormContainer from '../../components/SentenceFormContainer'
import RangeSlider from '../../components/RangeSlider'
import Slider from 'react-rangeslider';
import RecommendedationCards from '../RecommendationCards';

class CareerInteraction extends React.Component{

  constructor(props){
    super(props);
    this.toggleWorkDropdown = this.toggleWorkDropdown.bind(this);
    this.toggleSalaryDropdown = this.toggleSalaryDropdown.bind(this);
    this.toggleExperienceDropdown = this.toggleExperienceDropdown.bind(this);
    this.closeAllDropdowns = this.closeAllDropdowns.bind(this);
    this.state = {
      showWorkDropdown: false,
      showSalaryDropdown: false,
      showExperienceDropdown: false,
      salaryValue: this.props.data.user_data.career.salary,
      workTitle: this.props.data.user_data.career.job_title,
      experienceValue: this.props.data.user_data.career.experience,
      showRows: 2
    };

    this.handleDataChange = debounce(this.handleDataChange.bind(this), 500);
    this.showMore = this.showMore.bind(this);
  }

  componentDidMount() {
    if (!this.props.data.user_data.career.user_entered_data) {
      const oldState = this.state;
      const self = this;
      let count = 0;
      const randomSalaries = Array.from({length: 12}, () => this.getRandomInt(20000, 50000));
      const randomWorkTitles = Array.from({length: 12}, () => this.getRandomInt(0, 50));
      const randomExperience = Array.from({length: 12}, () => this.getRandomInt(1, 30));
      function myFunction() {
          count++;
          if(count > 11) {
            self.setState(oldState);
            clearInterval(timeout);
          }
          else {
            self.setState({
              salaryValue: randomSalaries[count],
              workTitle: self.props.data.user_data.work_titles[randomWorkTitles[count]],
              experienceValue: randomExperience[count]
            }); 
          }
      }
      const timeout = setInterval(myFunction, 1000);
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

  handleDataChange(key, payload) {
    this.props.onDataChange(key, payload);
    this.forceUpdate();
  }

  toggleWorkDropdown(item) {
    this.setState(prevState => ({
      showWorkDropdown: !this.state.showWorkDropdown
    }));
  }

  toggleSalaryDropdown(item) {
    this.setState(prevState => ({
      showSalaryDropdown: !this.state.showSalaryDropdown
    }));
  }

  toggleExperienceDropdown(item) {
    this.setState(prevState => ({
      showExperienceDropdown: !this.state.showExperienceDropdown
    }));
  }

  closeAllDropdowns(){
    this.setState({
      showWorkDropdown: false,
      showSalaryDropdown: false,
      showExperienceDropdown: false
    });
  }

  changeWorkTitle = itemValue => {
    this.handleDataChange('career', {job_title: itemValue});
    this.setState({
      workTitle: itemValue
    })
    this.closeAllDropdowns();
  };

  // SALARY SLIDER
  handleSalaryChangeStart = () => {
    console.log('Change event started')
  };

  handleSalaryChange = salaryValue => {
    this.handleDataChange('career', {salary: salaryValue});
    this.setState({
      salaryValue: salaryValue
    })
  };

  handleSalaryChangeComplete = () => {
    console.log('Change event completed')
  };

  // EXPERIENCE SLIDER
  handleExperienceChangeStart = () => {
    console.log('Change event handleExperienceChangeStart')
  };

  handleExperienceChange = experienceValue => {
    if (this.state.experienceValue !== experienceValue) {
      this.handleDataChange('career', {experience: experienceValue});
      this.setState({
        experienceValue: experienceValue
      })
    }
  };

  handleExperienceChangeComplete = () => {
    console.log('Change event completed')
  };

  componentDidUpdate(nextProps) {
      if (nextProps.data.user_data.career.job_title &&  nextProps.data.user_data.career.job_title !== this.state.workTitle) {
        console.log('changed');
        //this.setState({
        //  workTitle: nextProps.data.user_data.career.job_title
        //});
      }
  }

  showMore() {
    this.setState({
      showRows: this.state.showRows+1
    })
  }

  render() {

    const salaryValue = this.state.salaryValue;
    const experienceValue = this.state.experienceValue;
    const renderWorkTitles = this.props.data.user_data.work_titles.map((worktitle, index) => {
      return (
          <li key={worktitle + index} onClick={this.changeWorkTitle.bind(this, worktitle)}>
            {worktitle}
          </li>
      );
    })

    const Cards = this.props.showCards ? (
      <div>
        <RecommendedationCards data={this.props.data} rows={this.state.showRows} columns={4} sortBy='career' onCardClick={this.props.onCardClick}></RecommendedationCards>
        <button className="load-more-button" onClick={this.showMore}>Visa fler</button>
      </div>
    ) : ( false );

    const subtitle = this.props.showCards ? (
       <Flex>
          <Box width={1/2}>
            <H3>
              Vi vill kunna ge dig så relevant information som möjligt och för att kunna göra det behöver vi veta lite mer om dig.
            </H3>
          </Box>
        </Flex>

    ) : ( false );


    return(
      <div className="profile-section-container">
          {subtitle}
          <Flex>
            <Box width={3/3}>
              <SentenceFormContainer>
                Jag jobbar som&nbsp;
                  <div className={"sf-field sf-dd " + (this.state.showWorkDropdown ? 'sf-field-open' : '')}>
          	        <a className="sf-field-toggle" onClick={this.toggleWorkDropdown.bind(this)}>{this.state.workTitle}</a>
            	      <ul>
                  		{renderWorkTitles}
                  	</ul>
                  </div>,
                  <br/>jag tjänar&nbsp;
                  <div className={"sf-field sf-slider " + (this.state.showSalaryDropdown ? 'sf-field-open' : '')}>
          	        <a className="sf-field-toggle" onClick={this.toggleSalaryDropdown.bind(this)}>{this.state.salaryValue} kr</a>
            	      <div className="sf-slider-container">

                      <RangeSlider>
                        <div className='slider'>
                          <Slider
                            min={0}
                            max={99999}
                            step={1000}
                            value={salaryValue}
                            onChangeStart={this.handleSalaryChangeStart}
                            onChange={this.handleSalaryChange}
                            onChangeComplete={this.handleSalaryChangeComplete}
                          />
                          <div className='value'>Din lön: {salaryValue} kr</div>
                        </div>
                      </RangeSlider>

                    </div>
                  </div> och har&nbsp;
                  <div className={"sf-field sf-slider " + (this.state.showExperienceDropdown ? 'sf-field-open' : '')}>
          	        <a className="sf-field-toggle" onClick={this.toggleExperienceDropdown.bind(this)}>{this.state.experienceValue} års</a>
            	      <div className="sf-slider-container">

                      <RangeSlider>
                        <div className='slider'>
                          <Slider
                            min={0}
                            max={50}
                            step={1}
                            value={experienceValue}
                            onChangeStart={this.handleExperienceChangeStart}
                            onChange={this.handleExperienceChange}
                            onChangeComplete={this.handleExperienceChangeComplete}
                          />
                          <div className='value'>Erfarenhet: {experienceValue} år</div>
                        </div>
                      </RangeSlider>

                    </div>
                  </div> erfarenhet i yrket.
                  <div className="sf-overlay" onClick={this.closeAllDropdowns.bind(this)}></div>
              </SentenceFormContainer>
            </Box>
          </Flex>
          {Cards}
          
 
      </div>
    )
  }
}

export default CareerInteraction;
