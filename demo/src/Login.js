import { reduxForm, Field } from "redux-form";
import "./login.css";
import serveraddress from "./EditorDemo/serveraddress";
import React, { useState } from "react";
const Login = ({ handleSubmit }) => {
  const [message, setMessage] = useState("");
  const onSubmit = handleSubmit((vals) => {
    const formdata = new FormData();
    formdata.append("username", vals.username);
    formdata.append("password", vals.password);
    fetch(serveraddress + "/login", {
      method: "POST",
      body: formdata,
      redirect: "follow",
      mode: "cors",
      credentials: "include"
    }).then(async (data) => {
      data = await data.json();
      if (data.code !== 0) {
        setMessage(data.message);
      } else {
        window.location.href = "/";
      }
    });
  });
  return (
    <div className="container">
      <form onSubmit={onSubmit} className="form-signin">
        <h2 className="form-signin-heading">Please sign in</h2>
        {message && (
          <div className="alert alert-danger" role="alert">
            {message}
          </div>
        )}
        <p>
          <label htmlFor="username" className="sr-only">
            Username
          </label>
          <Field
            name="username"
            type="text"
            placeholder="Username"
            required
            autoFocus
            className="form-control"
            component="input"
          ></Field>
        </p>
        <p>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <Field
            component="input"
            type="password"
            id="password"
            name="password"
            className="form-control"
            placeholder="Password"
            required
          />
        </p>
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default reduxForm({
  form: "LoginForm"
})(Login);
