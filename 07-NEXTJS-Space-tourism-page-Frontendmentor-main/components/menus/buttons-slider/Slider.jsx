import { useState } from 'react';
import { useMemberContext } from '../../../context/useMemberContext';
import styles from './Slider.module.scss';

const Slider = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [crew, setMember] = useMemberContext();
  const douglasHandler = () => {
    setMember(0);
    setIsActive(true);
  };
  const markHandler = () => {
    setMember(1);
    setIsActive(true);
  };
  const victorHandler = () => {
    setMember(2);
    setIsActive(true);
  };
  const anoushehHandler = () => {
    setMember(3);
    setIsActive(true);
  };
  return (
    <ul className={styles.list}>
      <li className={styles.list__element}>
        <button
          onClick={douglasHandler}
          className={`${styles.list__button} ${
            crew === 0 ? styles.list__button__selected : ''
          }`}
        ></button>
      </li>
      <li className={styles.list__element}>
        <button
          onClick={markHandler}
          className={`${styles.list__button} ${
            crew === 1 ? styles.list__button__selected : ''
          }`}
        ></button>
      </li>
      <li className={styles.list__element}>
        <button
          onClick={victorHandler}
          className={`${styles.list__button} ${
            crew === 2 ? styles.list__button__selected : ''
          }`}
        ></button>
      </li>
      <li className={styles.list__element}>
        <button
          onClick={anoushehHandler}
          className={`${styles.list__button} ${
            crew === 3 ? styles.list__button__selected : ''
          }`}
        ></button>
      </li>
    </ul>
  );
};

export default Slider;
