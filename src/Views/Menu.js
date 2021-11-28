import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Menu(props) {
    return (

        <Router>
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

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/portfolio">
                        <Portfolio />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default Menu;