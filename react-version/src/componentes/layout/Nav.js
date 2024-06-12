import React, { Component } from 'react';
import './styles/Nav.css'
import logo from './logo.png';
import { NavLink } from 'react-router-dom';

export default class Nav extends Component {

    render() {

        return (
            <nav>
                <div className="nav">
                    <img src={logo} alt="Todo lechuga"/>
                    <h1 className="cursiva">Todo Lechuga</h1>
                    <ul>
                        <i className='bx bx-menu ham'></i>
                    </ul>
                </div>
                <div className="enlaces">
                    <ul>
                        <div id="links" className="desactivado">
                            <li><NavLink  exact activeClassName='activo' to='/'>Inicio</NavLink></li>
                            <li><NavLink activeClassName='activo' to='/menu'>Menú</NavLink></li>
                            <li><NavLink activeClassName='activo' to='/nosotros'>Sobre Nosotros</NavLink></li>
                            <li><NavLink activeClassName='activo' to='/contactanos'>Contactanos</NavLink></li>
                        </div>
                    </ul>
                </div>
            </nav>
        )
    }
}
