import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes";
import './App.scss';

const App = () => {
  return (
    <div className="App">
    <Router>
      <Switch>
        {routes.map((route, i) => <Route key={i} {...route} />)}
      </Switch>
    </Router>
    </div>
  );
}
export default App; 