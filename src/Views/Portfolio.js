import React, { useState } from 'react';

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

let list = images.map(item => {
    return <div key={item.id} className="col-md-4">{item.text}</div>
})

const Portfolio = () => {
    const [gallery, setGallery] = useState([list])




    const allList = () => {
        let list = images.map(item => {
            return <div key={item.id} className="col-md-4">{item.text}</div>
        })
        setGallery(list);
    }
    const website = () => {
        let list = images.filter(item => item.type === 'JS')
        let web = list.map(item => {
            return <div key={item.id} className="col-md-4">{item.text}</div>
        });
        setGallery(web);
    }
    const react = () => {
        let list = images.filter(item => item.type === 'React')
        let web = list.map(item => {
            return <div key={item.id} className="col-md-4">{item.text}</div>
        });
        setGallery(web);
    }

    return (
        <div className='portfolio-style'>
            <div>
                <button type="button" className="btn btn-outline-secondary" onClick={allList}>All</button>
                <button type="button" className="btn btn-outline-secondary" onClick={website}>Websites</button>
                <button type="button" className="btn btn-outline-secondary" onClick={react}>React</button>
            </div>
            <div className='row text-white'>
                {gallery}
            </div>
        </div>
    );
}

export default Portfolio;