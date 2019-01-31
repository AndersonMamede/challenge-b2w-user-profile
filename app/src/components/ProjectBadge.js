import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProjectBadge.module.css';

const ProjectBadge = ({ url, text, background, color }) => (
  <a
    className={styles.badge}
    href={url}
    style={{ background, color }}
    target="_blank" rel="noopener noreferrer"
  >{text}</a>
);

ProjectBadge.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

ProjectBadge.defaultProps = {
  text: 'About this project',
  background: '#1390F3',
  color: '#FFF',
}

export default ProjectBadge;
