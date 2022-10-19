import React from 'react';
import { useEffect } from 'react';
import styles from './styles.module.css';

export default function Input({
  text,
  description,
  placeholder,
  input,
  setInput,
  valueInput,
  textTicket,
}) {

  useEffect(() => {
    if (setInput) setInput(textTicket);
  }, [textTicket])

  if (text || description) {
    return input === 'input' ? (
      <input
        placeholder={placeholder}
        className={styles.input}
        value={text}
        disabled="disabled"
        readOnly
      />
    ) : (
      <textarea
        placeholder={placeholder}
        className={styles.textarea}
        value={description}
        disabled="disabled"
        readOnly
      />
    );
  }

  return input === 'input' ? (
    <input
      placeholder={placeholder}
      className={styles.input}
      value={valueInput}
      onChange={(e) => setInput(e.target.value)}
    />
  ) : (
    <textarea
      placeholder={placeholder}
      className={styles.textarea}
      value={valueInput}
      onChange={(e) => setInput(e.target.value)}
    />
  );
}
