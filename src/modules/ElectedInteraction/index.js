import React from 'react'
import styled from 'styled-components';
import Charming from 'react-charming'
import { TimelineMax, TweenMax, Elastic } from 'gsap';
import { Flex, Box } from 'grid-styled'
import H2 from '../../components/H2'
import Slider from 'react-rangeslider';

const CardsData = [
  {category: "Kurser & Aktiviteter", title: "Kompetensinventering", imgsrc: "google.se"},
  {category: "Löneförhandling", title: "Så lyckas du", imgsrc: "google.se"},
  {category: "Seminarium", title: "LinkedIn-granskning", imgsrc: "google.se"},
  {category: "Senaste på Unionen-bloggen", title: '"Så blir du redo för det nya arbetslivet"', imgsrc: "google.se"}
];

const Container = styled(Box)`
  max-width: 1248px;
  margin: 0 auto;

  .cards-container {
    margin-left: -8px;
  }
`

const StyledCard = styled.div`
  margin-bottom: 15px;

  .card-image {
    background: #EAEAEA;
    height: 320px;
  }

  .card-text-container {
    p {
      font-size: 15px;
      color: #9C9C9C;
      margin-bottom: 0;
    }
    h3 {
      font-size: 18px;
      color: #595959;
      letter-spacing: 0;
      margin: 0;
    }
  }

`;

const RecommendedTag = styled.p`
  color: #AAAAAA;
  font-size: 18px;
`;

const Preamble = styled.p`
  opacity: 0.7;
  font-size: 18px;
  color: #383838;
  letter-spacing: 0;
  line-height: 24px;
  max-width: 400px;
`;

const RangeSlider = styled.section`

margin-top: 20px;
display: block;
clear: both;

.rangeslider {
    margin: 0 0 10px 0;
    position: relative;
    background: #e6e6e6;
    -ms-touch-action: none;
    touch-action: none;
}

.slider {
  margin-top: 10px;
}

.question-label {
  font-size: 18px;
  color: #434343;
  letter-spacing: 0;
}

.steps {
  position: relative;
  span {
    width: 1px;
    height: 8px;
    background: #979797;
    margin-right: 10%;
    display: inline-block;
    opacity: 0.5;
    &:last-child {
      margin: 0;
    }
  }
}

.range-labels {
  display: inline-block;
  clear: both;
  width: 100%;
  span {
    font-size: 15px;
    color: #9C9C9C;
    letter-spacing: 0;
  }
  .left-label {float: left;}
  .right-label {float: right;}
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

const renderCards = function() {
    var groupSize = 2;
    var rows = CardsData.map(function(card, index) {
        // map content to html elements
        return(
          <Box width={300} mx={"8px"}>
            <StyledCard key={card.title + index}>
                <div className="card-image"></div>
                <div className="card-text-container">
                  <p className="category-text">{card.category}</p>
                  <h3>{card.title}</h3>
                </div>
            </StyledCard>
          </Box>
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

class ElectedInteraction extends React.Component{

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      workEnvironmentValue: 8,
      equalityValue: 3,
      workplaceInterestValue: 7,
      impactValue: 3,
      safeWorkspaceValue: 5
    }

  }

  componentDidMount() {
  }

  handleClick = index => {

  }

  // FIRST SLIDER - WORK ENVIRONMENT
  handleWorkEnvironmentChangeStart = () => {
    console.log('Change event handleExperienceChangeStart')
  };
  handleWorkEnvironmentChange = value  => {
    this.setState({
      workEnvironmentValue: value
    })
  };
  handleWorkEnvironmentChangeComplete = () => {
    console.log('Change event completed')
  };

  // SECOND SLIDER - EQUALITY
  handleEqualityChangeStart = () => {
    console.log('Change event handleExperienceChangeStart')
  };
  handleEqualityChange = value  => {
    this.setState({
      equalityValue: value
    })
  };
  handleEqualityChangeComplete = () => {
    console.log('Change event completed')
  };

  // THIRD SLIDER - impactValue
  handleWorkplaceInterestChangeStart = () => {
    console.log('Change event handleExperienceChangeStart')
  };
  handleWorkplaceInterestChange = value  => {
    this.setState({
      workplaceInterestValue: value
    })
  };
  handleWorkplaceInterestChangeComplete = () => {
    console.log('Change event completed')
  };

  // FOURTH SLIDER - Impact
  handleImpactChangeStart = () => {
    console.log('Change event handleExperienceChangeStart')
  };
  handleImpactChange = value  => {
    this.setState({
      impactValue: value
    })
  };
  handleImpactChangeComplete = () => {
    console.log('Change event completed')
  };

  // FIFTH SLIDER - Safe Workspace
  handleSafeWorkspaceChangeStart = () => {
    console.log('Change event handleExperienceChangeStart')
  };
  handleSafeWorkspaceChange = value  => {
    this.setState({
      safeWorkspaceValue: value
    })
  };
  handleSafeWorkspaceChangeComplete = () => {
    console.log('Change event completed')
  };

  render() {

    const workEnvironmentValue = this.state.workEnvironmentValue;
    const equalityValue = this.state.equalityValue;
    const workplaceInterestValue = this.state.workplaceInterestValue;
    const impactValue = this.state.impactValue;
    const safeWorkspaceValue = this.state.safeWorkspaceValue;

    return(
      <Container>

        <Flex pb={100}>
          <Box width={1/2} pr={130}>
            <H2>Vad brinner<br/>du för?</H2>
            <Preamble>Vi vill kunna ge dig så relevant information som möjligt och för att kunna göra det behöver vi veta lite mer om dig.</Preamble>

            <div className="slider-wrapper">

              <RangeSlider>
                <div className="question-label">En trivsam arbetsmiljö</div>
                <div className="slider">
                  <div className="steps">
                    <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                  </div>
                  <Slider
                    min={0}
                    max={10}
                    step={1}
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
                <div className="question-label">En jämlik arbetsplats</div>
                <div className="slider">
                  <div className="steps">
                    <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                  </div>
                  <Slider
                    min={0}
                    max={10}
                    step={1}
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
                <div className="question-label">Att ligga i framkant i arbetsplatsfrågor</div>
                <div className="slider">
                  <div className="steps">
                    <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                  </div>
                  <Slider
                    min={0}
                    max={10}
                    step={1}
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
                <div className="question-label">Möjlighet att påverka</div>
                <div className="slider">
                  <div className="steps">
                    <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                  </div>
                  <Slider
                    min={0}
                    max={10}
                    step={1}
                    value={impactValue}
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
                <div className="question-label">En säker arbetsmiljö</div>
                <div className="slider">
                  <div className="steps">
                    <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                  </div>
                  <Slider
                    min={0}
                    max={10}
                    step={1}
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
          <Box width={1/2} mt={70}>
            <RecommendedTag>Rekommenderas för dig:</RecommendedTag>
            {renderCards()}
          </Box>
        </Flex>

      </Container>
    )
  }
}

export default ElectedInteraction;
