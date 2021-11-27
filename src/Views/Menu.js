import React from 'react';
import menu from '../data';

function Menu(props) {
    return (
        <ul>
            {menu.map(item => {
                return (
                    <li key={item.id}>
                        {item.name}
                    </li>
                )
            })}
        </ul>
    );
}

export default Menu;