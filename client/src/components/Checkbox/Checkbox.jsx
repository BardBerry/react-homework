import React from 'react';
import styles from './styles.module.css';
import { useToggle } from '../../hooks/useToggle';


export default function Checkbox({ text, tag, checkHandler }) {
  let { value, toggle } = useToggle(false);

  function onChangeHandler() {
    toggle();
    checkHandler(tag);
  }

  return (
    <div className={styles.container}>
      <label>
        <input type='checkbox' checked={value} onChange={onChangeHandler}></input>
        <span></span>
      </label>
      {!!text && <p>{text}</p>}
    </div >
  );
}
