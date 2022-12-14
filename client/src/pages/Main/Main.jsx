import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import Checkbox from '../../components/Checkbox/Checkbox';
import Modal from '../../components/Modal/Modal';
import TaskCard from '../../components/TaskCard/TaskCard';
import { useToggle } from '../../hooks/useToggle';
import styles from './styles.module.css';
import close from '../../assets/images/close.png';
import TaskForm from '../../components/TaskForm/TaskForm';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDraggedTicket, fetchTickets, filterTickets } from '../../redux/slices/TicketsSlice';

export default function Main({ modal }) {
  let { value, toggle } = useToggle(false);
  const [modalType, setModalType] = useState('');
  const { id } = useParams();
  const tickets = useSelector((state) => state.tickets);
  const filters = useSelector((state) => state.tickets.filters);
  const dispatch = useDispatch();
  const draggedTask = useSelector((state) => state.draggedTask.draggedTask);

  useEffect(() => {
    if (modal && modal !== 'close') {
      setModalType(modal);
      toggle();
    } else if (modal === 'close') {
      if (value) {
        toggle();
      }
    }
  }, [modal]);

  useEffect(() => {
    dispatch(fetchTickets());
  }, []);

  useEffect(() => {
    dispatch(filterTickets(filters));
  }, [filters]);

  function dragStartHandler(e) {
  }

  function dragEndHandler(e) {
  }

  function dragOverHandler(e) {
    e.preventDefault();
  }

  function dropHandler(e, status) {
    e.preventDefault();
    switch (status) {
      case 'Todo':
        dispatch(fetchDraggedTicket({ id: draggedTask.id, status }));
        break;
      case 'In progress':
        dispatch(fetchDraggedTicket({ id: draggedTask.id, status }));
        break;
      case 'Done':
        dispatch(fetchDraggedTicket({ id: draggedTask.id, status }));
        break;
      default:
        break;
    }
  }

  return (
    <div className={styles.container}>
      {(modalType === 'Todo' || modalType === 'In progress') && value && (
        <Modal text={'?????????????? ??????????'}>
          <Link to="/">
            <img src={close} alt="" onClick={toggle} />
          </Link>
          <TaskForm
            modalType={modalType}
            onClick={toggle}
            id={id}
          />
        </Modal>
      )}

      {modalType === 'edit' && value && (
        <Modal text={'??????????????????????????'}>
          <Link to="/">
            <img src={close} alt="" onClick={toggle} />
          </Link>
          <TaskForm
            modalType={modalType}
            onClick={toggle}
            id={id}
          />
        </Modal>
      )}

      <div className={styles.filter}>
        <Checkbox text={'??????????????????????'} filter='comments' />
        <Checkbox text={'????????????????'} filter='description' />
        <Checkbox text={'??????'} filter='tag' />
      </div>
      <div className={styles.task_container}>
        <div>
          <h2>Todo</h2>
          <div className={styles.todo_container} onDragStart={(e) => dragStartHandler(e)}
            onDragLeave={(e) => dragEndHandler(e)}
            onDragEnd={(e) => dragEndHandler(e)}
            onDragOver={(e) => dragOverHandler(e)}
            onDrop={(e) => dropHandler(e, 'Todo')}>
            {tickets?.tickets.filter((el) => el.status === 'Todo')
              .map((task) => (
                <TaskCard
                  text={task.text}
                  tagsArray={task.tagsArray}
                  key={task.id}
                  id={task.id}
                  comments={task.comments}
                  description={task.description}
                  task={task}
                />
              ))}
            <Link to="/create/todo">
              <Button text={'+ ???????????????? ??????????'} type={'add_big'} />
            </Link>
          </div>
        </div>
        <div>
          <h2>In progress</h2>
          <div className={styles.progress_container} onDragStart={(e) => dragStartHandler(e)}
            onDragLeave={(e) => dragEndHandler(e)}
            onDragEnd={(e) => dragEndHandler(e)}
            onDragOver={(e) => dragOverHandler(e)}
            onDrop={(e) => dropHandler(e, 'In progress')}>
            {tickets?.tickets.filter((el) => el.status === 'In progress')
              .map((task) => (
                <TaskCard
                  text={task.text}
                  tagsArray={task.tagsArray}
                  key={task.id}
                  id={task.id}
                  comments={task.comments}
                  description={task.description}
                  task={task}
                />
              ))}
            <Link to="/create/in_progress">
              <Button text={'+ ???????????????? ??????????'} type={'add_big'} action='progress' />
            </Link>
          </div>
        </div>
        <div>
          <h2>Done</h2>
          <div className={styles.done_container} onDragStart={(e) => dragStartHandler(e)}
            onDragLeave={(e) => dragEndHandler(e)}
            onDragEnd={(e) => dragEndHandler(e)}
            onDragOver={(e) => dragOverHandler(e)}
            onDrop={(e) => dropHandler(e, 'Done')}>
            {tickets?.tickets.filter((el) => el.status === 'Done')
              .map((task) => (
                <TaskCard
                  text={task.text}
                  tagsArray={task.tagsArray}
                  key={task.id}
                  id={task.id}
                  comments={task.comments}
                  description={task.description}
                  task={task}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
