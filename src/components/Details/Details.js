import React, {Component} from 'react';
import { connect } from 'react-redux';
import Edit from '../Edit/Edit';

class Details extends Component {

    goBackHome = () => {
        this.props.history.push('/');
    }

  render () {
    return (
      <div>
        <h1>Details</h1>
        <button onClick={this.goBackHome}>Back</button>
        <div>
            <img src={this.props.movie.poster} alt={this.props.movie.title} onClick={this.goToDetails}/>
            <p>{this.props.movie.title}</p>
            <p>{this.props.movie.description}</p>
        </div>
      </div>
    )
  }
}

export default connect(reduxState=>({movie: reduxState.movieDetails}))(Details);