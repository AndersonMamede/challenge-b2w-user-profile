import React from 'react';
import PropTypes from 'prop-types';

import styles from './UserList.module.css';
import UserProfileLink from './UserProfileLink.js';
import { userDataType } from './../types';

const UserList = ({ users }) => {
  return (
    <section className={styles.users}>
      <span className={styles.title}>Select an user:</span>
      <ul className={styles.list}>
        {users.map(user =>
          <li key={user.name} className={styles.user}>
            <UserProfileLink user={user}/>
          </li>
        )}
      </ul>
    </section>
  );
};

UserList.propTypes = {
  users: PropTypes.arrayOf(userDataType).isRequired
};

export default UserList;
