import React from 'react';
import Login from './page/Login'
import Register from './page/Register';
import Home from './page/Home';
import Error from './page/Error';
import { BrowserRouter as Router, Switch, Route /* Link */ } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route component= {Error} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
