import React, {Component} from 'react'

import HeaderImage from '../../modules/HeaderImage'
import NewMemberModule from '../../modules/NewMemberModule'
import CrossSiteLinks from '../../modules/CrossSiteLinksModule'
import CardSlider from '../../modules/CardSlider'
import FullSizeSlider from '../../modules/FullSizeSlider'
import PageTitle from '../../components/PageTitle'
import Container from '../../components/Container'



const ArticleSingle = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default ArticleSingle;
