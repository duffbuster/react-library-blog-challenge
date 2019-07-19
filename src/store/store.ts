import { applyMiddleware, compose, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import rootReducer from '../reducers/root.reducer';
import { rootEpic } from './root.epic';

export const API_URL = 'http://challengenewsapi.azurewebsites.net/api/';

declare global {
  interface Window {
    // tslint:disable-next-line: ban-types
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
  }
}

const epicMiddleware = createEpicMiddleware();

const composeEnhancers =
  (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export default function configureStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(epicMiddleware))
  );

  epicMiddleware.run(rootEpic);

  return store;
}
