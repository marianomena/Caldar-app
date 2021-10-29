import React from 'react';
import './App.css';
import Nav from './pages/nav';
import clientes from './pages/clientes';
import mantenimientos from './pages/mantenimientos';
import personal from './pages/personal';
import informes from './pages/informes';
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
