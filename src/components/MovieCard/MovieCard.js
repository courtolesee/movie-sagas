import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';


class MovieCard extends Component {

  render () {
    return (
      <div className="imageCard">
        {/* {JSON.stringify(this.props.movie)} */}
        <div>
         <img src={this.props.movie.poster} alt={this.props.movie.title}/>
         <p>{this.props.movie.title}</p>
         <p>{this.props.movie.description}</p>
         </div>
      </div>
    )
  }
}

export default withRouter(connect()(MovieCard));