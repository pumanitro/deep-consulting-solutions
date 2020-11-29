import React from 'react';
import {Home} from "./pages/Home/Home";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {CityDetail} from "./pages/CityDetail/CityDetail";

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/city-detail/:cityName">
            <CityDetail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
