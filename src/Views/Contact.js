import React from 'react';

function Contact(props) {
    return (
        <div className='contact-style'>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='contact-cont'>
                        <div className='my-5'>&nbsp;</div>
                        <h1 className='mt-5 ms-4'>
                            <span className='hvr-wobble-vertical'>C</span>
                            <span className='hvr-wobble-vertical'>o</span>
                            <span className='hvr-wobble-vertical'>n</span>
                            <span className='hvr-wobble-vertical'>t</span>
                            <span className='hvr-wobble-vertical'>a</span>
                            <span className='hvr-wobble-vertical'>c</span>
                            <span className='hvr-wobble-vertical'>t</span>    <span className='hvr-wobble-vertical'>m</span><span className='hvr-wobble-vertical'>e</span></h1>
                        <p className='my-5 ms-4'>I’m interested in freelance opportunities – especially ambitious or large projects.
                            However, if you have other request or question, don’t hesitate to use the form.</p>
                        <div className='row ms-4'>
                            <div className='col-6'>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Name" aria-describedby="inputGroup-sizing-default"></input>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Email" aria-describedby="inputGroup-sizing-default"></input>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Subject" aria-describedby="inputGroup-sizing-default"></input>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className="form-floating">
                                    <textarea className="form-control" style={{ height: 100 + 'px' }} ></textarea>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 bg-info'></div>
            </div>
        </div>
    );
}

export default Contact;