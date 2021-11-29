import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

function Menu(props) {
    return (


        <div>
            <div className='p-3 text-white my-5'>My logo</div>
            <ul className='menu-style '>
                <li className='text-light d-flex justify-content-center '>
                    <Link to="/">HOME</Link>
                </li>
                <li className='text-light d-flex justify-content-center '>
                    <Link to="/about">ABOUT</Link>
                </li>
                <li className='text-light d-flex justify-content-center '>
                    <Link to="/portfolio">PORTFOLIO</Link>
                </li>
                <li className='text-light d-flex justify-content-center '>
                    <Link to="/contact">CONTACT</Link>
                </li>
            </ul>

            <hr />


        </div>

    );
}

export default Menu;