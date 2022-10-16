import React from 'react'
import styles from './styles.module.css';
import arrow from '../../assets/images/arrow.png';
import Tag from '../Tag/Tag';
import Checkbox from '../Checkbox/Checkbox';
import { useToggle } from '../../hooks/useToggle';
import { v4 as uuidv4 } from 'uuid';
import { useReducer } from "react";

export default function TagSelector({ setValue }) {
  const tagsArray = ['violet', 'green', 'red', 'orange', 'blue', 'light_green', 'dark_blue', 'yellow'];
  const initial = [];

  const reducer = (state, action) => {
    if (action.type === 'add') {
      if (state.indexOf(action.value) === -1) {
        return [...state, action.value]
      } else {
        return state.filter((el) => el !== action.value);
      }
    }
  };

  let { value, toggle } = useToggle(false);
  const [values, dispatch] = useReducer(reducer, initial);

  function checkHandler(tag) {
    dispatch({ type: "add", value: tag });
    setValue(values);
  };

  return (
    <div className={styles.dropdown}>
      <div className={styles.top_container}>
        <p>Выбрать тег</p>
        <img src={arrow} alt="" onClick={toggle} />
      </div>
      {!!value && <div className={styles.dropdown_content}>
        {tagsArray?.map((tag) => <div className={styles.option_container} key={uuidv4()}><Tag color={tag} size={'large'} /><Checkbox tag={tag} checkHandler={checkHandler} /></div>)}
      </div>}
    </div>
  )
}
