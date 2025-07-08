import React from 'react';
import Header from './components/Header/Header';
import UserList from './components/UserList/UserList';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <UserList />
    </div>
  );
}

export default App;