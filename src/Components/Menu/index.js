import React from 'react';
import Logo from '../../Assets/Img/LogoCatflixLaranja.png';
import './Menu.css';
import Button from '../Button';

function Menu() {
    return (
        <nav className = "Menu">
            <a href = "/">
                <img className = "Logo" src = {Logo} alt = 'Catflix logo'/>
            </a>

            <Button as = "a" className = "ButtonLink" href = "/">
                Novo Meme
            </Button>
        </nav>
    )
}

export default Menu; // Export the component