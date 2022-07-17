import React from 'react';
import s from './header.module.scss';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <div className={s.container}>
            <NavLink to="/" className={({ isActive }) =>isActive ? s.active : undefined }><div>MAIN</div></NavLink>
            <NavLink to="/about" className={({ isActive }) =>isActive ? s.active : undefined }><div>ABOUT</div></NavLink>
            <NavLink to="/work" className={({ isActive }) =>isActive ? s.active : undefined }><div>WORK</div></NavLink>
            <NavLink to="/contact" className={({ isActive }) =>isActive ? s.active : undefined }><div>CONTACT</div></NavLink>
        </div>
    );
};

export default Header;