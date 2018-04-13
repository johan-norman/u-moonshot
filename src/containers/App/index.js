import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import merge from 'lodash/merge'

import Home from '../HomePage'
import CareerPage from '../CareerPage'
import WorkEnvironment from '../WorkEnvironmentPage'
import Elected from '../ElectedPage'
import BecomeMember from '../BecomeMemberPage'
import Profile from '../ProfilePage'

import PageHeaderModule from '../../modules/PageHeaderModule'

import State from '../../lib/DataHandlers';
import default_data from '../../lib/default_data';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleSelectTag = (tag) => {
      if (!this.state.selectedTags.includes(tag)) {
        this.setState({
          selectedTags: [...this.state.selectedTags, tag]
        })
      }
      else {
        let index = this.state.selectedTags.indexOf(tag);
        this.setState(prevState => {
          let newData = prevState.selectedTags.slice();
          newData.splice(index, 1);
          return {selectedTags: newData}
        })
      }
    }

    this.data = default_data;
  this.handleDataChange = this.handleDataChange.bind(this);
  
  }

    handleDataChange(key, payload) {
        if (key === 'career') {
           this.data.career = merge(this.data.career, payload);
        }
        if (key === 'work_environment') {
           
        }
        localStorage.setItem('storedData', JSON.stringify(this.data));
    }

    componentWillMount() {
        const storedData = JSON.parse(localStorage.getItem('storedData'));
        if (storedData) {
            console.log(storedData);
            this.data = storedData;
        }
    }

  render() {
    return (
      <div>
        
        <main>
        <Router forceRefresh={false}>
            <div>
                <PageHeaderModule />
                <Route component={ScrollToTop} />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/karriar" render={()=><CareerPage data={this.data} onDataChange={this.handleDataChange} />} />
                    <Route exact path="/arbetsmiljo" component={WorkEnvironment} />
                    <Route exact path="/fortroendevald" component={Elected} />
                    <Route exact path="/bli-medlem" component={BecomeMember} />
                    <Route exact path="/profil" component={Profile} />
                </Switch>
          </div>
        </Router>
        </main>
      </div>
    )
  }
};

// This isn't a real component
// Hackish solution for fixing the routers scroll behaviour
const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

export default App;
