import React from 'react';
import './app.scss';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './pages/AppRouter';
import Header from './components/Header/Header';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
    </BrowserRouter>
  );
};

export default App