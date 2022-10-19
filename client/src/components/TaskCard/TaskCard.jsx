import React from 'react';
import styles from './styles.module.css';
import dots from '../../assets/images/dots.png';
import comment from '../../assets/images/description.png';
import alert from '../../assets/images/comment.png';
import Tag from '../../components/Tag/Tag.jsx';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDraggedTicket } from '../../redux/slices/TicketsSlice';
import { setDragged } from '../../redux/slices/DraggedTaskSlice';

export default function TaskCard({
  text,
  tagsArray,
  id,
  comments,
  description,
  task,
}) {
  const navigate = useNavigate();
  const draggedTask = useSelector((state) => state.draggedTask.draggedTask);
  const dispatch = useDispatch();

  function edit() {
    navigate(`/edit/${id}`);
  }

  function dragStartHandler(e) {
    dispatch(setDragged(task));
  }

  function dragEndHandler(e) {
  }

  function dragOverHandler(e) {
    e.preventDefault();
  }

  function dropHandler(e) {
    e.preventDefault();

    switch (task.status) {
      case 'Todo':
        dispatch(fetchDraggedTicket({ id: draggedTask.id, status: task.status }));
        break;
      case 'In progress':
        dispatch(fetchDraggedTicket({ id: draggedTask.id, status: task.status }));
        break;
      case 'Done':
        dispatch(fetchDraggedTicket({ id: draggedTask.id, status: task.status }));
        break;
      default:
        break;
    }
  }

  return (
    <div className={styles.container} onClick={edit} draggable
      onDragStart={(e) => dragStartHandler(e)}
      onDragLeave={(e) => dragEndHandler(e)}
      onDragEnd={(e) => dragEndHandler(e)}
      onDragOver={(e) => dragOverHandler(e)}
      onDrop={(e) => dropHandler(e)}>
      <div className={styles.top_container}>
        <p>{text}</p>
        <img
          src={dots}
          alt=""
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/full/${id}`);
          }}
        />
      </div>
      <div className={styles.bottom_container}>
        <div className={styles.tags_container}>
          {tagsArray?.map((tag) => (
            <Tag color={tag} size={'small'} key={uuidv4()} />
          ))}
        </div>
        {!!description && <img src={alert} alt="" />}
        {comments.length > 0 && <img src={comment} alt="" />}
      </div>
    </div>
  );
}
