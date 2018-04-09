import React from 'react'
import styled from 'styled-components';
import Charming from 'react-charming'
import { TimelineMax, TweenMax, Elastic } from 'gsap';
import { Flex, Box } from 'grid-styled'
import H2 from '../../components/H2'
import H3 from '../../components/H3'

const ModuleContainer = styled.section`
min-height: 500px;
padding: 4% 10% 9% 10%;
position: relative;

.chapter-container {
  top: 268px;
}

h2 {
  font-size: 5.4vw;
  color: #7D7D7D;
  line-height: 110%;
  margin: 0.5em 0em;

  span {
    color: #000;
    position: relative;

    &:before {
      content: '';
      height: 2px;
      width: 100%;
      position: absolute;
      left: 0;
      bottom: 15px;
      border-bottom: 1px dashed #000;
    }
  }

}

.chapter-text-container {
  color: #fff;
}

.chapter-line {
  background: #fff;
  opacity: 1;
}

h3 {
  color: #000;
}
`;

const SentenceFormContainer = styled.section`
  font-size: 5.2vw;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  letter-spacing: -1px;
  line-height: 1.2em;
  color: #7D7D7D;

  .sf-field {
    display: inline-block;
    position: relative;
    a {
      color: #484848;
      border-bottom: 1px dashed #484848;
      cursor: pointer;
      background: #fff;
      line-height: inherit;

      &:hover {
        background: #f2f2f2;
      }

    }

    &.sf-field-open {
      z-index: 100;
        ul {
          visibility: visible;
        	opacity: 1;
        	transform: translateY(-50%) scale(1);
        	transition: visibility 0s 0s, opacity 0.3s, transform 0.3s;
        }
    }

  }

  .sf-field ul {
    list-style: none;
  	margin: 0;
  	padding: 0;
    position: absolute;
    visibility: hidden;
    background: #76C3BD;
    left: -0.5em;
    top: 50%;
    font-size: 80%;
    opacity: 0;
    transform: translateY(-40%) scale(0.9);
    transition: visibility 0s 0.3s, opacity 0.3s, transform 0.3s;
  }

  .sf-field ul li {
  	color: #fff;
  	position: relative;
  }

  .sf-dd ul li {
  	padding: 0 1.5em 0 0.5em;
  	cursor: pointer;
  	white-space: nowrap;
  }

  .sf-dd ul li.sf-dd-checked {
  	color: #478982;
  }

  .sf-slider .sf-slider-container {
    display: none;
  }

  .sf-slider-container {
    display: none;
  }

  .sf-overlay {
  	position: fixed;
  	top: 0;
  	left: 0;
  	width: 100%;
  	height: 100%;
  	background: rgba(0,0,0,0.5);
  	opacity: 0;
  	z-index: 99;
  	visibility: hidden;
  	transition: visibility 0s 0.3s, opacity 0.3s;
  }

  .sf-field.sf-field-open ~ .sf-overlay {
  	opacity: 1;
  	visibility: visible;
  	-webkit-transition-delay: 0s;
  	-moz-transition-delay: 0s;
  	transition-delay: 0s;
  }

`;

const WorkTitles = [

];

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
      showExperienceDropdown: false
    };
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

  componentDidMount() {
      console.log(this.state);
  }

  render() {
    return(
      <div className="profile-section-container">
        <ModuleContainer>
          <Flex>
            <Box width={1/2}/>
            <Box width={1/2}>
              <H3>
                Vi vill kunna ge dig så relevant information som möjligt och för att kunna göra det behöver vi veta lite mer om dig.
              </H3>
            </Box>
          </Flex>

          <Flex>
            <Box width={3/3}>
              <SentenceFormContainer>
                Jag jobbar som&nbsp;
                  <div className={"sf-field sf-dd " + (this.state.showWorkDropdown ? 'sf-field-open' : '')}>
          	        <a className="sf-field-toggle" onClick={this.toggleWorkDropdown.bind(this)}>Systemutvecklare</a>
            	      <ul>
                  		<li className="sf-dd-checked">Systemutvecklare</li>
                  		<li>Systemutvecklare 1</li>
                  		<li>Systemutvecklare 2</li>
                  		<li>Systemutvecklare 3</li>
                  		<li>Systemutvecklare 4</li>
                  	</ul>
                  </div>,
                  <br/>jag tjänar&nbsp;
                  <div className={"sf-field sf-slider " + (this.state.showSalaryDropdown ? 'sf-field-open' : '')}>
          	        <a className="sf-field-toggle" onClick={this.toggleSalaryDropdown.bind(this)}>35 000 kr</a>
            	      <div className="sf-slider-container">

                    </div>
                  </div> och har&nbsp;
                  <div className={"sf-field sf-slider " + (this.state.showExperienceDropdown ? 'sf-field-open' : '')}>
          	        <a className="sf-field-toggle" onClick={this.toggleExperienceDropdown.bind(this)}>6 års</a>
            	      <div className="sf-slider-container">

                    </div>
                  </div> erfarenhet i yrket.
                  <div className="sf-overlay" onClick={this.closeAllDropdowns.bind(this)}></div>
              </SentenceFormContainer>
            </Box>
          </Flex>
        </ModuleContainer>
      </div>
    )
  }
}

export default CareerInteraction;
