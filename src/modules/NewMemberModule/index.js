import React from 'react'
import styled from 'styled-components';
import Charming from 'react-charming'
import { TimelineMax, TweenMax, Elastic } from 'gsap';
import { Flex, Box } from 'grid-styled'
import Button from '../../components/Button'
import PhoneIcon from './phone-icon.png'

const ModuleContainer = styled.section`
padding: 0 70px 50px 70px;

a {
  font-size: 12px;
}

.new-member-h2 {
  width: 83%;
  font-size: 48px;
  letter-spacing: -3px;
}
.new-member-p {
  width: 83%;
  margin-top: -15px;
  margin-bottom: 70px;
}

.tab-container {
  margin-top: 55px;
  width: 60%;
  a {
    color: #484848;
  }
}
.tab-content input {
  width: 120%;
  padding: 7px 7px 7px 30px;
  margin: 0 0 16px 0;
  box-sizing: border-box;
  font-size: 24px;
  font-weight: bold;
  border: none;
  border-bottom: 1px solid #757575;
  background: transparent;
  background-image: url(${PhoneIcon});
  background-repeat: no-repeat;
  background-size: 15px;
  background-position: 2px 9px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #959595;
  }
}

input:focus::-webkit-input-placeholder { color:transparent; }
input:focus:-moz-placeholder { color:transparent; } /* FF 4-18 */
input:focus::-moz-placeholder { color:transparent; } /* FF 19+ */
input:focus:-ms-input-placeholder { color:transparent; } /* IE 10+ */

.tab-content Button {
  margin-right: 25px;
}

.tabs-nav nav{
  margin-top: 70px;
  display: flex;
  justify-content: space-between;
  a {
    width: 30%;
    border-top: 1px solid #959595;
    text-decoration: none;
    color: #959595;
    b {
      display: block;
      padding: 12px 0 4px 0;
    }
    span {
      font-size: 10px;
    }
  }
  .active {
    color: #000000;
    border-top: 1px solid #000000;
  }
}

`;

class NewMemberModule extends React.Component{

  constructor(props){
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return(
      <ModuleContainer style={{backgroundColor: this.props.inverted ? "#fff" : "#F0F0F0"}}>
        <Flex pt={50} pb={50}>
          <Box width={1/2} px={2}>
            <h2 className="new-member-h2">{this.props.title}</h2>
            <p className="new-member-p">{this.props.subtext}</p>
            <Button to="/bli-medlem" text="Bli medlem" />
          </Box>
          <Box width={1/2} px={2}>
            <div className="tab-container">
              <div className="tab-content">
                <p>Fyll i ditt nummer så ringer vi upp och berättar allt</p>
                <input type="tel" placeholder="T.ex: 070 123 45 678" />
                <Button to="/bli-medlem" text="Ring upp mig" />
                <a href="#">Få mail istället?</a>
              </div>
            </div>
            <div className="tabs-nav">
              <nav>
                <a className="active" href="#">
                  <b>Ring upp mig</b>
                  <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                </a>
                <a href="#">
                  <b>Chatta live</b>
                  <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                </a>
                <a href="#">
                  <b>Följ oss</b>
                  <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                </a>
              </nav>
            </div>
          </Box>
        </Flex>
      </ModuleContainer>
    )
  }
}

export default NewMemberModule;
