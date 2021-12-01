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
                <span className='hvr-wobble-vertical'>b</span> <span>d</span>
                <span className='hvr-wobble-vertical'>e</span>
                <span className='hvr-wobble-vertical'>v</span>
                <span className='hvr-wobble-vertical'>e</span>
                <span className='hvr-wobble-vertical'>l</span>
                <span className='hvr-wobble-vertical'>o</span>
                <span className='hvr-wobble-vertical'>p</span>
                <span className='hvr-wobble-vertical'>e</span>
                <span className='hvr-wobble-vertical'>r</span></h1>
            <p>Frontend Web Developer</p>
            <button type="button" class="btn btn-outline-primary">Contact Me</button>
        </div>
    );
}

export default Home;