import React, {Component} from 'react'
import styled from 'styled-components'

import HeroImageModule from '../../modules/HeroImageModule'
import WorkEnvironmentInteraction from '../../modules/WorkEnvironmentInteraction'
import NewMemberModule from '../../modules/NewMemberModule'
import CrossSiteLinks from '../../modules/CrossSiteLinksModule'
import CardSlider from '../../modules/CardSlider'
import FullSizeSlider from '../../modules/FullSizeSlider'

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
        <HeroImageModule text="I god jord växer starka plantor" />
        <WorkEnvironmentInteraction 
          onDataChange={this.handleDataChange} 
          data={this.props.data}/>
        <NewMemberModule title="Bli medlem och få råd och stöd" subtext="Vid juridiska tvister kan du dessutom få hjälp av en förhandlingsexpert. Bli medlem idag så bjuder på avgiften i tre månader." />
        <CardSlider cards={this.props.data.cards_data} />
        <FullSizeSlider cards={this.props.data.cards_data} />
        <CrossSiteLinks />
      </PageContainer>
    );
  }
}

export default WorkEnvironmentPage;