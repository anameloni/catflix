import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled from 'styled-components'; //Biblioteca que permite escrever o CSS dentro do React

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 50px; 
    padding-left: 5%;
    padding-right: 5%;
`;

//Componente PageDefault cria uma template com o Header (Menu) e o Footer
//styled-component Main define o CSS do Template 
function PageDefault({children}) {
    return(
        <React.Fragment>
            <Menu />
                <Main>
                    {children}
                </Main>
            <Footer />
        </React.Fragment>
    )
}

export default PageDefault;