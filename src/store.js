import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as accountReducer } from './account/ducks';

export const history = createHistory();
const router = routerMiddleware(history);

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable no-underscore-dangle */

const rootReducer = combineReducers({
  router: routerReducer,
  form: formReducer,
  account: accountReducer,
});

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, router)));
