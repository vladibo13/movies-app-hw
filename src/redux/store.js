import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import root from './reducers';
const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose
const store = createStore(root, composeEnhancers(applyMiddleware(thunk)));
export default store;
