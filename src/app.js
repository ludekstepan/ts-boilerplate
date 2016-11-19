// this must be executed first for the HMR to work correctly
require("react-hot-loader/patch");

// libraries:
import * as React from "react";
import {render} from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import {AppContainer} from 'react-hot-loader';
import { router5Middleware, router5Reducer } from 'redux-router5';

// application:
import App from "./components/App";
import rootReducer from './reducers';
import createRouter from './router';

// create the reducer
const reducer = combineReducers({
  router: router5Reducer,
  root: rootReducer,
});

const router = createRouter();

// create the store:
const enhancer = compose(
  applyMiddleware(
    router5Middleware(router),
  ),
  window.devToolsExtension && window.devToolsExtension(),
);

const store = createStore(reducer, enhancer);

router.start();

render(
  <AppContainer>
    <Provider store={store}>
      <App/>
    </Provider>
  </AppContainer>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(
      <AppContainer>
        <Provider store={store}>
          <App/>
        </Provider>
      </AppContainer>,
      document.getElementById('root')
    );
  });

  module.hot.accept('./reducers', () => {
    store.replaceReducer(rootReducer);
  });
}
