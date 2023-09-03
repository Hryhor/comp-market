import React from 'react';
import { Link } from 'react-router-dom';
import { menu } from './menu';

import arrowRight from './arrowRight.svg';

import styles from './styles.module.scss';

const ProductnMenu = () => {
  return (
    <div>
        <ul className={styles.productsMenu}>
            {menu.map((item,  i) => (
                <li className={styles.listItem} key={`menu item ${i}`}>
                    <Link className={styles.listItemLink} to='/'>{item.title}</Link>
                    <img src={arrowRight} alt='select'/>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default ProductnMenu;