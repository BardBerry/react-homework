import React from 'react';
import styles from './styles.module.css';
import { useField } from 'formik';
import { useState } from 'react';

export default function Input({text, description, placeholder, input, ...props }) {
  const [field, meta] = useField(props);

  if (text || description) {
    return input === 'input'
      ? <input {...field} {...props} placeholder={placeholder} className={styles.input} value={text} disabled="disabled" readOnly />
      : <textarea {...field} {...props} placeholder={placeholder} className={styles.textarea} value={description} disabled="disabled" readOnly />
  }

  return input === 'input'
    ? <input {...field} {...props} placeholder={placeholder} className={styles.input} />
    : <textarea {...field} {...props} placeholder={placeholder} className={styles.textarea} />
}
