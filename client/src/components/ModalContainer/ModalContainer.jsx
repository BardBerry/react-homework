import { useMemo } from 'react';
import ReactDOM from 'react-dom';

export const ModalContainer = ({ children }) => {
  const containerElement = useMemo(
    () => document.getElementById('modal-container'),
    []
  );

  return ReactDOM.createPortal(children, containerElement);
};
