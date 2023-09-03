import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

import { getProducts, selectProducts } from '../../app/products/productsSlice';

import like from './like.svg';
import cart from './cart.svg';

import styles from './styles.module.scss';

export default function Products() {
    const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();
    const products = useSelector(selectProducts);

    useEffect(() => {
      dispatch(getProducts());
    }, [dispatch]);
    
    return (
        <div className={styles.products}>
            <h2 className={styles.title}>Топ продаж</h2>
            <div className={styles.productsWrap}>
            {products && products.map((product) => (
                <div className={styles.cardPoduct}>
                    <div className={styles.cardHeader}>
                        <img src={like} alt='like' />
                        <img src={cart} alt='like' />
                    </div>
                    <div className={styles.cardImage}>
                        <img src={product.imageProduct} alt={product.name} />
                    </div>
                    
                    <h3 className={styles.cardTitle}>{product.name}</h3>
                    
                    <div className={styles.cardRating}>
                        <p>{product.rating}</p>
                    </div>

                    <div className={styles.cardFooter}>
                        <p className={styles.cardPrice}>{product.price}грн</p>
                        <button className={styles.cardBtn}>
                            КУПИТЬ
                        </button>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}
