import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import AppContainer from './containers/AppContainer';

// react slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <AppContainer />
  </StrictMode>
);
