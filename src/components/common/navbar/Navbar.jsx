import React from 'react';

import './Navbar.css';

function Navbar () {

    return (
        <section>
            <a href="/" className="navbar-item">Home</a>
            <a href="/altaCaldera" className="navbar-item">Alta</a>
            <a href="/bajaCaldera" className="navbar-item">Baja</a>
            <a href="/updateCaldera" className="navbar-item">Actualizacion</a>
            <a href="/busquedaCaldera" className="navbar-item">Busqueda</a>
        </section>

    )
}

export default Navbar