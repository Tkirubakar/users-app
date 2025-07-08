import React, { useEffect, useState } from 'react';
import UserCard from '../UserCard/UserCard';
import styles from './UserList.module.css';
import { fetchUsers } from '../../services/userService';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (error) {
        setUsers([]);
      }
    };

    loadUsers();
  }, []);

  if (!users || users.length === 0) {
    return <div className={styles.empty}>No users available</div>;
  }
  console.log('sdfkgskdfs')
  return (
    <div className={styles.grid}>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserList;