import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { TimelineMax, TweenMax, Elastic } from 'gsap';
import Logo from './unionen-logo@2x.png'

const HeaderContainer = styled.header`
  position: absolute;
  z-index: 2;
  width: 100%;
  padding: 40px;

  .logo-link {
    float: left;
  }

  .u-logo {
    width: 184px;
    height: 30px;
  }

`;

const NavigationContainer = styled.nav`
  float: right;

  a {
    font-size: 16px;
    color: #FFF;
    letter-spacing: 1px;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;
    margin-right: 30px;
  }

`;

//<H1>Kompetens ger kraft.<br />Fler och bättre jobb.<br />Balans i arbetslivet.</H1>
class PageHeaderModule extends React.Component{

  constructor(props){
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return(
      <HeaderContainer>
        <Link className="logo-link" to="/"><img src={Logo} className="u-logo" /></Link>
        <NavigationContainer>
          <Link to="/">Start</Link>
          <Link to="/about-us">Annan sida</Link>
        </NavigationContainer>
      </HeaderContainer>

    )
  }
}

export default PageHeaderModule;
