import React, {Component} from 'react';
import { connect } from 'react-redux';

// edit page
class Edit extends Component {

  // id stays the same, title & desc change based on user input
  state = {
    id: this.props.movie.id,
    title: '',
    description: ''
  }

  // capture user input
  handleChange = (event, newState) => {
    this.setState({
      [newState]: event.target.value
    })
    // console.log('in handleChange:', event.target.value);
  }

  // send user input
  sendEditUpdate = (event)=>{
    event.preventDefault();
    this.props.dispatch({ type: 'SEND_UPDATE', payload: this.state });
  }

  // if back to movie list is clicked
  goBackHome = () => {
      this.props.history.push('/');
  }

  // if cancel is clicked
  goBackDetails = () => {
      this.props.history.push('/details');
  }

  render () {
    return (
      <div>
        <h1>Details</h1>
        <button onClick={this.goBackHome}>Back to Movie List</button>
        <section>
        {/* {JSON.stringify(this.props.movie.id)} */}
            <img src={this.props.movie.poster} alt={this.props.movie.title} onClick={this.goToDetails}/>
            <p>{this.props.movie.title}</p>
            <p>{this.props.movie.description}</p>
            <input placeholder="Edit the Title" type="text" onChange={(event)=>this.handleChange(event, 'title')} value={this.state.title}/>
            <br/>
            <textarea placeholder="Edit the Description" onChange={(event)=>this.handleChange(event, 'description')} value={this.state.description}/>
        </section>
        <section>
            <button onClick={this.goBackDetails}>Cancel Edits</button>
            <button onClick={this.sendEditUpdate}>Save Edits</button>
        </section>
      </div>
    )
  }
}

export default connect(reduxState=>({movie: reduxState.movieDetails}))(Edit);