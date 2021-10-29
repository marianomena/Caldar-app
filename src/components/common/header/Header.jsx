import React from 'react';
import { Navbar } from '../../common';

import './Header.css';


function Header (){

    return(
        <section className="header">
            <section className="header-top">
                <section classNmae="header-top__logo">
                    <a href = "/" className = "header-logo">LOGO</a>
                </section>
                <section className="header-top__navbar">    
                    <section className="header-top__navigation">        
                        <Navbar />
                    </section>
                <hr className="header-top__separator" />
                </section>
            </section>
            <section className="header-bottom">
                <section className="header-bottom__resource">
                Calderas
                </section>
            </section>
        </section>


    )
}

export default Header;