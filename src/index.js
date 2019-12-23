import './index.css';
import App from './components/App/App.js';
import axios from 'axios';
import registerServiceWorker from './registerServiceWorker';
// react imports
import React from 'react';
import ReactDOM from 'react-dom';
// redux, saga imports
import { createStore, combineReducers, applyMiddleware } from 'redux';
import {put,takeEvery} from 'redux-saga/effects';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
// Logger to see state changes
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';



// rootSaga generator function
function* rootSaga() {
    yield takeEvery('GET_MOVIES', getMovies);
    yield takeEvery('SEND_UPDATE', updateMovie)
}

// SAGAS
// gets movie list
function * getMovies (action) {
    try {
      const getResponse = yield axios.get('/movies');
      yield put ({type: 'SET_MOVIES', payload: getResponse.data})
    }
    catch (error) {
      console.log('error on getting movies:', error);
    }
  }

// updates movies from user input and sends to router
function * updateMovie (action) {
    try {
        const getResponse = yield axios.put(`/movies/+${action.payload.id}`, action.payload);
        yield put ({type: 'GET_MOVIES', payload: getResponse.data})
    }
    catch (error) {
        console.log('error on PUT getting movies:', error);
    }
}

// sagaMiddleware
const sagaMiddleware = createSagaMiddleware();


// REDUCERS
// Used to store all movie data (title, poster, description, and genres) returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store just one movie detail
const movieDetails = (state = [], action) => {
    switch (action.type) {
        case 'SELECT_DETAILS': return action.payload
        default: return state;
      }
}

// Used to store movie edits to send to DB
const sendUpdate = (state=[], action)=>{
    if(action.type === `SEND_UPDATE`){
        return [...state, action.payload]
    }
    return state;
}


// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        movieDetails,
        sendUpdate
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
