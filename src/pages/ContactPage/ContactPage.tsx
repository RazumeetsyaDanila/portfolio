import React, { useState } from 'react';
import s from './contactPage.module.scss';
import { useClipboard } from 'use-clipboard-copy';
import copyImg from '../../img/copy.png';
import copiedImg from '../../img/copied.png';

const ContactPage: React.FC = () => {
    const clipboard = useClipboard()
    const [emailCopy, setEmailCopy] = useState(false)
    const [telCopy, setTelCopy] = useState(false)
    const [phoneCopy, setPhoneCopy] = useState(false)

    const copy = (text: string, targetSetState: any) => {
        clipboard.copy(text)
        targetSetState(true)
        setTimeout(() => { targetSetState(false) }, 1000)
    }

    return (
        <div className={s.container}>
            <div className={s.contactBox}>
                <a href="https://t.me/razumeetsya_danila" target="_blank" rel="noreferrer" > t.me/razumeetsya_danila</a>
                {telCopy ?
                    <div className={s.copiedBox}>
                        <p>Copied</p>
                        <img className={s.copyImg} src={copiedImg} alt="" onClick={() => copy('t.me/razumeetsya_danila', setTelCopy)} />
                    </div>
                    :
                    <div className={s.copyBox} onClick={() => copy('t.me/razumeetsya_danila', setTelCopy)}>
                        <p>Copy</p>
                        <img className={s.copyImg} src={copyImg} alt=""  />
                    </div>
                }
            </div>
            <div className={s.contactBox}>
                <a href="mailto:danil.kozhemyakin.99@mail.ru" target="_blank" rel="noreferrer">danil.kozhemyakin.99@mail.ru</a>
                {emailCopy ?
                    <div className={s.copiedBox}>
                        <p>Copied</p>
                        <img className={s.copyImg} src={copiedImg} alt=""/>
                    </div>
                    :
                    <div className={s.copyBox} onClick={() => copy('danil.kozhemyakin.99@mail.ru', setEmailCopy)}>
                        <p>Copy</p>
                        <img className={s.copyImg} src={copyImg} alt=""  />
                    </div>
                }
            </div>
            <div className={s.contactBox}>
                <a href="tel:+79202409191">+79202409191</a>
                {phoneCopy ?
                    <div className={s.copiedBox}>
                        <p>Copied</p>
                        <img className={s.copyImg} src={copiedImg} alt=""/>
                    </div>
                    :
                    <div className={s.copyBox} onClick={() => copy('+79202409191', setPhoneCopy)}>
                        <p>Copy</p>
                        <img className={s.copyImg} src={copyImg} alt=""  />
                    </div>
                }
            </div>
        </div>
    );
};

export default ContactPage;