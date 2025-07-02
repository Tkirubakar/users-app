import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import UserCard from './components/UserCard/UserCard';
import styles from './App.module.css';

function App() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch('/users.json')
      .then(res => res.json())
      .then(setUsers);
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.app}>
      <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <div className={styles.grid}>
        {filteredUsers.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;