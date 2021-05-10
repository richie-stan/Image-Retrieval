import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Test from "./pages/Test";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  const domain = "dev-a8hdv3kn.eu.auth0.com";
  const clientId = "o7baCLrJWzY6Rt8McyQiX2mE3Osrk1JS";
  return <Home />;
}

export default App;
