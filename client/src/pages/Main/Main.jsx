import React, { useState } from 'react'
import Button from '../../components/Button/Button';
import Checkbox from '../../components/Checkbox/Checkbox'
import Modal from '../../components/Modal/Modal';
import TaskCard from '../../components/TaskCard/TaskCard';
import { useToggle } from '../../hooks/useToggle';
import styles from './styles.module.css';
import close from '../../assets/images/close.png'
import Input from '../../components/Input/Input';
import TagSelector from '../../components/TagSelector/TagSelector';
import Comment from '../../components/Comment/Comment';

import { database } from '../../assets/database';
import TaskForm from '../../components/TaskForm/TaskForm';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Main({ modal }) {
  let { value, toggle } = useToggle(false);
  const [modalType, setModalType] = useState('');
  const [tickets, setTickets] = useState([]);
  const [ticketInfo, setTicketInfo] = useState({});
  const [tags, setTags] = useState([]);
  const { id } = useParams()

  useEffect(() => {
    if (modal && modal !== 'close') {
      if (id) fetchId();
      setModalType(modal);
      toggle();
    } else if (modal === 'close') {
      if (value) {
        toggle();
      }
    }
  }, [modal])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:3030/', {
        credentials: 'include',
      });
      if (response.ok) {
        const data = await response.json();
        setTickets(data.tickets);
        setTags(data.tagsArray);
      }
    }

    fetchData();
  }, []);

  async function fetchId() {
    const response = await fetch(`http://localhost:3030/${id}`, {
      credentials: 'include',
    });
    if (response.ok) {
      const data = await response.json();
      setTicketInfo(data);
    }
  }

  return (
    <div className={styles.container}>
      {modalType === 'create' && value && <Modal text={'Создать тикет'}>
        <Link to='/'><img src={close} alt="" onClick={toggle} /></Link>
        <TaskForm modalType={modalType} onClick={toggle} setTickets={setTickets} />
      </Modal>}

      {modalType === 'edit' && value && <Modal text={'Редактировать'} tagsArray={tags.tagsArray}>
        <Link to='/'><img src={close} alt="" onClick={toggle} /></Link>
        <TaskForm modalType={modalType} onClick={toggle} data={ticketInfo} setTickets={setTickets} />
      </Modal>}

      <div className={styles.filter}>
        <Checkbox text={'Комментарий'} />
        <Checkbox text={'Описание'} />
        <Checkbox text={'Тег'} />
      </div>
      <div className={styles.task_container}>
        <div>
          <h2>Todo</h2>
          <div className={styles.todo_container}>
            {tickets?.filter((el) => el.status === 'Todo').map((task) => <TaskCard text={task.text} tagsArray={task.tagsArray} key={task.id} id={task.id} comments={task.comments} description={task.description} />)}
            <Link to='/create'><Button text={'+ Добавить тикет'} type={'add_big'} /></Link>
          </div>
        </div>
        <div>
          <h2>In progress</h2>
          <div className={styles.progress_container}>
            {tickets?.filter((el) => el.status === 'In progress').map((task) => <TaskCard text={task.text} tagsArray={task.tagsArray} key={task.id} id={task.id} comments={task.comments} description={task.description} />)}
            <Link to='/create'><Button text={'+ Добавить тикет'} type={'add_big'} /></Link>
          </div>
        </div>
        <div>
          <h2>Done</h2>
          <div className={styles.done_container}>
            {tickets?.filter((el) => el.status === 'Done').map((task) => <TaskCard text={task.text} tagsArray={task.tagsArray} key={task.id} id={task.id} comments={task.comments} description={task.description} />)}
          </div>
        </div>
      </div>
    </div>
  )
}
