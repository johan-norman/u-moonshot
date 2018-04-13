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

const Home = props => (
  <section>
    <HeroVideoModule />
    <CrossSiteLinks />
    <StartPageInteraction />
    <NewMemberModule inverted={true} title="Lorem ipsum dolor sit amet" subtext="Dessutom ingår inkomstförsäkring som garanterar dig 80% av lönen vid uppsägning. Bli medlem idag så bjuder på avgiften i tre månader." />
  </section>
)

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
})

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  changePage: () => push('/about-us')
}, dispatch)

export default Home;