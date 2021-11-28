import React from 'react';
//import menu from '../data';

function Menu(props) {
    return (
        <ul className='menu-style '>
            <li className='text-light d-flex justify-content-center '>
                HOME
            </li>
            <li className='text-light d-flex justify-content-center '>
                ABOUT
            </li>
            <li className='text-light d-flex justify-content-center '>
                PORTFOLIO
            </li>
            <li className='text-light d-flex justify-content-center '>
                CONTACT
            </li>
        </ul>
    );
}

export default Menu;