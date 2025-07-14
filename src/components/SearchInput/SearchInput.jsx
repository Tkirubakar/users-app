import React from 'react';
import styles from './SearchInput.module.css';
import SearchIcon from '../SearchIcon/SearchIcon';
import SearchField from '../SearchField/SearchField';

function SearchInput({ value, onChange, placeholder = 'Search...', icon = '/Frame.svg' }) {
  return (
    <div className={styles.searchWrapper}>
      <SearchIcon className={styles.icon} />
      <SearchField
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={styles.search}
      />
    </div>
  );
}

export default SearchInput;