import React from 'react';
import s from './aboutPage.module.scss'
import avatar from '../../img/avatar3.jpg'

const AboutPage: React.FC<any> = ({ lang, setLang }) => {
    return (
        <div className={s.container}>
            <img className={s.imgBox} src={avatar} alt="" />
            <div className={s.infoBox}>
                <div className={s.infoBorderBox}>
                    <div className={s.titleContainer}>
                        <p className={s.title}>ABOUT</p>
                        {lang === 'ru' ?
                            <div className={s.langContainer}>
                                <p className={s.langActive} onClick={() => setLang('ru')}>ru</p>
                                <p className={s.lang} onClick={() => setLang('eng')}>eng</p>
                            </div>
                            :
                            <div className={s.langContainer}>
                                <p className={s.lang} onClick={() => setLang('ru')}>ru</p>
                                <p className={s.langActive} onClick={() => setLang('eng')}>eng</p>
                            </div>
                        }
                    </div>
                    <p className={s.sayMyName}>Danil Kozhemyakin</p>
                    {lang === 'ru' ?
                        <p className={s.infoTextRu}>В 2021 году закончил Липецкий государственный технический университет (Факультет Автоматизации и Информатики). В настоящее время работаю в it-компании, занимающейся разработкой ПО для медицинских организаций, в должности «Технический специалист по внедрению и сопровождению МИС». По большей части, в мои обязанности не входит разработка под web, однако в свободное от работы время, я самостоятельно изучаю современные технологии и практикуюсь на небольших проектах. Больше всего меня увлекает разработка фронтенд приложений, с использованием React и Redux. Кроме того, мне интересна и бэкенд разработка. Некоторые мои работы вы можете посмотреть во вкладке «works».</p>
                        :
                        <p className={s.infoTextEng}>In 2021 graduated from Lipetsk State Technical University (Faculty of Automation and Computer Science). Currently, I work in an IT company engaged in software development for medical organizations, in the position of "Technical specialist for the implementation and maintenance of MIS". For the most part, my responsibilities do not include web development, but in my spare time, I study modern technologies on my own and practice on small projects. Most of all, I am fascinated by the development of frontend applications using React and Redux. In addition, I am also interested in backend development. You can see some of my works in the "works" tab.</p>
                    }
                    <p className={s.title}>SKILLS</p>
                    <ul className={s.skillsList}>
                        <div >
                            <li>HTML</li>
                            <li>CSS (sass, less)</li>
                            <li>JavaScript (ES6)</li>
                        </div>
                        <div>
                            <li>jQuery</li>
                            <li>TypeScript</li>
                            <li>NodeJS</li>
                        </div>
                        <div>
                            <li>React + Redux (mobX)</li>
                            <li>Git</li>
                            <li>SQL (PostgreSQL)</li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;