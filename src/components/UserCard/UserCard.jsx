import React from 'react';
import styles from './UserCard.module.css';
import Tag from '../Tag/Tag';

function UserCard({ user }) {
  return (
    <div className={styles.card}>
      <img className={styles.avatar} src={user.avatar} alt={user.name} />
      <div className={styles.details}>
        <h1 className={styles.name}>{user.name}</h1>
        <div className={styles.location}>{user.location}</div>
        <div className={styles.tags}>
          {user.tags.map((tag, index) => (
            <Tag key={index} label={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserCard;