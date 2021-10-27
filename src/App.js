import './App.css';
import Login from './components/login/Login'
import Register from './components/register/Register';
import Home from './components/home/Home';
import { BrowserRouter as Router, Switch, Route /* Link */ } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        {/* <div>
          <Link to="/">Home</Link>
          </div>
        <div>
          <Link to="/blogs">Blog Articles</Link>
          </div>
        <div>
        <Link to="/contact">Contact Me</Link>
        </div>

        <hr /> */}

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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
