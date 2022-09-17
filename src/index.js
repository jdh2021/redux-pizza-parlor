import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// pizza reducer
const pizzas = (state = [], action) => {
    if (action.TYPE === "SET_PIZZAS") {
        return action.payload;
    } else if (
        // clear state
        action.type === "CLEAR_ALL") 
    { return []; }
    return state;
}

const customer_name = '';
const street_address = '';
const city = '';
const zip = '';
const total = '';
const type = '';

// order reducer

const storeInstance = createStore(
    combineReducers({
        // pizza reducer
        pizzas,
        // order reducer
        customer_name,
        street_address,
        city,
        zip,
        total,
        type,
    }),
    applyMiddleware(logger)
);

ReactDOM.render( 
    <Provider store={storeInstance}>
        <App />
    </Provider>, document.getElementById('root'));
