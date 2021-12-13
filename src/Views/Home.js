import React from 'react';

function Home(props) {
    return (
        <div className='text-white home-style'>
            <h1 className='h1-styled'><span className='hvr-wobble-vertical'>H</span>
                <span className='hvr-wobble-vertical'>i</span>
                <span className='hvr-wobble-vertical'>,</span>
                <br /> <span className='hvr-wobble-vertical'>I</span>
                <span className='hvr-wobble-vertical'>'</span>
                <span className='hvr-wobble-vertical'>m</span> <span className='name-color'>D</span><span className='hvr-wobble-vertical'>u</span><span className='hvr-wobble-vertical'>l</span><span className='hvr-wobble-vertical'>a</span><span className='hvr-wobble-vertical'>t</span><span className='hvr-wobble-vertical'>,</span></h1>
            <h1 className='h1-styled'><span className='hvr-wobble-vertical'>w</span>
                <span className='hvr-wobble-vertical'>e</span>
                <span className='hvr-wobble-vertical'>b</span> <span className='hvr-wobble-vertical'>d</span>
                <span className='hvr-wobble-vertical'>e</span>
                <span className='hvr-wobble-vertical'>v</span>
                <span className='hvr-wobble-vertical'>e</span>
                <span className='hvr-wobble-vertical'>l</span>
                <span className='hvr-wobble-vertical'>o</span>
                <span className='hvr-wobble-vertical'>p</span>
                <span className='hvr-wobble-vertical'>e</span>
                <span className='hvr-wobble-vertical'>r</span></h1>
            <p>Frontend Web Developer</p>
            <button type="button" className="btn btn-outline-primary hvr-bounce-to-right"><a href='http://localhost:3001/contact'>Contact Me</a></button>
        </div>
    );
}

export default Home;