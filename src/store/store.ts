import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import DevTools from '../components/Devtools/Devtools';
import rootReducer from '../reducers/root.reducer';

const enhancer = compose(
  // Middleware you want to use in development:
  applyMiddleware(thunk),
  // Required! Enable Redux DevTools with the monitors you chose
  DevTools.instrument()
);

export default function configureStore() {
  const store = createStore(rootReducer, enhancer);

  return store;
}
