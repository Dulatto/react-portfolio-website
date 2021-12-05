import React from 'react';

const images = [
    { id: 1, text: 'Dating', imageId: 1, description: 'HTML, JavaScript', type: 'JS' },
    { id: 2, text: 'Dating', imageId: 2, description: 'HTML, JavaScript', type: 'JS' },
    { id: 3, text: 'Dating', imageId: 3, description: 'HTML, JavaScript', type: 'JS' }
]

function Portfolio(props) {
    return (
        <div className='portfolio-style'>
            <div className='row'>
                <div className='col-md-4'></div>
                <div className='col-md-4'></div>
                <div className='col-md-4'></div>
            </div>
        </div>
    );
}

export default Portfolio;