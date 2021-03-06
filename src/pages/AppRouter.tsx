import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './MainPage/MainPage';
import AboutPage from './AboutPage/AboutPage';
import WorkPage from './WorkPage/WorkPage';
import ContactPage from './ContactPage/ContactPage';

const AppRouter: React.FC<any> = (props) => {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>} />
            <Route path="/about" element={<AboutPage lang={props.lang} setLang={props.setLang}/>} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/contact" element={<ContactPage />} />
        </Routes>
    );
};

export default AppRouter;