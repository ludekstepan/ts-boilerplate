// this must be executed first for the HMR to work correctly
require("react-hot-loader/patch");

// libraries:
import * as React from "react";
import { render } from "react-dom";
import { AppContainer } from 'react-hot-loader';

// application:
import App from "./components/App";

render(
  <AppContainer>
    <App/>
  </AppContainer>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(
      <AppContainer>
          <App/>
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
