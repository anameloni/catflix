import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/Img/LogoCatflixLaranja.png';
import './Menu.css';
import Button from '../Button';

function Menu() {
    return (
        <nav className = "Menu">
            <Link to = "/">
                <img className = "Logo" src = {Logo} alt = 'Catflix logo'/>
            </Link>

            <Button as = {Link} className = "ButtonLink" to = "/cadastro/video">
                Novo Vídeo
            </Button>
        </nav>
    )
}

export default Menu; // Export the component