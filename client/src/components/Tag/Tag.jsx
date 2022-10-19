import classNames from 'classnames';
import React from 'react';
import styles from './styles.module.css';
import close from '../../assets/images/close.png';
import { useDispatch } from 'react-redux';
import { toggle } from '../../redux/slices/TagSelectorSlice';

export default function Tag({ color, size, edit }) {
  const dispatch = useDispatch();

  function clickHandler() {
    dispatch(toggle(color));
  }

  return (
    size === 'medium' ?
      <div className={classNames(styles[color], styles[size])}>
        {edit && <img className={styles.image} src={close} alt="close" onClick={clickHandler} />}
      </div> :
      <div className={classNames(styles[color], styles[size])}></div>
  );
}
