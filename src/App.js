import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navigation from './navigation/navigation';
import Home from './home/home';
import Edu from './education/edu'
import Food from './food/food.jsx'
import Housing from './housing/housing.jsx'
import Jobs from './jobs/jobs.jsx'

class App extends Component {
  render() {
    return (
       <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/cmpm131" component={Home} exact/>
            <Route path="/housing-resources" component={Housing}/>
            <Route path="/job-resources" component={Jobs}/>
            <Route path="/food-resources" component={Food}/>
            <Route path="/educational-resources" component={Edu}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;