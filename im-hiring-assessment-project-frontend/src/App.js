import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Board, Todo, User } from './pages';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className = "App">
        <Route exact path="/" component={Home} />
        <Switch>
          <Route exact path="/Todo" component={Todo} />
          <Route path="/Board/:list" component={Board} />
          <Route path="/Board" component={Board} />
          <Route path="/User" component={User} />
        </Switch>
      </div>
    );
  }
}

export default App;