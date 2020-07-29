import React from 'react';
import Menu from './Components/Menu'; //Import from the component folder Menu. The file is named Index, so it do not have to be referenced on the path
import dadosIniciais from './Data/dados_iniciais.json';
import BannerMain from './Components/BannerMain';
import Carousel from './Components/Carousel';
import Footer from './Components/Footer';

function App() {
  return (
    //HTML inside the JS
    <div style = {{ background: '141414'}}>
      <Menu />

      <BannerMain 
          videoTitle = {dadosIniciais.categorias[0].videos[0].titulo}
          url = {dadosIniciais.categorias[0].videos[0].url}
          videoDescription = {"Memes de gatinhos"}
      />

      <Carousel
        ignoreFirstVideo
        category = {dadosIniciais.categorias[0]}
      />

      <Carousel
        category = {dadosIniciais.categorias[1]}
      />

      <Carousel
        category = {dadosIniciais.categorias[2]}
      />

      <Carousel
        category = {dadosIniciais.categorias[3]}
      />

      <Carousel
        category = {dadosIniciais.categorias[4]}
      />

      <Carousel
        category = {dadosIniciais.categorias[5]}
      />

      <h1>Tudo sobre gatos!</h1>
        - Memes br/
        - Games  br/
        - GIFs br/
        - Intagram br/
        - Canais do youtube br/
        - Vídeos de gatos br/
        - Vídeos para gatos br/

    </div>
  );
}

export default App;
