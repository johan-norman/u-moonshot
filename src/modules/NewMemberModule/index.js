import React from 'react'
import styled from 'styled-components';
import Charming from 'react-charming'
import { TimelineMax, TweenMax, Elastic } from 'gsap';
import { Flex, Box } from 'grid-styled'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import FacebookProvider, { Page } from 'react-facebook'
import Button from '../../components/Button'
import Container from '../../components/Container'
import PhoneIcon from './phone-icon.png'

import './style.css';

class NewMemberModule extends React.Component{

  constructor(props){
    super(props);
  }

  componentDidMount() {
  }

  render() {
    const color = this.props.color ? this.props.color : 'dark';
    const classes = `${color} new-member-module`;
    return(
      <Container>
      <div className={classes} style={{backgroundColor: this.props.inverted ? "#fff" : "#F0F0F0"}}>
        <Flex pt={50} pb={50} flexDirection={['column', 'unset']}>
          <Box width={[1, 1/2, 3/5]}>
            <h2 className="new-member-h2">{this.props.title}</h2>
            <p className="new-member-p">{this.props.subtext}</p>
            <Button className="cta-button" to="/bli-medlem" text="Bli medlem" />
          </Box>
          <Box width={[1, 1/2, 2/5]} className="phone-tabs">
            <Tabs className="tab-container">
                <TabPanel className="tab">
                  <p>Fyll i ditt nummer så ringer vi upp och berättar allt</p>
                  <div className="input-wrap"><i className="icon-cellphone"></i><input type="tel" placeholder="T.ex: 070 123 45 678" /></div>
                  <Button to="/bli-medlem" text="Ring upp mig" />
                  <a className="small-link" href="#">Få mail istället?</a>
                </TabPanel>
                <TabPanel className="tab">
                  <p>Fyll i ditt nummer så ringer vi upp och berättar allt</p>
                  <div className="input-wrap"><i className="icon-cellphone"></i><input type="tel" placeholder="T.ex: 070 123 45 678" /></div>
                  <Button to="/bli-medlem" text="Ring upp mig" />
                  <a className="small-link" href="#">Få mail istället?</a>
                </TabPanel>
                <TabPanel className="tab">
                  <p>Follow us</p>
                  <FacebookProvider appId="177954549699251">
                    <Page href="http://www.facebook.com/unionensverige/" tabs="timeline" />
                  </FacebookProvider>
                </TabPanel>
               <TabList className="tabs-nav">
                  <Tab>Ring upp mig</Tab>
                  <Tab>Chatta live</Tab>
                  <Tab>Följ oss</Tab>
              </TabList>
            </Tabs>
           
          </Box>
        </Flex>
      </div>
      </Container>
    )
  }
}

export default NewMemberModule;
