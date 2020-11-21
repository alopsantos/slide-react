import React from 'react';

import Slide from '../../components/Slide';
import {Home} from './styles';

const PGSlide: React.FC = () => {
  return(
    <Home>
      <div className="slider">
        <Slide />
      </div>
    </Home>
  )
};
export default PGSlide;
