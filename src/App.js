import React from 'react';
import './App.css';
import Menu from './Views/Menu';

const App = () => {
  return (
    <div>
      <div className='container-fluid'>
        <div className='row '>
          <div className='col-xl-2 col-lg-3 col-md-4 main-div px-0'><Menu /></div>
          <div className='col-xl-10 col-lg-9 col-md-8 bg-light'>TEST</div>
        </div>
      </div>
    </div>
  );
};

export default App;