import React from 'react';
import { NavLink } from 'react-router-dom';


export default function Nav() {
    return (
        <ul className='nav'>
            <li>
                <NavLink exact activeClassName='active' to='/muebles/detalles'>
                    Detalles
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName='active' to='/muebles/preguntas'>
                    Preguntas
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName='active' to='/muebles/ofertas'>
                    Ofertas
                </NavLink>
                <p>5</p>
            </li>
        </ul>
    )
}