import React from 'react';
import './App.css';
import Menu from './Views/Menu';
import Home from './Views/Home';
import About from './Views/About';
import Portfolio from './Views/Portfolio';
import Contact from './Views/Contact';
import Skills from './Views/Skills';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return (
    <div>
      <div className='container-fluid'>
        <div className='main-div'>
          <Menu />
        </div>
        <div className='row content'>

          <div className='col-12 bg-light px-0'>
            <Routes >
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />

            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;