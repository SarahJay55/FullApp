import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import reducer from './ducks/users.js';

export default createStore(reducer, applyMiddleware( promiseMiddleware() ));