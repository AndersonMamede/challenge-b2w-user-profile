import React from 'react';
import PropTypes from 'prop-types';

import styles from './TextList.module.css';

const TextList = ({ title, itens }) => (
  <div className={styles.text_list}>
    <h4 className={styles.title}>{title}</h4>
    <ul>
      {itens.map(item =>
        <li key={item.name} className={styles.item}>
          <div className={styles.name}>{item.name}</div>
          <div className={styles.date}>{item.date}</div>
          <div className={styles.description}>{item.description}</div>
        </li>
      )}
    </ul>
  </div>
);

TextList.propTypes = {
  title: PropTypes.string.isRequired,
  itens: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
};

export default TextList;
