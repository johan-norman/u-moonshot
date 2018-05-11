import React, {Component} from 'react'
import styled from 'styled-components'

import HeaderImage from '../../modules/HeaderImage'
import WorkEnvironmentInteraction from '../../modules/WorkEnvironmentInteraction'
import NewMemberModule from '../../modules/NewMemberModule'
import CrossSiteLinks from '../../modules/CrossSiteLinksModule'
import CardSlider from '../../modules/CardSlider'
import FullSizeSlider from '../../modules/FullSizeSlider'
import PageTitle from '../../components/PageTitle'
import Container from '../../components/Container'

const PageContainer = styled.div`

`;

export class WorkEnvironmentPage extends Component {

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
      <PageContainer>
       <HeaderImage img='/x0374.jpg'>
        <Container>
          <PageTitle pageNumber="02">Arbetsmiljö</PageTitle>
          <WorkEnvironmentInteraction 
          onDataChange={this.handleDataChange}
          onCardClick={this.props.onCardClick} 
          data={this.props.data}
          showCards={true}/>
        </Container>
        </HeaderImage>
        <NewMemberModule color="light" title="Bli medlem och få råd och stöd" subtext="Vid juridiska tvister kan du dessutom få hjälp av en förhandlingsexpert. Bli medlem idag så bjuder på avgiften i tre månader." />
        <CardSlider cards={this.props.data.cards_data}  onCardClick={this.props.onCardClick}/>
        <FullSizeSlider 
            cards={this.props.data.cards_data} 
            location={this.props.data.user_data.location} 
            onDataChange={this.handleDataChange} 
          />
        <CrossSiteLinks />
      </PageContainer>
    );
  }
}

export default WorkEnvironmentPage;