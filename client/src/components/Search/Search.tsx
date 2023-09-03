import React from 'react';
import search from './search.svg'

import styles from './styles.module.scss';

const Search = () => {
  return (
    <form className={styles.searchForm}>
        <input className={styles.inputSearch} placeholder="Поиск"/>
        <button className={styles.btnSearch} type='submit'>
            <img src={search} alt="search"/>
        </button>
    </form>
  )
}

export default Search;