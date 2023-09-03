import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search/Search';
import logo from './Logo.svg';
import catalog from './Catalog.svg';
import like from './like.svg';
import cart from './cart.svg';
import styles from './styles.module.scss';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <div>
            <img src={logo} alt='logo' />
        </div>
        <button className={styles.catalog}>
            <span>КАТАЛОГ ТОВАРОВ</span>
            <img src={catalog} alt="catalog-menu" />
        </button>
        <Search />
        <div>
            <Link to='/' className={styles.tel}>050 065 87 96</Link>
        </div>
        <ul className={styles.selectProductsBlock}>
            <li className={styles.selectProductsBlockItem}>
                <img src={like} alt='like' />
            </li>
            <li className={styles.selectProductsBlockItem}>
                <img src={cart} alt='like' />
            </li>
        </ul>
    </div>
  )
}

export default Navbar;
