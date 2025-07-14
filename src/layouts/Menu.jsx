import React from 'react';
import styles from './Menu.module.css';
import { menuItems } from '../constants/menuItems';

function Menu() {
  return (
    <div className={styles.menu}>
      {menuItems?.map((item, index) => (
        <span key={index} className={item === 'New users' ? styles.active : ''}>
          {item}
        </span>
      ))}
    </div>
  );
}

export default Menu;