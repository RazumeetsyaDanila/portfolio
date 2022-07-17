import React from 'react';
import s from './mainPage.module.scss'
import { NavLink } from 'react-router-dom';
import avatar from '../../img/avatar.jpg'


const MainPage: React.FC = () => {

    return (
        <div className={s.container}>
            <img src={avatar} className={s.img}></img>
            <p className={s.sayMyName}>Danil Kozhemyakin</p>
            <p className={s.info}>Full Stack Software Developer</p>
            <NavLink to='/files/rezume.pdf' target="_blank" download className={s.downloadBtn}>Download resume</NavLink>
        </div>
    );
};

export default MainPage;