import React, { useState } from 'react';
import s from './contactPage.module.scss';
import { useClipboard } from 'use-clipboard-copy';

const ContactPage: React.FC = () => {
    const clipboard = useClipboard()
    const [emailCopy, setEmailCopy] = useState(false)
    const [telCopy, setTelCopy] = useState(false)
    const [phoneCopy, setPhoneCopy] = useState(false)

    const copy = (text: string, targetSetState: any) => {
        clipboard.copy(text)
        targetSetState(true)
        setTimeout(() => {targetSetState(false)}, 1000)
    }

    return (
        <div className={s.container}>
            <div className={s.contactBox}>
                <a href="https://t.me/razumeetsya_danila" target="_blank" rel="noreferrer" > t.me/razumeetsya_danila</a>
                <button onClick={() => copy('t.me/razumeetsya_danila', setTelCopy)}>{telCopy ? 'Copied' : 'Copy Telegram'}</button>
            </div>
            <div className={s.contactBox}>
                <a href="mailto:danil.kozhemyakin.99@mail.ru" target="_blank" rel="noreferrer">danil.kozhemyakin.99@mail.ru</a>
                <button onClick={() => copy('danil.kozhemyakin.99@mail.ru', setEmailCopy)}>{emailCopy ? 'Copied' : 'Copy Email'}</button>
            </div>
            <div className={s.contactBox}>
                <a href="tel:+79202409191">+79202409191</a>
                <button onClick={() => copy('+79202409191', setPhoneCopy)}>{phoneCopy ? 'Copied' : 'Copy Phone'}</button>
            </div>
        </div>
    );
};

export default ContactPage;