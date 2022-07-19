import React from 'react';
import s from './aboutPage.module.scss'
import avatar from '../../img/avatar2.jpg'

const AboutPage: React.FC = () => {
    return (
        <div className={s.container}>
            {/* <div className={s.imgBox}>
                
            </div> */}
            <img className={s.imgBox} src={avatar} alt="" />
            <div className={s.infoBox}>
                <div className={s.infoBorderBox}>
                    <p className={s.title}>ABOUT</p>
                    <p className={s.sayMyName}>Danil Kozhemyakin</p>
                    <p className={s.infoText}>Hi, I am engaged in web development. In 2021 graduated from Lipetsk State Technical University (Faculty of Automation and Computer Science). Currently, I work in an IT company engaged in software development for medical organizations, in the position of "Technical specialist for the implementation and maintenance of MIS". For the most part, my responsibilities do not include web development, but in my spare time, I study modern technologies on my own and practice on small projects. Most of all, I am fascinated by the development of frontend applications using React and Redux. An example of my work is a small duel game about a knight and a dragon (link for review - dnd.razumeetsya.ru ), as well as a website for the questionnaire, which was written by order as part of a freelance job (link for review - test.astrozazhigalka.ru ). In addition, I am also interested in backend development, and as a practice I wrote a small full-stack application (social network), which covers a fairly large set of modern technologies (including typescript, react, redux, nodejs(express), authorization by jwt token, work with postgresql database, etc.). Unfortunately, it will not be possible to demonstrate the operation of the application, since the lease of the virtual server on which the application was deployed has ended, however, you can get acquainted with the code in my repository on GitHub: frontend - https://github.com/RazumeetsyaDanila/writer-reader-app-front-ts ; backend (rest api) - https://github.com/RazumeetsyaDanila/writer-reader-backend . There are other, less significant projects that, in my opinion, are not worthy of attention, however, if you wish, you can get acquainted with them on the same GitHub. Despite the simplicity of the projects I have written, I have a great desire to study new technologies, develop and increase the complexity of the tasks being solved within the framework of new projects.</p>
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