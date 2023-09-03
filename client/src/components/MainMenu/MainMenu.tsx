import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Modal/Modal';
import Networks from '../Networks/Networks';
import { info, contact } from './menu';
import logo from './logo.svg';
import close from './close.svg';
import styles from './styles.module.scss';


interface Props {
    mainMenu: boolean;
    setMainMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const MainMenu: React.FC<Props> = ({ mainMenu, setMainMenu }) => {
    const openMenu = `${mainMenu? `${styles.visible}` : `${styles.hidden}`}`;
    const handelClick = () => setMainMenu(false);

    const [open, setOpen] = useState(false);
    const toggleModal = () => {
        setOpen(true);
    }
        
    return (
        <div className={`${styles.modalMenuWindow} ${openMenu}`} onClick={handelClick}>
            <div className={styles.mainMenuBody} onClick={e => e.stopPropagation()}>
                <div className={styles.mainMenuHeader}>
                    <div>
                        <img src={logo} alt='logo' />
                    </div>
                    <button className={styles.closeBtn} onClick={handelClick}>
                        <img src={close} alt='logo' />
                    </button>
                </div>
                <div className={styles.mainMenuLogin}>
                    <button className={styles.signIn} onClick={toggleModal}>Вход</button>
                    <button className={styles.signUp}>Регистрация</button>
                </div>
                <div>
                    <ul>
                        <li className={styles.title}>
                            <p>Информация</p>
                            <ul>
                                {
                                   info.map((item, i) => (
                                    <li  key={i}>
                                        <Link to='/' className={styles.subTitle}>{item.text}</Link>
                                    </li>
                                   )) 
                                }
                            </ul>
                        </li>
                        <li className={styles.title}>
                            <p>Наши сервисы</p>
                        </li>
                        <li className={styles.title}>
                            <p>Контакты</p>
                            <ul>
                                {
                                   contact.map((item, i) => (
                                    <li key={i}>
                                        <Link to='/' className={styles.subTitle}>{item.text}</Link>
                                    </li>
                                   )) 
                                }
                            </ul>
                        </li>
                    </ul>
                    <Networks />
                </div>
                <Modal open={open} setOpen={setOpen}/>
            </div>
        </div>
    )
}

export default MainMenu;