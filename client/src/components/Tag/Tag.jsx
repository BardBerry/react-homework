import classNames from 'classnames';
import React from 'react';
import styles from './styles.module.css';

export default function Tag({ color, size }) {
  return (
    <>
      <div className={classNames(styles[color], styles[size])}></div>
    </>
  )
}
