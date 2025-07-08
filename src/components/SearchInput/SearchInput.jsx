import React from 'react';
import styles from './SearchInput.module.css';

function SearchInput({ value, onChange, placeholder = 'Search...', icon = '/Frame.svg' }) {
  return (
    <div className={styles.searchWrapper}>
      <img src={icon} alt="search" className={styles.icon} />
      <input
        type="text"
        placeholder={placeholder}
        className={styles.search}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default SearchInput;