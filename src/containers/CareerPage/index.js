import React, {Component} from 'react'
import styled from 'styled-components'

import HeroImageModule from '../../modules/HeroImageModule'
import CareerInteraction from '../../modules/CareerInteraction'
import NewMemberModule from '../../modules/NewMemberModule'
import CrossSiteLinks from '../../modules/CrossSiteLinksModule'
import CardSlider from '../../modules/CardSlider'
import FullSizeSlider from '../../modules/FullSizeSlider'

const CareerContainer = styled.div`

`;

const CardsData = [
  {
      category: "Kurser & Aktiviteter",
      title: "Kompetensinventering",
      imgsrc: "google.se"
  },
  {category: "Löneförhandling", title: "Så lyckas du", imgsrc: "google.se"},
  {category: "Seminarium", title: "LinkedIn-granskning", imgsrc: "google.se"},
  {category: "Senaste på Unionen-bloggen", title: '"Så blir du redo för det nya arbetslivet"', imgsrc: "google.se"},
  {category: "Kurser & Aktiviteter", title: "Kompetensinventering5", imgsrc: "google.se"},
  {category: "Kurser & Aktiviteter", title: "Kompetensinventering", imgsrc: "google.se"},
  {category: "Kurser & Aktiviteter", title: "Kompetensinventering", imgsrc: "google.se"},
  {category: "Kurser & Aktiviteter", title: "Kompetensinventering", imgsrc: "google.se"},
  {category: "Kurser & Aktiviteter", title: "Kompetensinventering", imgsrc: "google.se"},
  {category: "Kurser & Aktiviteter", title: "Kompetensinventering", imgsrc: "google.se"}
];

const EventsData = [
  {category: "Kurser & Aktiviteter", title: "Kompetensinventering", imgsrc: "google.se"},
  {category: "Löneförhandling", title: "Så lyckas du", imgsrc: "google.se"},
  {category: "Seminarium", title: "LinkedIn-granskning", imgsrc: "google.se"},
  {category: "Senaste på Unionen-bloggen", title: '"Så blir du redo för det nya arbetslivet"', imgsrc: "google.se"},
  {category: "Kurser & Aktiviteter", title: "Kompetensinventering5", imgsrc: "google.se"},
  {category: "Kurser & Aktiviteter", title: "Kompetensinventering", imgsrc: "google.se"},
  {category: "Kurser & Aktiviteter", title: "Kompetensinventering", imgsrc: "google.se"},
  {category: "Kurser & Aktiviteter", title: "Kompetensinventering", imgsrc: "google.se"},
  {category: "Kurser & Aktiviteter", title: "Kompetensinventering", imgsrc: "google.se"},
  {category: "Kurser & Aktiviteter", title: "Kompetensinventering", imgsrc: "google.se"}
];

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
          onDataChange={this.handleDataChange} data={this.props.data}/>
        <NewMemberModule title="Bli medlem och få lönecoachning" subtext="Dessutom ingår inkomstförsäkring som garanterar dig 80% av lönen vid uppsägning. Bli medlem idag så bjuder på avgiften i tre månader." />
        <CardSlider cards={CardsData} />
        <FullSizeSlider cards={EventsData} />
        <CrossSiteLinks />
      </CareerContainer>
    );
  }
}

export default CareerPage;
