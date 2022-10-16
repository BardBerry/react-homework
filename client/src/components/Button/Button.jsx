import classNames from 'classnames';
import React from 'react';
import styles from './styles.module.css';

export default function Button({ text, type, onClick }) {
  return (
    <button onClick={onClick} className={classNames(styles.button, styles[type])}>{text}</button>
  )
}
