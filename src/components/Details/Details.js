import React, {Component} from 'react';
import { connect } from 'react-redux';

class Details extends Component {

    goBackHome = () => {
        this.props.history.push('/');
    }

    goToEdit = () => {
        this.props.history.push('/edit');
        this.props.dispatch({type: 'SELECT_DETAILS', payload: {...this.props.movie}})
    }

  render () {
    return (
      <div>
        <p className="instructions">Click 'Edit' to change the movie description or title!</p>
        <h1>Details</h1>
        <button onClick={this.goBackHome}>Back to Movie List</button>
        <div>
            <img src={this.props.movie.poster} alt={this.props.movie.title} onClick={this.goToDetails}/>
            <p>{this.props.movie.title}</p>
            <p>{this.props.movie.description}</p>
            <button onClick={this.goToEdit}>Edit</button>
        </div>
      </div>
    )
  }
}

export default connect(reduxState=>({movie: reduxState.movieDetails}))(Details);