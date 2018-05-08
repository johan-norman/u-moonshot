import React, {Component} from 'react'
import styled from 'styled-components'

import HeaderImage from '../../modules/HeaderImage'
import ElectedInteraction from '../../modules/ElectedInteraction'
import NewMemberModule from '../../modules/NewMemberModule'
import CrossSiteLinks from '../../modules/CrossSiteLinksModule'
import CardSlider from '../../modules/CardSlider'
import FullSizeSlider from '../../modules/FullSizeSlider'
import PageTitle from '../../components/PageTitle'
import Container from '../../components/Container'

const PageContainer = styled.div`

`;

export class ElectedPage extends Component {
  constructor(props){
    super(props);
    this.handleDataChange = this.handleDataChange.bind(this);
  }

  handleDataChange(key, payload) {
    this.props.onDataChange(key, payload);
  }

  render() {
    return (
      <PageContainer>
        <HeaderImage img='/x0863.jpg'>
        <Container>
          <PageTitle pageNumber="03">Förtroendevald</PageTitle>
          <ElectedInteraction 
          onDataChange={this.handleDataChange} 
          data={this.props.data}
          showCards={true}/>
        </Container>
        </HeaderImage>
        <NewMemberModule title="Bli medlem och skapa förändring" subtext="Tar du steget till att bli förtroendevald får du coaching, verktyg och utbildningar. Bli medlem idag så bjuder på avgiften i tre månader." />
        <CardSlider cards={this.props.data.cards_data} />
        <FullSizeSlider cards={this.props.data.cards_data} />
        <CrossSiteLinks />
      </PageContainer>
    );
  }
}

export default ElectedPage;
