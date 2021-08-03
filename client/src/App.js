import React from "react"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Home from "./components/Home"
import { Context } from './context/Context'
import { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  const { user } = useContext(Context);
  return (
    <Router>
    <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
          {user ? <Home /> : <Login />}
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;