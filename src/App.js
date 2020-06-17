import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import CovidList from "./components/covid-list.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />

        <Route path="/" exact component={CovidList} />

      </div>
    </Router>
  );
}

export default App;
