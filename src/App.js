import React from "react";
import ProstForms from "./components/prostForms";
import Prosts from "./components/prosts";
import store from "./store";
import "./App.css";

import { Provider } from "react-redux";

import { BrowserRouter as Router } from "react-router-dom";

// const store = createStore(() => [], {}, applyMiddleware());

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router className="App">
          <ProstForms />
          <Prosts />
        </Router>
      </Provider>
    );
  }
}

export default App;
