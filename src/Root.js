import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// import reduxPromise from 'redux-promise';
import asyncMiddleware from './middleware/async';
import validateState from './middleware/validateState';
import reducers from './reducers/index';

export default ({ children, initialState = {} }) => {
    const store = createStore(
        reducers,
        initialState,
        applyMiddleware(asyncMiddleware, validateState));
    return (
        <Provider store={store}>
         {children}
        </Provider>
    )
}

