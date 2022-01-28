import React, { useState } from "react";
import { Redirect } from "react-router-dom";

function Sigin({ setAuth, auth }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  if (auth) {
    return <Redirect to="/" />;
  }
  return (
    <form
      className="login_form"
      onSubmit={(e) => {
        e.preventDefault();

        if (login === "admin" && password === "admin") {
          setAuth(true);
        }
      }}
    >
      <input
        type="text"
        value={login}
        onChange={(e) => {
          setLogin(e.target.value);
        }}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button type="submit">Войти</button>
    </form>
  );
}

export default Sigin;
