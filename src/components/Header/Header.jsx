import React from 'react';
import SearchInput from '../SearchInput/SearchInput'
import Menu from '../../layouts/MainLayout';
import styles from './Header.module.css';

function Header({ searchTerm, onSearchChange }) {
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