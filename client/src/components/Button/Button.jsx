import classNames from 'classnames';
import React from 'react';
import styles from './styles.module.css';

export default function Button({ text, type, onClick }) {
  if (type === 'save_small') {
    return (
      <button
        onClick={onClick}
        type='submit'
        form='my-form'
        className={classNames(styles.button, styles[type])}
      >
        {text}
      </button>
    );
  }
  return (
    <button
      onClick={onClick}
      className={classNames(styles.button, styles[type])}
    >
      {text}
    </button>
  );
}
