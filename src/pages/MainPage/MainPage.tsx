import React from 'react';
import s from './mainPage.module.scss'
import { NavLink } from 'react-router-dom';
import avatar from '../../img/avatar.jpg'
import githubImg from '../../img/github.png'
import telegramImg from '../../img/telegram.png'
import mailImg from '../../img/mail.png'
import downloadImg from '../../img/downloadImg.png'


const MainPage: React.FC = () => {

    return (
        <div className={s.container}>
            <img src={avatar} className={s.img} alt=""></img>
            <p className={s.sayMyName}>Danil Kozhemyakin</p>
            <p className={s.info}>Full Stack Software Developer</p>

            <div className={s.contacts}>                
                <a href="https://t.me/razumeetsya_danila" target="_blank" rel="noreferrer"><img className={s.telegramImg} src={telegramImg} alt="" /></a>
                <a href="mailto:danil.kozhemyakin.99@mail.ru" target="_blank" rel="noreferrer"><img className={s.mailImg} src={mailImg} alt="" /></a>
                <a href="https://github.com/RazumeetsyaDanila" target="_blank" rel="noreferrer"><img className={s.gitImg} src={githubImg} alt="" /></a>
            </div>

            <NavLink to='/files/rezume.pdf' target="_blank" download className={s.downloadBtn}>Download resume <img src={downloadImg} alt="" /> </NavLink>
        </div>
    );
};

export default MainPage;