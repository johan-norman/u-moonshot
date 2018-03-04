import React from 'react';
import { Route } from 'react-router-dom'
import Home from '../HomePage'
import About from '../AboutPage'
import PageHeaderModule from '../../modules/PageHeaderModule'

const App = () => (
  <div>
    <PageHeaderModule />
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
)

export default App;
