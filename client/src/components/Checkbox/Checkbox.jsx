import React from 'react';
import styles from './styles.module.css';
import { useDispatch } from 'react-redux'
import { toggle } from '../../redux/slices/TagSelectorSlice';
import { toggleFilters } from '../../redux/slices/TicketsSlice';

export default function Checkbox({ text, tag, tagsValues = [], filter }) {
  const dispatch = useDispatch();

  function onChangeHandler() {
    if (filter) {
      dispatch(toggleFilters(filter));
    } else dispatch(toggle(tag));
  }

  return (
    <div className={styles.container}>
      <label>
        <input
          type="checkbox"
          checked={tagsValues[tag]}
          onChange={onChangeHandler}
        ></input>
        <span></span>
      </label>
      {!!text && <p>{text}</p>}
    </div>
  );
}
