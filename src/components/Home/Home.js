import React, {Component} from 'react';
import { connect } from 'react-redux';
import MovieCard from '../MovieCard/MovieCard';

// home page - maps list of movies
class Home extends Component {
  
    render () {
      return (
        <section>
            <p className="instructions">Click on a movie poster for more details about that movie!</p>
            <div className="imageGrid">
              {this.props.movies.map( (movie,i)=> {     
              return <MovieCard key={i} movie={movie}/>
              })}
            </div>
        </section>
      )
    }
  }
  
  export default connect(reduxState=>({movies: reduxState.movies}))(Home);