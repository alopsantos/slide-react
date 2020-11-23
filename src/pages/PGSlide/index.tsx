import React, { useEffect } from 'react';

import Slide from '../../components/Slide';
import { Home } from './styles';

interface IPosicao {
  posicao: number;
}

const PGSlide: React.FC = () => {
  const slides = [
    {
      status: 'active',
      codigo: 55,
      titulo: 'Casa Jardim Santa Monica',
      description: 'Casa nova geminada, um quarto..',
      imagem:
        'https://estacaodamodastore.vteximg.com.br/arquivos/ids/194312-331-440/Tricot-Cecilia-Verde1-1-.jpg',
    },
    {
      codigo: 55,
      titulo: 'Casa Jardim Santa Monica',
      description: 'Casa nova geminada, um quarto..',
      imagem:
        'https://estacaodamodastore.vteximg.com.br/arquivos/ids/201458-331-440/Vestido-Curto-Colcci-Verde-Bitter1-1-.jpg',
    },
    {
      codigo: 55,
      titulo: 'Casa Jardim Santa Monica',
      description: 'Casa nova geminada, um quarto..',
      imagem:
        'https://estacaodamodastore.vteximg.com.br/arquivos/ids/200954-331-440/Macacao-Laiza-Longo-Scarlatt-Pink1-1-.png',
    },
  ];
  let index = 0;
  let timer = setInterval(autoPlay, 4000);
  function changeSlide(posicao: any) {
    for (let i = 0; i < posicao; i++) {
      return '';
    }
    return 'active';
  }
  function nextSlide() {
    if (index == slides.length - 1) {
      index = 0;
    } else {
      index++;
    }
    changeSlide(index);
  }
  function autoPlay() {
    nextSlide();
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('This will run after 1 second!')
      nextSlide();
    }, 4000);
    return () => clearTimeout(timer);
  }, [autoPlay()]);
  return (
    <Home className="home">
      <div className="slider">
        {slides.map((slide, i) => (
          <Slide
            key={slide.codigo}
            Bg={slide.imagem}
            Titulo={slide.titulo}
            Descricao={slide.description}
          />
        ))}
      </div>
    </Home>
  );
};
export default PGSlide;
