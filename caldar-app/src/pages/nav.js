import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';


function nav() {
  const nStyle = {
    color: 'black'
  };

  return (
    <nav>
      <h3>Caldar</h3>
      <ul className="nav-links">
        <Link to="/clientes" style={nStyle}>
            <li>Clientes</li>
        </Link>
        <Link style={nStyle} to="/mantenimientos">
            <li>Mantenimientos</li>
        </Link>
        <Link style={nStyle} to="/personal">
            <li>Personal</li>
        </Link>
        <Link style={nStyle} to="/informes">
            <li>Informes</li>
        </Link>
      </ul>
    </nav>
  );
}

export default nav;
