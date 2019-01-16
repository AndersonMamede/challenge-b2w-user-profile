import React from 'react';

import styles from './UserProfile.module.css';

const UserProfile = ({ user }) => (
  <section>
    <div className={styles.personal}>
      <div>
        <img className={styles.photo} src={user.image} alt={user.name}/>
      </div>
      <h1 className={styles.user_name}>{user.name}</h1>
    </div>
    <div className={styles.experience}>
      B
    </div>
  </section>
);

export default UserProfile;
