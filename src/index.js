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
}

// SAGAS
function * getMovies (action) {
    try {
      const getResponse = yield axios.get('/movies');
      yield put ({type: 'SET_MOVIES', payload: getResponse.data})
    }
    catch (error) {
      console.log('error on getting movies:',error);
    }
  }
  

// sagaMiddleware
const sagaMiddleware = createSagaMiddleware();


// REDUCERS
// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

const movieDetails = (state = [], action) => {
    switch (action.type) {
        case 'SELECT_DETAILS': return action.payload
        default: return state;
      }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        movieDetails,
        genres
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
