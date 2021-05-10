import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/Home" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
