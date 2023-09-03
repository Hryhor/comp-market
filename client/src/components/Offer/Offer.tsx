import React from 'react';
import ProductsMenu from '../ProductsMenu/ProductsMenu';
import styles from './styles.module.scss';


const Offer = () => {
  return (
    <div className={styles.offer}>
        <ProductsMenu />
    </div>
  )
}

export default Offer;