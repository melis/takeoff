import "./App.css";
import { Route, Redirect } from "react-router-dom";
import { useState } from "react";
import Sigin from "./components/Sigin/Sigin";
import Contacts from "./components/Contacts/Contacts";

function App() {
  const [auth, setAuth] = useState(false);
  return (
    <div className="App">
      <Route
        path="/"
        exact
        component={() => {
          if (!auth) {
            return <Redirect to="/sign-in" />;
          }
          return <Contacts />;
        }}
      />
      <Route path="/sign-in" exact>
        <Sigin setAuth={setAuth} auth={auth} />
      </Route>
    </div>
  );
}

export default App;
