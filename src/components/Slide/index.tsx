import React from 'react';

import {Containerslide, Container, Caption} from './styles';

const Slide: React.FC = () => {
  return (
      <Containerslide className="active"
      style={{
        backgroundImage:
          "url('https://estacaodamodastore.vteximg.com.br/arquivos/ids/194312-331-440/Tricot-Cecilia-Verde1-1-.jpg')"}}
    >
      <Container>
        <Caption>
          <h1>1. Whiter Collection 2020</h1>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla,
            veritatis alias ipsa quidem explicabo facere officiis soluta,
            quisquam eius a reprehenderit? Ducimus tempora ea maiores placeat
            sed pariatur voluptates accusantium?
          </p>
          <a href="#">Saiba Mais</a>
        </Caption>
      </Container>
    </Containerslide>
  );
};

export default Slide;
