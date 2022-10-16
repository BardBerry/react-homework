/* eslint-disable no-undef */
import React, { useState } from 'react'
import { Formik, Form } from 'formik';
import Input from '../Input/Input';
import Button from '../Button/Button';
import TagSelector from '../TagSelector/TagSelector';
import styles from './styles.module.css';
import { Link, useNavigate } from 'react-router-dom';
import Tag from '../Tag/Tag';
import { v4 as uuidv4 } from 'uuid';

export default function TaskForm({ modalType, text, description, onClick, data, setTickets }) {
  const [value, setValue] = useState([]);
  const navigate = useNavigate();

  function submit(type) {
    switch (type) {
      case 'create':
        navigate('/')
        break;
      case 'edit':
        navigate('/')
        break;

      default:
        break;
    }
    // onClick();
  }

  async function createTicket(values) {
    const response = await fetch('http://localhost:3030/', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ values, value }),
      credentials: 'include',
    });

    if (response.ok) {
      const tickets = await response.json();
      setTickets(tickets);
    }
  }

  return (
    <Formik initialValues={{}} onSubmit={(values, { resetForm }) => {
      console.log(values);
      console.log(value);
      createTicket(values);
      resetForm();
    }}>
      <Form>
        {modalType === 'create' &&
          <div className={styles.container}>
            <Input name='task' type='text' input={'input'} placeholder='Название' />
            <Input name='description' type='text' placeholder='Описание' />
            <TagSelector setValue={setValue} />
            <Button text={'Сохранить'} type={'save_big'} onClick={() => { submit('create') }} />
          </div>
        }
        {modalType === 'edit' &&
          <div className={styles.container}>
            <Input name='task' type='text' input={'input'} />
            <Input name='description' type='text' />
            <div className={styles.tagsArray}>
              {data?.tagsArray?.map((tag) => <Tag color={tag} size={'medium'} key={uuidv4()} />)}
            </div>
            <TagSelector setValue={setValue} />
            <Button text={'Сохранить'} type={'save_big'} onClick={() => { submit('edit') }} />
          </div>
        }
        {modalType === 'ticket' &&
          <div className={styles.ticket_container}>
            <Input text={text} name='task' type='text' input={'input'} />
            <Input description={description} name='description' type='text' />
          </div>
        }

      </Form>
    </Formik>
  )
}
