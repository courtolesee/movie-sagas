import React, { Component } from 'react';
import {connect} from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from '../Home/Home';
import Details from '../Details/Details'
import Edit from '../Edit/Edit';

class App extends Component {

  componentDidMount () {
    this.props.dispatch({type: 'GET_MOVIES'});
  }

  goToHome = () => {
    this.props.history.push('/');
  }

  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <h1>Movies</h1>
        <Router>
          <Route exact path='/' component={Home}/>
          <Route path='/details' component={Details}/>
          <Route path='/edit' component={Edit}/>
        </Router>
      </div>
    );
  }
}

export default connect()(App);
