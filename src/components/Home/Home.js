import React, {Component} from 'react';
import { connect } from 'react-redux';
import Details from '../Details/Details';

class Home extends Component {
  
    render () {
      return (
        <div>
        </div>
      )
    }
  }
  
  export default connect(reduxState=>({movies: reduxState.getMoviesReducer}))(Home);