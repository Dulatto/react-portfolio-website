import React from 'react';

function Home(props) {
    return (
        <div className='text-white home-style'>
            <h1 className='h1-styled'>Hi, <br /> I'm <span className='name-color'>D</span>ulat</h1>
            <h4>Frontend Web Developer</h4>
            <button type="button" class="btn btn-outline-primary">Contact Me</button>
        </div>
    );
}

export default Home;