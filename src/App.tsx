import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PGSlider from './pages/PGSlider';


import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="example-container">
        <PGSlider />
      </div>
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
