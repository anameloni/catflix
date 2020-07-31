import React from 'react';
import PageDefault from '../../../Components/PageDefault';
import { Link } from 'react-router-dom'; //Biblioteca que permite usar o "to" no lugar do "href" e outras abastrações de rotas

function CadastroVideo() { 
    //Componente PageDefault cria o template com o Header (Menu) e o Footer
    return(
        <PageDefault> 
            <h1>Cadastro de novos vídeo</h1>
            <Link to="/cadastro/categoria">
                Cadastrar categoria
            </Link>
        </PageDefault>
    )
}

export default CadastroVideo;