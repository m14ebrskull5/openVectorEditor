// eslint-disable-next-line
import Symbol_observable from "symbol-observable";
import React from "react";
import { Provider } from "react-redux";
import { HashRouter as Router, Route, Redirect } from "react-router-dom";

import store from "./store";
import { render } from "react-dom";

import EditorDemo from "./EditorDemo";
import "./style.css";

const Demo = () => {
  return (
    <Provider store={store}>
      <Router>
        <div
          style={{
            height: "100%",
            display: "flex",
            flexGrow: 1,
            flexDirection: "column",
            overflow: "hidden"
          }}
        >
          <Route exact path="/" render={() => <Redirect to="/Editor" />} />
          <Route
            render={({ history }) => {
              return <EditorDemo history={history} />;
            }}
            path="/Editor"
          />
        </div>
      </Router>
    </Provider>
  );
};

render(<Demo />, document.querySelector("#demo"));
