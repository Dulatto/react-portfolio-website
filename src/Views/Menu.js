import React from 'react';
import menu from '../data';

function Menu(props) {
    return (
        <ul className='menu-style '>
            {menu.map(item => {
                return (
                    <li key={item.id} className='text-light d-flex justify-content-center '>
                        {item.name}
                    </li>
                )
            })}
        </ul>
    );
}

export default Menu;