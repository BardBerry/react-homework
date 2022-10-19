import React from 'react';
import styles from './styles.module.css';
import close from '../../assets/images/close.png';

export default function Popup({ onClick, clickHandler }) {
  return (
    <div className={styles.popup_container}>
      <div className={styles.test}>
        <p onClick={clickHandler}>Удалить</p>
        <img src={close} alt="close" onClick={() => { onClick((value) => !value) }} />
      </div>
      <p onClick={clickHandler}>Редактировать</p>
    </div>
  );
}
