import React, {Component} from 'react'
import styled from 'styled-components'

import HeroImageModule from '../../modules/HeroImageModule'
import CareerInteraction from '../../modules/CareerInteraction'
import NewMemberModule from '../../modules/NewMemberModule'
import CrossSiteLinks from '../../modules/CrossSiteLinksModule'
import CardSlider from '../../modules/CardSlider'
import FullSizeSlider from '../../modules/FullSizeSlider'

import {cards_data as CardsData} from '../../lib/default_data';

const CareerContainer = styled.div`

`;

class CareerPage extends Component {
  constructor(props){
    super(props);
    this.handleDataChange = this.handleDataChange.bind(this);
  }

  handleDataChange(key, payload) {
    this.props.onDataChange(key, payload);
  }

  render() {
    return (
      <CareerContainer>
        <HeroImageModule text="Rätt lön attraherar rätt kompetens" img="" />
        <CareerInteraction 
          onDataChange={this.handleDataChange} 
          data={this.props.data}/>
        <NewMemberModule title="Bli medlem och få lönecoachning" subtext="Dessutom ingår inkomstförsäkring som garanterar dig 80% av lönen vid uppsägning. Bli medlem idag så bjuder på avgiften i tre månader." />
        <CardSlider cards={this.props.data.cards_data} />
        <FullSizeSlider cards={this.props.data.cards_data} />
        <CrossSiteLinks />
      </CareerContainer>
    );
  }
}

export default CareerPage;
