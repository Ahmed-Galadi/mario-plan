import React from 'react';
import { NavLink } from 'react-router-dom';

export const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/new'>New Project</NavLink></li>
            <li><NavLink to='/'>Log Out</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>AG</NavLink></li>
        </ul>
    );
}

 