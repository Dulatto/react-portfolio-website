import React, { useEffect } from 'react';
import TagCloud from 'react3dtagcloud';


const tagName = ['java', 'javscript', 'C', 'C++', '前端', 'React', 'Vue', 'redux', '写作', '程序员', '编程']

function About() {


    return (
        <div className='about-style'>
            <div className='row'>
                <div className='col-md-6 about-size'>
                    <div className='about-cont'>
                        <div className='my-5'>&nbsp;</div>
                        <h1 className='mt-5 ms-4'>
                            <span className='hvr-wobble-vertical'>A</span>
                            <span className='hvr-wobble-vertical'>b</span>
                            <span className='hvr-wobble-vertical'>o</span>
                            <span className='hvr-wobble-vertical'>u</span>
                            <span className='hvr-wobble-vertical'>t</span>      <span className='hvr-wobble-vertical'>m</span>
                            <span className='hvr-wobble-vertical'>e</span>    </h1>
                        <p className='my-5 ms-4'>I’m interested in freelance opportunities – especially ambitious or large projects.
                            However, if you have other request or question, don’t hesitate to use the form.</p>

                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='mt-5' style={{ width: '300px', height: '300px', color: 'red' }}>
                        <TagCloud tagName={tagName} radius={200} speed={1} ></TagCloud>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default About;