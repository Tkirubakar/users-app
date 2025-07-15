import React from 'react';
import SearchInput from '../SearchInput/SearchInput'
import Menu from '../../layouts/Menu';
import styles from './Header.module.css';

function Header({ searchTerm }) {
  console.log('header')
  return (
  <>
    <div className={styles.heading}>
        <h1>Users</h1>
    </div>
    <div className={styles.header}>
      <SearchInput value={searchTerm} placeholder="Search users" icon="/Frame.svg"/>
      <Menu />
    </div>
  </>
  );
}

export default Header;