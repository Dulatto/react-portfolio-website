import React from 'react';

function Home(props) {
    return (
        <div className='text-white home-style'>
            <h1 className='h1-styled'><span>H</span>
                <span>i</span>
                <span>,</span>
                <br /> <span>I</span>
                <span>'</span>
                <span>m</span> <span className='name-color'>D</span><span>u</span><span>l</span><span>a</span><span>t</span><span>,</span></h1>
            <h1 className='h1-styled'><span>w</span>
                <span>e</span>
                <span>b</span> <span>d</span>
                <span>e</span>
                <span>v</span>
                <span>e</span>
                <span>l</span>
                <span>o</span>
                <span>p</span>
                <span>e</span>
                <span>r</span></h1>
            <p>Frontend Web Developer</p>
            <button type="button" class="btn btn-outline-primary">Contact Me</button>
        </div>
    );
}

export default Home;