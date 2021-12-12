import React, { useState } from 'react';

function Contact(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    return (
        <div className='contact-style'>
            <div className='row'>
                <div className='col-md-6 cont-size'>
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
                                    <input type="text" className="form-control" placeholder="Name" value={name} onChange={e => setName(e.target.value)}></input>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}></input>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Subject" value={message} onChange={e => setMessage(e.target.value)}></input>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className="form-floating">
                                    <textarea className="form-control" style={{ height: 100 + 'px' }} ></textarea>

                                </div>
                            </div>
                            <div className='col-4 mt-2'>
                                <button type="button" className="btn btn-outline-primary hvr-bounce-to-right">Submit</button>
                            </div>

                        </div>

                    </div>
                </div>
                <div className='col-md-6 map'></div>
            </div>
        </div>
    );
}

export default Contact;