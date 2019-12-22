import React, {Component} from 'react';
import { connect } from 'react-redux';

class Edit extends Component {

    goBackHome = () => {
        this.props.history.push('/');
    }

    goBackDetails = () => {
        this.props.history.push('/details');
    }

  render () {
    return (
      <div>
        <h1>Details</h1>
        <button onClick={this.goBackHome}>Back to Movie List</button>
        <section>
            <img src={this.props.movie.poster} alt={this.props.movie.title} onClick={this.goToDetails}/>
            <p>{this.props.movie.title}</p>
            <p>{this.props.movie.description}</p>
            <input placeholder="Edit the Title"/>
            <input placeholder="Edit the Description"/>
            <button>Submit</button>
        </section>
        <section>
            <button>Save Edits</button>
            <button onClick={this.goBackDetails}>Cancel Edits</button>
        </section>
      </div>
    )
  }
}

export default connect(reduxState=>({movie: reduxState.movieDetails}))(Edit);