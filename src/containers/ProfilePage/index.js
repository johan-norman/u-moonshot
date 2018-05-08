import React, {Component} from 'react'
import styled from 'styled-components'
import { Flex, Box } from 'grid-styled'
import HeaderImage from '../../modules/HeaderImage'
import WorkEnvironmentInteraction from '../../modules/WorkEnvironmentInteraction'
import ElectedInteraction from '../../modules/ElectedInteraction'
import CareerInteraction from '../../modules/CareerInteraction'
import RecommendationCards from '../../modules/RecommendationCards'
import CardSlider from '../../modules/CardSlider'
import FullSizeSlider from '../../modules/FullSizeSlider'
import PageTitle from '../../components/PageTitle'
import Container from '../../components/Container'
import H2 from '../../components/H2'
import H3 from '../../components/H3'

import './style.css'

export class ProfilePage extends Component {
  constructor(props){
    super(props);
    this.handleDataChange = this.handleDataChange.bind(this);
  }

  handleDataChange(key, payload) {
    this.props.onDataChange(key, payload);
  }

  componentWillReceiveProps(oldProps, newProps) {
  	console.log(oldProps);
  	console.log(newProps);
  }

  render() {
    return (
      <div id="profile-page">
      	<div id="profile-header">
	        <Container>
	        	<H2>Mina val</H2>
	        	<Flex>
					<Box width={1/2}>
					  <H3>
					    Vi vill kunna ge dig så relevant information som möjligt och för att kunna göra det behöver vi veta lite mer om dig.
					  </H3>
					</Box>
				</Flex>
	        </Container>
        </div>
        <div id="profile-career" className="profile-section">
        	<Container>
        		<PageTitle pageNumber="01">Karriär</PageTitle>
        		<CareerInteraction 
		          onDataChange={this.handleDataChange} 
		          data={this.props.data}
		          showCards={false}/>
        	</Container>
        </div>
        <div id="profile-environment" className="profile-section">
        	<Container>
        		<PageTitle pageNumber="02">Arbetsmiljö</PageTitle>
        		<WorkEnvironmentInteraction 
		          onDataChange={this.handleDataChange} 
		          data={this.props.data}
		          showCards={false}/>
        	</Container>
        </div>
        <div id="profile-elected" className="profile-section">
        	<Container>
        		<PageTitle pageNumber="03">Förtroendevald</PageTitle>
        		<ElectedInteraction 
		          onDataChange={this.handleDataChange} 
		          data={this.props.data}
		          showCards={false}/>
        	</Container>
        </div>
         <div id="profile-recommendation" className="profile-section">
         	<Container>
         		<RecommendationCards data={this.props.data} rows={2} columns={4}></RecommendationCards>
         	</Container>
         </div>
      </div>
    );
  }
}

export default ProfilePage;
