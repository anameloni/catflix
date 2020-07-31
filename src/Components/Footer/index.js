import React from 'react';
import { FooterBase } from './styles';
import Thumbnail from '../../Assets/Img/Tumblenail.png'

function Footer() {
  return (
    <FooterBase>
      <a href="https://github.com/anameloni">
        <img src={Thumbnail} alt="Thumbnail Ana" />
      </a>
      <p>
        Orgulhosamente criado por
        {' '}
        <a href="www.linkedin.com/in/analuizameloni">
          Ana Luiza Meloni Dias
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
