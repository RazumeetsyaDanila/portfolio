import React from 'react';
import s from './workPage.module.scss'
import diceImg from '../../img/dice_w.png'
import astrologyImg from '../../img/astrology_w.png'
import fullStackImg from '../../img/full_stack_w.png'

const WorkPage: React.FC = () => {
    return (
        <div className={s.mainContainer}>
            <div className={s.container}>
                <div className={s.card}>
                    <div className={s.face + ' ' + s.face1}>
                        <div className={s.content}>
                            <img src={diceImg} alt="" />
                            <h3>Dice'n'Dragon game</h3>
                        </div>
                    </div>
                    <div className={s.face + ' ' + s.face2}>
                        <div className={s.content}>
                            <p>A small duel game between a dragon and a knight (using dice)...</p>
                            <a href="https://dnd.danilas.ru/" target="_blank">Demo</a>
                        </div>
                    </div>
                </div>
                <div className={s.card}>
                    <div className={s.face + ' ' + s.face1}>
                        <div className={s.content}>
                            <img src={astrologyImg} alt="" />
                            <h3>Astrological questionnaire</h3>
                        </div>
                    </div>
                    <div className={s.face + ' ' + s.face2}>
                        <div className={s.content}>
                            <p>A website for filling out astrological questionnaires, made to order...</p>
                            <a href="https://test.astrozazhigalka.ru/" target="_blank">Demo</a>
                        </div>
                    </div>
                </div>
                <div className={s.card}>
                    <div className={s.face + ' ' + s.face1}>
                        <div className={s.content}>
                            <img src={fullStackImg} />
                            <h3>Full Stack app</h3>
                        </div>
                    </div>
                    <div className={s.face + ' ' + s.face2}>
                        <div className={s.content}>
                            <p>An application that includes both a frontend and a backend part...</p>
                            <a href="#">Read more</a>
                        </div>
                    </div >
                </div >
            </div >
        </div>
    );
};

export default WorkPage;