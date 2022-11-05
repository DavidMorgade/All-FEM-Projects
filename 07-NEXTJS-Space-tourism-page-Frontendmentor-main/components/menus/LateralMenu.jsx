import styles from './LateralMenu.module.scss';
import Image from 'next/image';
import { Close } from '../../images/images';
import Navbar from '../UI/navbar/Navbar';
import { useMenuContext } from '../../context/useMenuContext';

const LateralMenu = () => {
  const [menu, setMenu] = useMenuContext();
  const menuHandler = () => {
    setMenu(false);
  };

  return (
    <div className={styles.menu}>
      <button onClick={menuHandler} className={styles.menu__button}>
        <Image alt="icon close" src={Close} />
      </button>
      <Navbar />
    </div>
  );
};

export default LateralMenu;
