import { useContext } from 'react';
import ModalContext from '../../../context/modal-context';

import styles from './RulesModal.module.css';
import { Rules, Close } from '../../../images/images';

const RulesModal = (props) => {
  const modalCtx = useContext(ModalContext);

  return (
    <div className={styles.modal}>
      <h2 className={styles.text}>RULES</h2>
      <img className={styles.rules} src={Rules} alt="Rules of the game" />
      <button onClick={modalCtx.closeModal} className={styles.button}>
        <img src={Close} alt="icon close" />
      </button>
    </div>
  );
};

export default RulesModal;
