import React, { useState } from 'react';
import './app.scss';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './pages/AppRouter';
import Header from './components/Header/Header';

const App: React.FC = () => {
  const [lang, setLang] = useState('eng')
  return (
    <BrowserRouter>
      <Header />
      <AppRouter lang={lang} setLang={setLang}/>
    </BrowserRouter>
  );
};

export default App