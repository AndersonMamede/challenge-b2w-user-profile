import React from 'react';
import PropTypes from 'prop-types';

import styles from './SkillBar.module.css';

const SkillBar = ({ name, value }) => (
  <div className={styles.skillbar}>
    {name}<br/>
    <div className={styles.progressbar}>
      <div className={styles.value} style={{ width: value }}></div>
    </div>
  </div>
);

SkillBar.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

SkillBar.defaultProps = {
  value: '0%',
};

export default SkillBar;
