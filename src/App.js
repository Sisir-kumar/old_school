import React from 'react';

import './App.css';
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import Years from './Years';
import Month from './Month';
import Button from './Button';
function App() {
  return (
    <div className="App container">
      <Router>
      <Button />
        <Switch>
          <Route path="/" exact component={Years} />
          <Route path="/mon" component={Month} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
