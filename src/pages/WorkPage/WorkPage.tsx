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
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                            <a href="#">Read More</a>
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
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                            <a href="#">Read More</a>
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
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                            <a href="#">Read More</a>
                        </div>
                    </div >
                </div >
            </div >
        </div>
    );
};

export default WorkPage;