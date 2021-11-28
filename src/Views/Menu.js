import React from 'react';
// import Home from '.Home';
// import About from '.About';
// import Portfolio from '.Portfolio';
// import Contact from '.Contact';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

function Menu(props) {
    return (


        <div>
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