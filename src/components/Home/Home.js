import React, {Component} from 'react';
import { connect } from 'react-redux';
import Details from '../Details/Details';
import MovieCard from '../MovieCard/MovieCard'

class Home extends Component {
  
    render () {
      return (
        <div>
        {this.props.movies.map( (movie,i)=> {     
          return <MovieCard key={i} movie={movie}/>
        })}
        </div>
      )
    }
  }
  
  export default connect(reduxState=>({movies: reduxState.movies}))(Home);