import React, { useState } from 'react';
import Header from './components/Header/Header';
import UserList from './components/UserList/UserList';
import styles from './App.module.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className={styles.app}>
      <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <UserList searchTerm={searchTerm} />
    </div>
  );
}

export default App;