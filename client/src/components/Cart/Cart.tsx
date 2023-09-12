import React from 'react';
import ButtonClose from '../ButtonClose/ButtonClose';

import styles from './styles.module.scss';

interface Props {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Cart: React.FC<Props> = ({ open, setOpen}) => {
  const openCart =  `${open ? `${styles.visible}` : `${styles.hidden}`}`;

  const handleClick = () => setOpen(false);

  return (
    <div className={` ${styles.cartWindow} ${openCart}`}>
      <div className={styles.cartBody}>
        <div className={styles.cartHeader}>
          <h2 className={styles.cartTitle}>Корзина</h2>
          <ButtonClose onClick={handleClick} />
        </div>
        <div className={styles.cartContent}>

        </div>
      </div>
    </div>
  )
}

export default Cart;