import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { createHistory as history } from 'history';

import App from './components/app';
import NewCar from './containers/new_car';

import { reducer as formReducer } from 'redux-form'; // Had to run 'yarn add redux-form@7.2.0'

import carsReducer from './reducers/cars_reducer';
import selectedCarReducer from './reducers/selected_car_reducer';


import '../assets/stylesheets/application.scss';

const garageName = prompt("What is your garage name?") || `garage${Math.floor(10 + (Math.random() * 90))}`;
const initialState = {
  garage: garageName,
  cars: [],
  // selectedCar: { id: 1, brand: 'Peugeot', model: '106', owner: 'John', plate: 'WOB-ED-42' }
};

const reducers = combineReducers({
  garage: (state = null, action) => state,
  cars: carsReducer,
  selectedCar: selectedCarReducer,
  form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(reduxPromise, logger));
const store = createStore(reducers, initialState, middlewares);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/:garage" exact component={App} />
        <Route path="/car/new" exact component={NewCar} />
        <Redirect from="/" to="/garage" />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
