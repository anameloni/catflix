//Arquivo que inicializa o React
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Pages/Home'; //Kernel da aplicação

import { BrowserRouter, Switch, Route} from 'react-router-dom'; //Sistema de roteamento, define qual página será carregada
import CadastroVideo from './Pages/Cadastros/Video';
import Page404 from './Pages/Page404';
import CadastroCategoria from './Pages/Cadastros/Categoria';


//Renderiza o React dentro do root
ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route path = "/" component = {Home} exact/>
    <Route path = "/cadastro/video" component = {CadastroVideo}/>
    <Route path = "/cadastro/categoria" component = {CadastroCategoria}/>
    <Route component = {Page404} />
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);