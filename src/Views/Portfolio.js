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
    { id: 11, text: 'Portfolio', description: 'HTML, JavaScript', type: 'JS' },
    { id: 12, text: 'Shopping cart', description: 'HTML, JavaScript', type: 'React' },
    { id: 13, text: 'Timer', description: 'HTML, JavaScript', type: 'React' },
]

let list = images.map(item => {
    return (<div className="col-md-3 portfolio-item">
        <div class={`card hover-bg text-dark mb-2 bground-${item.id}`} key={item.id}>
            <div class="card-body">
                <div class="hover-text">
                    <div class="overlay-caption">
                        <div class="overlay-content">
                            <h4 class="card-title">{item.text}</h4>
                            <hr />
                            <h5 class="card-text">{item.description}</h5>
                        </div>
                    </div>
                </div >
            </div>
        </div>
    </div>)
})

const Portfolio = () => {
    const [gallery, setGallery] = useState([list])


    const frame = (item) => {
        return (
            <div className="col-md-3  portfolio-item" >
                <div className={`card hover-bg text-dark mb-2 bground-${item.id}`} key={item.id}>
                    <div className="card-body">
                        <div class="hover-text">
                            <div class="overlay-caption">
                                <div class="overlay-content">
                                    <h4 className="card-title">{item.text}</h4>
                                    <hr />
                                    <h5 className="card-text">{item.description}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >);
    }


    const allList = () => {
        let list = images.map(item => {
            return (
                frame(item)
            )
        })
        setGallery(list);
    }
    const website = () => {
        let list = images.filter(item => item.type === 'JS')
        let web = list.map(item => {
            return (
                frame(item)
            )
        });
        setGallery(web);
    }
    const react = () => {
        let list = images.filter(item => item.type === 'React')
        let web = list.map(item => {
            return (
                frame(item)
            )
        });
        setGallery(web);
    }


    return (
        <div className='portfolio-style'>
            <div>
                <button type="button" className="btn btn-outline-primary hvr-bounce-to-right mt-3 ms-3" onClick={allList}>All</button>
                <button type="button" className="btn btn-outline-primary hvr-bounce-to-right mt-3 ms-3" onClick={website}>Websites</button>
                <button type="button" className="btn btn-outline-primary hvr-bounce-to-right mt-3 ms-3" onClick={react}>React</button>
            </div>
            <div className='row text-white mt-2 px-2'>
                {gallery}
            </div>
        </div>
    );
}

export default Portfolio;