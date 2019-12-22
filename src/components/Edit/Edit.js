import React, {Component} from 'react';
import { connect } from 'react-redux';

class Edit extends Component {

  render () {
    return (
      <div>
        <h1>Details</h1>
        <img src={this.props.movie.poster} alt={this.props.movie.title} onClick={this.goToDetails}/>
        <p>{this.props.movie.title}</p>
        <input placeholder="Edit the Title"/>
        <button>Submit</button>
        <p>{this.props.movie.description}</p>
        <input placeholder="Edit the Description"/>
        <button>Submit</button>
      </div>
    )
  }
}

export default connect(reduxState=>({movie: reduxState.movieDetails}))(Edit);