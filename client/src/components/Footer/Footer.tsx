import React from 'react';
import { Link } from 'react-router-dom';
import Networks from '../Networks/Networks';
import ContentWrapper from '../СontentWrapper/ContentWrapper';
import { info, services, contact } from './objects';
import logo from '../../assets/img/logo.svg';
import send from '../../assets/img/send.svg';
import mastercard from '../../assets/img/mastercard.svg';
import visa from '../../assets/img/visa.svg';
import styles from './styles.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
        <ContentWrapper className='container'>
            <div className={styles.footerWrap}>
                <div  className={styles.footerWrapLeft}>
                    <div className={styles.listWrap}>
                        <ul>
                            <p className={styles.title}>Информация</p>
                            {info.map((item, i) => (
                                <li className={styles.subTitle} key={i}>
                                    <Link to={item.link}>
                                        {item.text} 
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <ul>
                            <p className={styles.title}>Услуги и сервисы</p>
                            {services.map((item, i) => (
                                <li className={styles.subTitle} key={i}>
                                    <Link to={item.link} >
                                        {item.text} 
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <ul>
                            <p className={styles.title}>Услуги и сервисы</p>
                            {contact.map((item, i) => (
                                <li className={styles.subTitle} key={i}>
                                    <Link to={item.link} >
                                        {item.text} 
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div  className={styles.footerWraRight}>
                    <Networks />
                    <div>
                        <p className={styles.title}>Подписывайтесь на скидки</p>
                        <form className={styles.form}>
                            <input placeholder='Укажите ваш email...' />
                            <button className={styles.formBtn} type='submit'>
                                <img src={send} alt='send' />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className={styles.footerBasement}>
                <div className={styles.footerBasementLeft }>
                    <div className={styles.logoWrap}>
                        <img src={logo} alt='logo'/>                    
                    </div>
                    
                    <p>
                        2008-2021 Интернет-магазин v-comp.com.ua Все права защищены
                    </p>
                </div>
                <div className={styles.footerBasementRight}>
                    <img className={styles.payCard} src={mastercard} alt='mastercard'/>
                    <img className={styles.payCard} src={visa} alt='visa'/>
                </div>
            </div>
            
        </ContentWrapper>
    </div>
  )
}
export default Footer;