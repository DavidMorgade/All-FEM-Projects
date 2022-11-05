import Image from 'next/image';
import { useContext, useEffect } from 'react';
import { useMenuContext } from '../../../context/useMenuContext';
import useWindowSize from '../../../hooks/use-window-size';

import { Logo } from '../../../images/images';
import Hamburger from '../../menus/Hamburger';
import Navbar from '../navbar/Navbar';
import styles from './Header.module.scss';

const Header = (props) => {
  const size = useWindowSize();
  const [menu, _] = useMenuContext();
  return (
    <header className={styles.header}>
      <Image className={styles.header__img} src={Logo} alt="logo img" />

      {!menu && size.width < 768 && <Hamburger />}

      {size.width >= 768 && <Navbar />}
    </header>
  );
};

export default Header;
