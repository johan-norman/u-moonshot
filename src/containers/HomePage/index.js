import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../modules/counter'

import HeroVideoModule from '../../modules/HeroVideoModule'
import CrossSiteLinks from '../../modules/CrossSiteLinksModule'
import StartPageInteraction from '../../modules/StartPageInteraction'
import NewMemberModule from '../../modules/NewMemberModule'

import ProfileSection from './ProfileSection.js'
import ArticleSection from './ArticleSection.js'

const HomePage = props => (
  <section>
    <HeroVideoModule />
    <CrossSiteLinks />
    <StartPageInteraction />
  </section>
)

export default HomePage;