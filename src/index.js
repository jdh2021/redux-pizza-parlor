import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

// pizza reducer
const pizzas = (state = [], action) => {
    if (action.type === "SET_PIZZAS") {
        return [...state, action.payload];
    } else if (
        // clear state
        action.type === "CLEAR_ALL"
    ) {
        return [];
    }
    return state;
};

// order reducer
const customer_name = (state = "", action) => {
    if (action.type === "SET_CUSTOMER_NAME") {
        return action.payload;
    } else if (
        // clear state
        action.type === "CLEAR_ALL"
    ) {
        return "";
    }
    return state;
};

const street_address = (state = "", action) => {
    if (action.type === "SET_STREET_ADDRESS") {
        return action.payload;
    } else if (
        // clear state
        action.type === "CLEAR_ALL"
    ) {
        return "";
    }
    return state;
};

const city = (state = "", action) => {
    if (action.type === "SET_CITY") {
        return action.payload;
    } else if (
        // clear state
        action.type === "CLEAR_ALL"
    ) {
        return "";
    }
    return state;
};

const zip = (state = "", action) => {
    if (action.type === "SET_ZIP") {
        return action.payload;
    } else if (
        // clear state
        action.type === "CLEAR_ALL"
    ) {
        return "";
    }
    return state;
};

const total = (state = 0, action) => {
    if (action.type === "SET_TOTAL") {
        return state + action.payload;
    } else if (
        // clear state
        action.type === "CLEAR_ALL"
    ) {
        return 0;
    }
    return state;
};

const type = (state = "", action) => {
    if (action.type === "SET_TYPE") {
        return "";
    } else if (
        // clear state
        action.type === "CLEAR_ALL"
    ) {
        return "";
    }
    return state;
};

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
    </Provider>,
    document.getElementById("root")
);
