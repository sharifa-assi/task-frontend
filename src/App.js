import React from "react";
import "./App.css";
import Form from "./Form";
import ShipmentForm from "./ShipmentForm";
import ShipmentList from "./ShipmentList";
import LoginForm from "./LoginForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signup">
          <Form />
        </Route>
        <Route path="/login">
          <LoginForm />
        </Route>
        <Route path="/makeshipment">
          <ShipmentForm />
        </Route>
        <Route path="/list">
          <ShipmentList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
