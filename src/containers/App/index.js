import React from 'react';
import { Route } from 'react-router-dom'

import Home from '../HomePage'
import Career from '../CareerPage'
import WorkEnvironment from '../WorkEnvironmentPage'
import Elected from '../ElectedPage'
import BecomeMember from '../BecomeMemberPage'
import Profile from '../ProfilePage'

import PageHeaderModule from '../../modules/PageHeaderModule'

const App = () => (
  <div>
    <PageHeaderModule />
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/karriar" component={Career} />
      <Route exact path="/arbetsmiljo" component={WorkEnvironment} />
      <Route exact path="/fortroendevald" component={Elected} />
      <Route exact path="/bli-medlem" component={BecomeMember} />
      <Route exact path="/profil" component={Profile} />
    </main>
  </div>
)

export default App;
