import React from 'react';
import { Link } from 'react-router-dom';

import styles from './UserProfileLink.module.css';
import { userDataType } from './../types';

const UserProfileLink = ({ user }) => {
  const encodedUserName = encodeURIComponent(user.name).replace(/%20/g, "+");

  return (
    <Link className={styles.link} to={`?name=${encodedUserName}`}>
      {user.name}
    </Link>
  );
};

UserProfileLink.propTypes = {
  user: userDataType.isRequired,
};

export default UserProfileLink;
