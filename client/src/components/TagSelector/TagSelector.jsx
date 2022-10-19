import React from 'react';
import styles from './styles.module.css';
import arrow from '../../assets/images/arrow.png';
import Tag from '../Tag/Tag';
import Checkbox from '../Checkbox/Checkbox';
import { useToggle } from '../../hooks/useToggle';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { set } from '../../redux/slices/TagSelectorSlice';

export default function TagSelector({ currentTicket }) {
  const tagsValues = useSelector((state) => state.tagsState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentTicket) {
      dispatch(set(currentTicket));
    }
  }, [currentTicket])

  let { value, toggle } = useToggle(false);

  return (
    <div className={styles.dropdown}>
      <div className={styles.top_container}>
        <p>Выбрать тег</p>
        <img src={arrow} alt="" onClick={toggle} />
      </div>
      {!!value && (
        <div className={styles.dropdown_content}>
          {Object.keys(tagsValues)?.map((tag) => (
            <div className={styles.option_container} key={uuidv4()}>
              <Tag color={tag} size={'large'} />
              <Checkbox tag={tag} tagsValues={tagsValues} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
