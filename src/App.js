import './App.css';
import React from 'react';
import Login from './components/login/Login'
import Register from './components/register/Register';
import Home from './components/home/Home';
import Error from './components/error/Error';
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
