import 'babel-polyfill';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import sagas from './sagas';
import reducers from './reducers';


const preloadedState = window.__PRELOADED_STATE__;

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = composeWithDevTools({ maxAge: 150 });

const store = createStore(
    reducers,
    preloadedState,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
);
sagaMiddleware.run(sagas);

export default store;

delete window.__PRELOADED_STATE__;
