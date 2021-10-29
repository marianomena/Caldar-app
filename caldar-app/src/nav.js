import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';



function nav() {
  const navStyle = {
    color: 'white'
  };

  return (
    <nav>
      <h3>Caldar</h3>
      <ul className="nav-links">
        <Link style={navStyle} to= "/clientes">
            <li>Clientes</li>
        </Link>
        <Link style={navStyle} to= "/mantenimientos">
            <li>Mantenimientos</li>
        </Link><Link style={navStyle} to= "/personal">
            <li>Personal</li>
        </Link><Link style={navStyle} to= "/informes">
            <li>Informes</li>
        </Link>
      </ul>
    </nav>
  );
}

export default nav;
