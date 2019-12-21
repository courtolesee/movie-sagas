import React, {Component} from 'react';
import { connect } from 'react-redux';
import Edit from '../Edit/Edit';

class Details extends Component {

  render () {
    return (
      <div>
        <h1>Details</h1>
      </div>
    )
  }
}

export default connect(reduxState=>({details: reduxState.detailsReducer}))(Details);