import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ContentWrapper from '../СontentWrapper/ContentWrapper';
import login from './login.svg';
import Modal from '../Modal/Modal';
import MainMenu from '../MainMenu/MainMenu';
import { menu } from './menu.js';
import styles from './styles.module.scss';

const Header = () => {
  type OpenState = boolean;

  const [open, setOpen] = useState<OpenState>(false);
  const [mainMenu, setMainMenu] = useState<OpenState>(false);

  const toggleModal = () => setOpen(true);
  const toggleMenu = () => setMainMenu(true)

  return (
    <header className={styles.header}>
        <ContentWrapper className='container'>
          <nav className={styles.nav}>
            <div className={styles.menuWrap}>
              <button className={styles.burgerMenu} onClick={toggleMenu}>
                <span className={styles.burgerMenuIcon}></span>
              </button>
            
              <ul className={styles.menu}>
                {menu.map((item, i) => (
                  <li className={styles.menuItem} key={i}>
                    <Link className={styles.menuItemLink} to={item.link}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>  
            <button className={styles.loginBtn} onClick={toggleModal}>
              <img className={styles.loginBtnImg} src={login} alt="login" />
            </button>
          </nav>
        </ContentWrapper>
        <Modal open={open} setOpen={setOpen} />
        <MainMenu mainMenu={mainMenu} setMainMenu={setMainMenu} />
    </header>
  )
}

export default Header;
