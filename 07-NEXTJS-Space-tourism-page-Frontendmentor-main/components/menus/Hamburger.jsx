import styles from './Hamburger.module.scss';
import Image from 'next/image';
import { HamburgerImg } from '../../images/images';
import { useMenuContext } from '../../context/useMenuContext';
import { useEffect } from 'react';

const Hamburger = () => {
  const [menu, setMenu] = useMenuContext();
  const menuHandler = () => {
    setMenu(true);
  };

  return (
    <button onClick={menuHandler} className={styles.hamburger}>
      <Image src={HamburgerImg} alt="icon hamburguer" />
    </button>
  );
};

export default Hamburger;
