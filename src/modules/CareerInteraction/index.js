import React from 'react'
import styled from 'styled-components';
import Charming from 'react-charming'
import { TimelineMax, TweenMax, Elastic } from 'gsap';
import { Flex, Box } from 'grid-styled'
import H2 from '../../components/H2'
import H3 from '../../components/H3'
import Slider from 'react-rangeslider';

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

        .sf-slider-container {
          visibility: visible;
        	opacity: 1;
        	transform: translateY(-50%) scale(1);
        	transition: visibility 0s 0s, opacity 0.3s, transform 0.3s;
        }

    }

  }

  .sf-field ul, .sf-field .sf-slider-container {
    list-style: none;
  	margin: 0;
  	padding: 0;
    position: absolute;
    visibility: hidden;
    background: #484848;
    left: -0.5em;
    top: 50%;
    font-size: 80%;
    opacity: 0;
    transform: translateY(-40%) scale(0.9);
    transition: visibility 0s 0.3s, opacity 0.3s, transform 0.3s;
  }

  .sf-field ul {
    max-height: 400px;
    overflow: auto;
  }

  .sf-field ul li {
  	color: #fff;
  	position: relative;
    transition: visibility 0s 0.3s, opacity 0.3s, transform 0.3s;
    opacity: 0.5;
  }

  .sf-dd ul li {
  	padding: 0 1.5em 0 0.5em;
  	cursor: pointer;
  	white-space: nowrap;

    font-size: 70%;
    font-family: 'Karla', sans-serif;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 1.7em;

    &:hover {
      opacity: 1;
    }
  }

  .sf-dd ul li.sf-dd-checked {
  	color: #fff;
    opacity: 1;
  }

  .sf-slider .sf-slider-container {
    padding: 0 1.5em 0 0.5em;
    .value {
      font-size: 70%;
      font-family: 'Karla', sans-serif;
      font-weight: 400;
      letter-spacing: 0;
      line-height: 1.7em;
    }
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

const RangeSlider = styled.section`
.rangeslider {
    margin: 20px 0;
    position: relative;
    background: #e6e6e6;
    -ms-touch-action: none;
    touch-action: none;
}

.rangeslider,
.rangeslider .rangeslider__fill {
    display: block;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, .4)
}

.rangeslider .rangeslider__handle {
    background: #fff;
    border: 1px solid #ccc;
    cursor: pointer;
    display: inline-block;
    position: absolute;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .4), 0 -1px 3px rgba(0, 0, 0, .4)
}

.rangeslider .rangeslider__handle .rangeslider__active {
    opacity: 1
}

.rangeslider .rangeslider__handle-tooltip {
    width: 40px;
    height: 40px;
    text-align: center;
    position: absolute;
    background-color: rgba(0, 0, 0, .8);
    font-weight: 400;
    font-size: 14px;
    transition: all .1s ease-in;
    border-radius: 4px;
    display: inline-block;
    color: #fff;
    left: 50%;
    transform: translate3d(-50%, 0, 0)
}

.rangeslider .rangeslider__handle-tooltip span {
    margin-top: 12px;
    display: inline-block;
    line-height: 100%
}

.rangeslider .rangeslider__handle-tooltip:after {
    content: ' ';
    position: absolute;
    width: 0;
    height: 0
}

.rangeslider-horizontal {
    height: 12px;
    border-radius: 10px
}

.rangeslider-horizontal .rangeslider__fill {
    height: 100%;
    background-color: #1FA22E;
    border-radius: 10px;
    top: 0
}

.rangeslider-horizontal .rangeslider__handle {
    width: 30px;
    height: 30px;
    border-radius: 30px;
    top: 50%;
    transform: translate3d(-50%, -50%, 0)
}

.rangeslider-horizontal .rangeslider__handle:after {
    content: ' ';
    position: absolute;
    width: 16px;
    height: 16px;
    top: 6px;
    left: 6px;
    border-radius: 50%;
    background-color: #dadada;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .4) inset, 0 -1px 3px rgba(0, 0, 0, .4) inset
}

.rangeslider-horizontal .rangeslider__handle-tooltip {
    top: -55px
}

.rangeslider-horizontal .rangeslider__handle-tooltip:after {
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid rgba(0, 0, 0, .8);
    left: 50%;
    bottom: -8px;
    transform: translate3d(-50%, 0, 0)
}

.rangeslider-vertical {
    margin: 20px auto;
    height: 150px;
    max-width: 10px;
    background-color: transparent
}

.rangeslider-vertical .rangeslider__fill,
.rangeslider-vertical .rangeslider__handle {
    position: absolute
}

.rangeslider-vertical .rangeslider__fill {
    width: 100%;
    background-color: #7cb342;
    box-shadow: none;
    bottom: 0
}

.rangeslider-vertical .rangeslider__handle {
    width: 30px;
    height: 10px;
    left: -10px;
    box-shadow: none
}

.rangeslider-vertical .rangeslider__handle-tooltip {
    left: -100%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0)
}

.rangeslider-vertical .rangeslider__handle-tooltip:after {
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-left: 8px solid rgba(0, 0, 0, .8);
    left: 100%;
    top: 12px
}

.rangeslider-reverse.rangeslider-horizontal .rangeslider__fill {
    right: 0
}

.rangeslider-reverse.rangeslider-vertical .rangeslider__fill {
    top: 0;
    bottom: inherit
}

.rangeslider__labels {
    position: relative
}

.rangeslider-vertical .rangeslider__labels {
    position: relative;
    list-style-type: none;
    margin: 0 0 0 24px;
    padding: 0;
    text-align: left;
    width: 250px;
    height: 100%;
    left: 10px
}

.rangeslider-vertical .rangeslider__labels .rangeslider__label-item {
    position: absolute;
    transform: translate3d(0, -50%, 0)
}

.rangeslider-vertical .rangeslider__labels .rangeslider__label-item::before {
    content: '';
    width: 10px;
    height: 2px;
    background: #000;
    position: absolute;
    left: -14px;
    top: 50%;
    transform: translateY(-50%);
    z-index: -1
}

.rangeslider__labels .rangeslider__label-item {
    position: absolute;
    font-size: 14px;
    cursor: pointer;
    display: inline-block;
    top: 10px;
    transform: translate3d(-50%, 0, 0)
}
`;

const WorkTitles = [
  "Administratör",
  "Annonssäljare",
  "Apotekare",
  "Apoteksassistent",
  "Apotekschef",
  "Apotekstekniker",
  "Applikationsspecialist",
  "Art Director",
  "Besiktningstekniker (fordon)",
  "Beställare",
  "Butikschef (avdelningschef)",
  "CAD-ritare",
  "Controller",
  "Copywriter",
  "Drift- och underhållschef",
  "Drifttekniker IT",
  "Ekonom",
  "Ekonomiassistent",
  "Ekonomichef",
  "Fastighetsförvaltare",
  "Fastighetsmäklare",
  "Försäljningschef",
  "Grafisk formgivare/originalare",
  "Gruppchef",
  "Handläggare",
  "Hotellchef",
  "HR-chef",
  "HR-specialist",
  "Industridesigner",
  "Informationschef",
  "Informatör (kommunikatör)",
  "Ingenjör (tekniker)",
  "Inkassohandläggare",
  "Inköpare",
  "Inköps- och orderassistent",
  "Inköpschef",
  "Innesäljare",
  "Interaktionsdesigner",
  "IT-arkitekt",
  "IT-chef",
  "Jobbcoach",
  "Key account manager",
  "Kökschef",
  "Kommunikationschef",
  "Konstruktör (ingenjör)",
  "Kundtjänst",
  "Kundtjänst/Support (IT)",
  "Kvalitets- och miljöansvarig",
  "Kvalitets- och Miljöchef",
  "Kvalitetstekniker",
  "Laboratorieassistent",
  "Laboratorieingenjör",
  "Lager- och logistikchef",
  "Logistiker",
  "Löneadministratör",
  "Marknadsanalytiker",
  "Marknadsassistent",
  "Marknadschef",
  "Marknadsförare",
  "Marknadskoordinator",
  "Material- och produktionsplanerare",
  "Nätverkstekniker",
  "Orderbehandlare",
  "Personalchef",
  "Personalhandläggare",
  "Platschef (kontorchef, filialchef)",
  "Produktchef IT",
  "Produktionschef",
  "Produktionsledare",
  "Projektledare",
  "Projektledare IT (mindre)",
  "Projektledare IT (multipla)",
  "Receptarie",
  "Receptionist (kontor)",
  "Redovisningsekonom",
  "Resebyråchef",
  "Resesäljare",
  "Restaurangchef",
  "Revisor (extern)",
  "Revisorassistent (extern)",
  "Säkerhetschef",
  "Säljare",
  "Sekreterare (assistent)",
  "Serviceingenjör (tekniker)",
  "Speditör",
  "Supporttekniker IT",
  "Systemtestare IT",
  "Systemutvecklare",
  "Tandhygienist",
  "Tandsköterska",
  "Tandtekniker",
  "Teknikinformatör",
  "Telefonist",
  "Testledare (IT)",
  "Trafiklärare",
  "Transportplanerare",
  "Vaktmästare, kontorsservice",
  "Webbansvarig",
  "Webbredaktör",
  "Webbutvecklare (Webbdesigner)",
  "Mitt yrke saknas på listan"
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
      showExperienceDropdown: false,
      salaryValue: this.props.data.career.salary,
      workTitle: this.props.data.career.job_title,
      experienceValue: this.props.data.career.experience,
    };

    this.handleDataChange = this.handleDataChange.bind(this);
  }

  handleDataChange(key, payload) {
    this.props.onDataChange(key, payload);
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
    this.handleDataChange('career', {experience: experienceValue});
    this.setState({
      experienceValue: experienceValue
    })
  };

  handleExperienceChangeComplete = () => {
    console.log('Change event completed')
  };

  componentDidUpdate(nextProps) {
      if ((nextProps.data.career.job_title) !== this.state.workTitle) {
      console.log('changed');
      this.setState({
        workTitle: nextProps.data.career.job_title
      });
    }
  }

  render() {

    const salaryValue = this.state.salaryValue;
    const experienceValue = this.state.experienceValue;
    const renderWorkTitles = WorkTitles.map((worktitle, index) => {
      return (
          <li key={worktitle + index} onClick={this.changeWorkTitle.bind(this, worktitle)}>
            {worktitle}
          </li>
      );
    })

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
        </ModuleContainer>
      </div>
    )
  }
}

export default CareerInteraction;
