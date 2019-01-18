import React from 'react';
import PropTypes from 'prop-types';

import styles from './Photo.module.css';

const Photo = ({ name, src }) => (
  <div>
    <img className={styles.photo} alt={name} src={src}/>
  </div>
);

Photo.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default Photo;
