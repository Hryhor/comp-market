import { InputHandler } from 'concurrently';
import React from 'react';

import close from '../../assets/img/close.svg';

import styles from './styles.module.scss';

type handelClick = () => void;

interface Props {
    onClick: handelClick;
}

const ButtonClose: React.FC<Props> = ({ onClick }) => {
  return (
    <button className={styles.buttonBtnClose} onClick={onClick}>
        <img className={styles.buttonBtnCloseImg} src={close} />
    </button>
  )
}

export default ButtonClose