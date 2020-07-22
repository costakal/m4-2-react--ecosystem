import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import ItemDetails from "./ItemDetails";

const App = (props) => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home items={props.items} />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/items/:itemId">
            <ItemDetails items={props.items} sellers={props.sellers} />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
