import React, { useState } from 'react'; 
import { Link } from 'react-router-dom'; //Biblioteca que permite usar o "to" no lugar do "href" e outras abastrações de rotas
import PageDefault from '../../../Components/PageDefault';
import FormField from '../../../Components/FormField';

function CadastroCategoria() { 
    const valoresIniciais = {
        nome:'',
        descricao:'',
        cor: '',
    }
    const [categorias, setCategorias] = useState ([]);
    const [values, setValues] = useState(valoresIniciais);

    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor,//atribui a posição [chave]do dicionário o valor 'valor' que foi capturado do input
        });
    }

    function handleChange(infosDoEvento){
        const {getAttribute, value} =  infosDoEvento.target; 
        setValue(
            getAttribute('name'),
            value
            );
    }

    //Componente PageDefault cria o template com o Header (Menu) e o Footer
    //Handle é a função que captura algo na tela (standby)
    return(
        <PageDefault> 
            <h1>Cadastro da categoria: { values.nome }</h1>

            <form onSubmit = {function handleSubmit (infosDoEvento){
                infosDoEvento.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ])

                setValues(valoresIniciais);
            }}>

               <FormField 
                    lable = 'Nome da Categoria'
                    type = 'text'
                    value = {values.nome}
                    name = 'nome'
                    onChange = {handleChange}
               />
                
                <FormField 
                    lable = 'Descrição'
                    type = 'textarea'
                    value = {values.descricao}
                    name = 'descricao'
                    onChange = {handleChange}
               />

                <FormField 
                    lable = 'cor'
                    type = 'color'
                    value = {values.cor}
                    name = 'cor'
                    onChange = {handleChange}
               />
               
                {/* <div>
                    <label>
                        Descrição :
                        <textarea 
                            type='text'
                            value = {values.descricao}
                            name = 'descricao'
                            onChange = {handleChange}
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Cor :
                        <input
                            type='color'
                            value = {values.cor}
                            name = 'cor'
                            onChange = {handleChange}
                        />
                    </label>
                </div> */}

                <button>
                    Cadastrar
                </button>
            </form>
            
            <ul>
                {categorias.map((categoria, indice) =>  {
                    return(
                        <li key = {`${categoria}${indice}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>

            <Link to="/">
                Voltar apra a home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;