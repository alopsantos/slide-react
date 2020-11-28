import React from 'react';

import { Slideshow, SlideshowItem, SlideShowItemText } from './styles';
const PGSlide01: React.FC = () => {
  const slides = [
    {
      status: 'active',
      codigo: 664,
      titulo: 'Casa Jardim Santa Monica',
      disponhe: {
        Dormitórios: '2',
        Banheiros: '2',
        Garagem: '1',
        Sala: '1',
        Cozinha: '1',
        Suíte: '',
      },
      description:
        'Excelente Casa à venda no centro de Santa Terezinha de Itaipu, o imóvel dispõe',
      imagem:
        'https://www.imobiliariam3.com/images/items/g/apartamento-no-santa-terezinha-de-itaipu-parana-834-7096d20ed4.jpg',
    },
    {
      codigo: 405,
      titulo: 'Casa Jardim Santa Monica',
      description: 'Casa nova geminada, um quarto..',
      disponhe: {
        Dormitórios: '3',
        Banheiros: '3',
        Garagem: '2',
        Sala: '1',
        Cozinha: '1',
        Suíte: '1',
      },
      imagem:
        'https://www.imobiliariam3.com/images/items/g/casa-no-santa-terezinha-de-itaipu-pr-640-556a348403.jpg',
    },
    {
      codigo: 434,
      titulo: 'Casa Jardim Santa Monica',
      description: 'Casa nova geminada, um quarto..',
      disponhe: {
        Dormitórios: '2',
        Banheiros: '1',
        Garagem: '1',
        Sala: '1',
        Cozinha: '1',
        Suíte: '',
      },
      imagem:
        'https://www.imobiliariam3.com/images/items/g/sobrado-no-foz-do-iguacu-parana-624-b9642727f7.jpg',
    },
  ];
  return (
    <Slideshow>
      {slides.map((slide, i = slides.length - 1) => (
        <SlideshowItem style={{ animationDelay: `${i * 10}s` }}>
          <img style={{ animationDelay: `${i * 10}s` }} src={slide.imagem} />
          <SlideShowItemText style={{ animationDelay: `${i * 10}s` }}>
            <h5 style={{ animationDelay: `${i * 10}s` }}>
              Cod: {slide.codigo}
            </h5>
            <p style={{ animationDelay: `${i * 10}s` }}>{slide.description}</p>
            <p style={{ animationDelay: `${i * 10}s` }}>
              `{slide.disponhe.Dormitórios} Quartos |` `{slide.disponhe.Garagem}{' '}
              garagem |` `{slide.disponhe.Banheiros} Banheiros |` `
              {slide.disponhe.Cozinha} Cozinha |`
            </p>
          </SlideShowItemText>
        </SlideshowItem>
      ))}
    </Slideshow>
  );
};

export default PGSlide01;
