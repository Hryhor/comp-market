import React from 'react';
import { Link } from 'react-router-dom';
import close from './close.svg';
import eye from './eye.svg';
import styles from './styles.module.scss';

interface ModalProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({ open, setOpen }) => {

    const openModal = `${open ? `${styles.visible}` : `${styles.hidden}`}`;
    const handleClick = () => setOpen(false);

    return (
        <div className={`${styles.modalWindow} ${openModal}`} onClick={handleClick}>
            <div className={styles.modalBody} onClick={e => e.stopPropagation()}>       
                <div className={styles.modalHeader}>
                    <p>Вход</p>
                    <button className={styles.modalBtnClose} onClick={handleClick}>
                        <img src={close} />
                    </button>
                </div>
                <form className={styles.modalForm}>
                    <input className={styles.modalInput} placeholder='Ваш номер телефона' />
                    <input className={`${styles.modalInput} ${styles.modalInputPassword}`} placeholder='Пароль' />
                    <div className={styles.modalForgotPasswordLink}>
                        <Link to='/'>Забыли пароль?</Link>
                    </div>
                    <button className={styles.modalBtnSignIn} type='submit'>
                        ВОЙТИ
                    </button>
                    <div className={styles.modalText}>
                        <p>или войти с помощью</p>
                    </div>
                    <div className={styles.modalBtnWrap}>
                        <button className={styles.modalBtnGoogle}>Google</button>
                        <button className={styles.modalBtnFacebook}>Facebook</button>
                    </div>
                    <div className={styles.modalSignUp}>
                        <p>Нет аккаунта? </p>
                        <Link to='/'>Зарегистрироваться</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Modal;