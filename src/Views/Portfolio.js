import React from 'react';

const images = [
    { id: 1, text: 'Dating', description: 'HTML, JavaScript', type: 'JS' },
    { id: 2, text: 'Restaurant', description: 'HTML, JavaScript', type: 'JS' },
    { id: 3, text: 'Dating', description: 'HTML, JavaScript', type: 'JS' },
    { id: 4, text: 'Medical', description: 'HTML, JavaScript', type: 'JS' },
    { id: 5, text: 'Book', description: 'HTML, JavaScript', type: 'JS' },
    { id: 6, text: 'Pet', description: 'HTML, JavaScript', type: 'JS' },
    { id: 7, text: 'Cafe', description: 'HTML, JavaScript', type: 'JS' },
    { id: 8, text: 'Weather', description: 'HTML, JavaScript', type: 'React' },
    { id: 9, text: 'Todo', description: 'HTML, JavaScript', type: 'React' },
    { id: 10, text: 'Tracker', description: 'HTML, JavaScript', type: 'React' },
    { id: 11, text: 'Portfolio', description: 'HTML, JavaScript', type: 'React' },
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