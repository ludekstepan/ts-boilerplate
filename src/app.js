// this must be executed first for the HMR to work correctly
require("react-hot-loader/patch");

// libraries:
import * as React from "react";
import {render} from "react-dom";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {AppContainer} from 'react-hot-loader';

// application:
import App from "./components/App";
import rootReducer from './reducers';

// create the store:
const store = createStore(rootReducer, window.devToolsExtension && window.devToolsExtension());

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
