import React, { useEffect, useState } from 'react';
import UserCard from '../UserCard/UserCard';
import styles from './UserList.module.css';

function UserList({ searchTerm }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/users.json')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(() => setUsers([]));
  }, []);

  const filteredUsers = users.filter(user =>
    user?.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!users || users.length === 0) {
    return <div className={styles.empty}>No users available</div>;
  }

  return (
    <div className={styles.grid}>
      {filteredUsers.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserList;