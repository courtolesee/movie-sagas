import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';

// used for each movie reder
class MovieCard extends Component {
    
    goToDetails = () => {
        this.props.history.push('/details');
        this.props.dispatch({type: 'SELECT_DETAILS', payload: {...this.props.movie}})
    }

    render () {
        return (
        <div>
            {/* {JSON.stringify(this.props.movie)} */}
            <div className="imageCard">
                <img src={this.props.movie.poster} alt={this.props.movie.title} onClick={this.goToDetails}/>
                <p>{this.props.movie.title}</p>
                <p>{this.props.movie.genres.join(', ')}</p>
                <p>{this.props.movie.description}</p>
            </div>
        </div>
        )
    }
}

export default withRouter(connect(reduxState=>(
    {movies: reduxState.movies}
        ))(MovieCard));