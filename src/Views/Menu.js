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
            <div className='p-3 text-white my-5 d-flex justify-content-center'>My logo</div>
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

            <ul className='social list-inline d-flex justify-content-center'>
                <li className='list-inline-item'><a href="https://www.linkedin.com/in/dulat-omarov/" target="_blank"><i className="fab fa-linkedin fa-2x"></i></a></li>
                <li className='list-inline-item'><a href="https://github.com/Dulatto" target="_blank"><i className="fab fa-github fa-2x"></i></a></li>

            </ul>
        </div>

    );
}

export default Menu;