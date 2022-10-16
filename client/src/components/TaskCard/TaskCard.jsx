import React from 'react'
import styles from './styles.module.css';
import dots from '../../assets/images/dots.png';
import comment from '../../assets/images/description.png';
import alert from '../../assets/images/comment.png';
import Tag from '../../components/Tag/Tag.jsx';
import { v4 as uuidv4 } from 'uuid';
import { Link, useNavigate } from 'react-router-dom';

export default function TaskCard({ text, tagsArray, id, comments, description }) {
  const navigate = useNavigate();

  function edit() {
    navigate(`/edit/${id}`);
  }

  return (
    <div className={styles.container} onClick={edit}>
      <div className={styles.top_container}>
        <p>{text}</p>
        <img src={dots} alt="" onClick={(e) => { e.stopPropagation(); navigate(`/full/${id}`) }} />
      </div>
      <div className={styles.bottom_container}>
        <div className={styles.tags_container}>
          {tagsArray?.map((tag) => <Tag color={tag} size={'small'} key={uuidv4()} />)}
        </div>
        {!!description && <img src={alert} alt="" />}
        {comments.length > 0 && <img src={comment} alt="" />}
      </div>
    </div>
  )
}
