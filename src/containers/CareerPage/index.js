import React, {Component} from 'react'
import styled from 'styled-components'

import HeaderImage from '../../modules/HeaderImage'
import HeroImageModule from '../../modules/HeroImageModule'
import CareerInteraction from '../../modules/CareerInteraction'
import NewMemberModule from '../../modules/NewMemberModule'
import CrossSiteLinks from '../../modules/CrossSiteLinksModule'
import CardSlider from '../../modules/CardSlider'
import FullSizeSlider from '../../modules/FullSizeSlider'
import PageTitle from '../../components/PageTitle'
import Container from '../../components/Container'

import {cards_data as CardsData} from '../../lib/default_data';

import './style.css';

const CareerContainer = styled.div`

`;

class CareerPage extends Component {
  constructor(props){
    super(props);
    this.handleDataChange = this.handleDataChange.bind(this);
  }

  handleDataChange(key, payload) {
    this.props.onDataChange(key, payload);
    this.forceUpdate();
  }

  render() {
    return (
      <CareerContainer>
        <HeaderImage img='/x0279.jpg'>
        <Container>
          <PageTitle pageNumber="01">Karriär</PageTitle>
          <CareerInteraction 
            onDataChange={this.handleDataChange} 
            data={this.props.data}
            showCards={true}
            onCardClick={this.props.onCardClick}/>
        </Container>
          </HeaderImage>
          <NewMemberModule title="Bli medlem och få lönecoachning" subtext="Dessutom ingår inkomstförsäkring som garanterar dig 80% av lönen vid uppsägning. Bli medlem idag så bjuder på avgiften i tre månader." />
          <CardSlider cards={this.props.data.cards_data} />
          <FullSizeSlider 
            cards={this.props.data.cards_data} 
            location={this.props.data.user_data.location} 
            onDataChange={this.handleDataChange} 
          />
          <CrossSiteLinks />
      </CareerContainer>
    );
  }
}

export default CareerPage;
