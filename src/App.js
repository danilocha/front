import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/layout/Nav";
import Inicio from "./components/Inicio/Inicio";
import Oportunidad from "./components/Oportunidad/Oportunidad";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router>
      <Nav />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route exact path="/oportunidad/:id" component={Oportunidad} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
