import React from 'react';
import PageDefault from '../../../Components/PageDefault';
import { Link } from 'react-router-dom'; //Biblioteca que permite usar o "to" no lugar do "href" e outras abastrações de rotas

function CadastroCategoria() { 
    //Componente PageDefault cria o template com o Header (Menu) e o Footer
    return(
        <PageDefault> 
            <h1>Cadastro de novas categorias</h1>

            <form>
                <label>
                    Nome da Cateoria:
                    <input type='text'/>
                </label>
                <button>
                    Cadastrar
                </button>
            </form>
            
            <Link to="/">
                Voltar apra a home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;