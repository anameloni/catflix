/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';


const Container = styled.ul`
  padding: 0;
  margin: 0;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    background-color: rgba(0,0,0,0.5);
    height: 30px;
    transform: initial;
    opacity: 1;
    padding-top: .4vh;
    padding-bottom: 3vh;
    transition: opacity 0.3s;
    foreground-color: rgba(1,0,0,0.5);
    

    &:hover,
    &:focus {
        opacity: .5;
        background-color: rgba(1,5,0,0.5);
        scale: 2;
    },
    &:before {
      font-size: 30px;
    }
  }
  
  .slick-prev {
    left: 0;
  }

  .slick-next {
    right: 16px;
  }
`;

export const SliderItem = styled.li`
  margin-right: 16px;
  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }
`;


const Slider = ({ children }) => (
  <Container>
    <SlickSlider {...{
      dots: false,
      infinite: true,
      speed: 300,
      centerMode: false,
      variableWidth: true,
      adaptiveHeight: true,
    }}
    >
      {children}
    </SlickSlider>
  </Container>
);

export default Slider; 