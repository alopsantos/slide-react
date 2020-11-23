import React from 'react';

import {Containerslide, Container, Caption} from './styles';

interface ISlide{
  Bg: string;
  Titulo: string | number;
  Descricao: string;
}

const Slide: React.FC<ISlide> = ({Bg, Titulo, Descricao, ...rest}) => {
  return (
      <>
      <Containerslide className="slide active"
      {...rest}
      style={{
        backgroundImage:
          `url('${Bg}')`}}
    >
      <Container className="container">
        <Caption className="caption">
          <h1>Codigo: {Titulo}</h1>

          <p>
            {Descricao}
          </p>
          <a href="#">Saiba Mais</a>
        </Caption>
      </Container>
    </Containerslide>
  </>

  );
};

export default Slide;
