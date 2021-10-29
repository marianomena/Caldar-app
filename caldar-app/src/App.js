import React from 'react';
import './App.css';
import Nav from './nav';
import clientes from './clientes';
import mantenimientos from './mantenimientos';
import personal from './personal';
import informes from './informes';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path='/' exact component={home} />
          <Route path="/clientes" component={clientes} />
          <Route path="/mantenimientos" component={mantenimientos} />
          <Route path="/personal" component={personal} />
          <Route path="/informes" component={informes} />
        </Switch>
      </div>
    </Router>
  );
}

const home = () => (
  <div>
    <h1>Pagina Home</h1>
  </div>
)

export default App;
