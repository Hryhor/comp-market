import React from 'react';
import { Link } from 'react-router-dom';

import { objects } from './objects';

import styles from './styles.module.scss';

const Networks = () => {
  return (
    <div className={styles.title}>
        <p>Следите за нами</p>
            <ul className={styles.imgListItem}>
                {
                    objects.map((item, i) => (
                        <li className={styles.imgItem} key={i}>
                            <Link to={item.link}>
                                <img src={item.img} alt="media"/>
                            </Link>
                        </li>
                    ))
                }
            </ul>
    </div>
  )
}

export default Networks;