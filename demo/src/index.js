// eslint-disable-next-line
import Symbol_observable from "symbol-observable";
import React, { useState } from "react";
import { Provider } from "react-redux";
import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import store from "./store";
import { render } from "react-dom";
import Login from "./Login";
import ErrorPage from "./ErrorPage";
import Signout from "./Signout";
import "./style.css";
console.warn = () => {};
import("./EditorDemo").then(({ default: EditorDemo }) => {
  const Demo = () => {
    const [shouldRedirect, setRedirect] = useState(false);
    const originFetch = fetch;
    Object.defineProperty(window, "fetch", {
      configurable: true,
      enumerable: true,
      // writable: true,
      get() {
        return (url, options) => {
          return new Promise((resolve, reject) => {
            originFetch(url, {
              ...options,
              mode: "cors",
              credentials: "include"
            }).then((data) => {
              if (data.status !== 200) {
                !shouldRedirect && setRedirect(true);
                reject(401); //自定义fetch
              }
              resolve(data);
            });
          });
        };
      }
    });
    return (
      <HashRouter>
        <Provider store={store}>
          <div
            style={{
              height: "100%",
              display: "flex",
              flexGrow: 1,
              flexDirection: "column",
              overflow: "hidden"
            }}
          >
            <Routes>
              <Route
                exact
                path="/"
                element={<Navigate replace to="/Editor" />}
              />
              <Route
                element={
                  !shouldRedirect ? (
                    <EditorDemo />
                  ) : (
                    <Navigate replace to="/login" />
                  )
                }
                path="/Editor"
              />
              <Route path="/login" element={<Login />} />
              <Route path="/signout" element={<Signout />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </div>
        </Provider>
      </HashRouter>
    );
  };
  render(<Demo />, document.querySelector("#demo"));
});
