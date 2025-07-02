import React from 'react';
import styles from './Header.module.css';

function Header({ searchTerm, onSearchChange }) {
  return (
  <>
    <div className={styles.heading}>
        <h1>Users</h1>
    </div>
    <div className={styles.header}>
      <div className={styles.searchWrapper}>
        <img src="/Frame.svg" alt="search" className={styles.icon} />
        <input
          type="text"
          placeholder="Search users"
          className={styles.search}
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}/>
      </div>
      <div className={styles.menu}>
        <span>Reputation</span>
        <span className={styles.active}>New users</span>
        <span>Voters</span>
        <span>Editors</span>
        <span>Moderators</span>
      </div>
    </div>
  </>
  );
}

export default Header;