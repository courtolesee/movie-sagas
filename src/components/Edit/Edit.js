import React, {Component} from 'react';
import { connect } from 'react-redux';

class Edit extends Component {

  render () {
    return (
      <div>
        <h1>Details</h1>
      </div>
    )
  }
}

export default connect(reduxState=>({edit: reduxState.editReducer}))(Edit);