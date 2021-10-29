import React from 'react';
import { Header } from './components/common';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AppAltaCaldera from './pages/AppAltaCaldera';
import Home from './pages/Home';
import AppBajaCaldera from './pages/AppBajaCaldera';
import AppBusquedaCaldera from './pages/AppBusquedaCaldera';
import AppUpdateCaldera from './pages/AppUpdateCaldera';
import './App.css';





function App() {
  return (
    <section>
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact={true}>            
              <Home/>
          </Route>
          <Route path="/altaCaldera" exact={true}>            
              <AppAltaCaldera/>
          </Route>
          <Route path="/bajaCaldera" exact={true}>            
              <AppBajaCaldera/>
          </Route>
          <Route path="/updateCaldera" exact={true}>            
              <AppUpdateCaldera/>
          </Route>
          <Route path="/busquedaCaldera" exact={true}>            
              <AppBusquedaCaldera/>
          </Route>
        </Switch>
      </Router>
    </div>
    </section>
  )
}





export default App;


