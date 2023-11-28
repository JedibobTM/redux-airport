import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

/** TODO: import REDUX **/
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
/** TODO: Add REDUCERS */
const airlineName = (state=[], action) => {
    if (action.type === 'CREATE_AIRLINE') {
        const newAirline = action.payload;

        return [...state, newAirline];
    }
    return state;
}

const createPlane = (state= '', action) => {
    if (action.type === 'CREATE_PLANE') {
        const newPlane = action.payload;
        
        return [...state, newPlane];
    }
    return state;
}

/** TODO: Create store */

const reduxStore = createStore (
    combineReducers ({
        airlineName,
        createPlane
    })
)

// Be sure to add the Provider! Just wrap App with it. Don't copy and paste from lecture, that will cause issues.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={reduxStore}>
        <App />
    </Provider>
);