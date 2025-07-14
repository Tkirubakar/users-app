import React from 'react';
import styles from './UserCard.module.css';

function UserCard({ user }) {
  console.log('sdfsdf')
  return (
    <div className={styles.card}>
      <img className={styles.avatar} src={user.avatar} alt={user.name} />
      <div className={styles.details}>
        <h1 className={styles.name}>{user.name}</h1>
        <div className={styles.location}>{user.location}</div>
        <div className={styles.tags}>
          {user.tags.map((tag, index) => (
            <span key={index} className={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserCard;