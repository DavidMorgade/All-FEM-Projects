import { useContext } from 'react';

import ModalContext from '../../context/modal-context';
import styles from './Button.module.css';

const Button = (props) => {
  const modalCtx = useContext(ModalContext);
  const buttonStyles = props.type === 'rules' ? styles.rules : null;
  return (
    <button onClick={modalCtx.openModal} className={buttonStyles}>
      <p className={styles.text}>{props.children}</p>
    </button>
  );
};

export default Button;
