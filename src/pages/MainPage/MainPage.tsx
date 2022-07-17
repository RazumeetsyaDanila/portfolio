import React from 'react';
import s from './mainPage.module.scss'
import { saveAs } from "file-saver";
import { NavLink } from 'react-router-dom';


const MainPage: React.FC = () => {
    // const saveFile = () => {
    //     saveAs(
    //       "https://localhost/public/files/test.txt",
    //       "test.txt"
    //     );
    //     // saveAs(
    //     //     new File(["Hello, world!"], "hello world.txt", {type: "text/plain;charset=utf-8"})
    //     // );
    //   };
    return (
        <div className={s.container}>
            <div className={s.img}></div>
            <p className={s.sayMyName}>Danil Kozhemyakin</p>
            <p className={s.info}>Full Stack Software Developer</p>
            {/* <button onClick={saveFile}>download</button> */}
            {/* <NavLink to='../../../public/files/test.txt' target="_blank" download>Download</NavLink> */}
        </div>
    );
};

export default MainPage;