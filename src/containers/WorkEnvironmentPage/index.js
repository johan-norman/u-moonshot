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
  }

  render() {
    return (
      <PageContainer>
       <HeaderImage img='/x0374.jpg'>
        <Container>
          <PageTitle pageNumber="02">Arbetsmiljö</PageTitle>
          <WorkEnvironmentInteraction 
          onDataChange={this.handleDataChange} 
          data={this.props.data}
          showCards={true}/>
        </Container>
        </HeaderImage>
        <NewMemberModule color="dark" title="Bli medlem och få råd och stöd" subtext="Vid juridiska tvister kan du dessutom få hjälp av en förhandlingsexpert. Bli medlem idag så bjuder på avgiften i tre månader." />
        <CardSlider cards={this.props.data.cards_data} />
        <FullSizeSlider cards={this.props.data.cards_data} />
        <CrossSiteLinks />
      </PageContainer>
    );
  }
}

export default WorkEnvironmentPage;