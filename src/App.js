import React from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router, Switch, Route }
from "react-router-dom";

/*<Switch>
            <Route path="/checkout">
              <Header/>
              <h1>I AM A CHECKOUT</h1>
            </Route>
            <Route path="/">
              <Header/>
              <Home/>
            </Route>
          </Switch>*/

function App() {
  return (
    <Router>
        <div className="app">
          <Switch>
            <Route path="/checkout">
              <Header/>
              <Checkout />
            </Route>
            <Route path="/"> 
              <Header/>
              <Home/>
            </Route>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
