import styles from './NavLink.module.scss';
import Link from 'next/link';
import useWindowSize from '../../../hooks/use-window-size';
import { useMenuContext } from '../../../context/useMenuContext';
import { useRouter } from 'next/router';

const NavLink = (props) => {
  const router = useRouter();
  const size = useWindowSize();
  const [menu, setMenu] = useMenuContext();
  const setMenuHandler = () => {
    setMenu(false);
  };
  return (
    <li>
      <Link href={props.href}>
        <a
          onClick={setMenuHandler}
          className={`${size.width < 768 && styles.link} ${
            router.pathname == props.href ? styles.link__selected : styles.link
          }`}
        >
          {' '}
          <span>
            {size.width < 768 || size.width >= 1440 ? props.number : ''}
          </span>{' '}
          {props.text}
        </a>
      </Link>
    </li>
  );
};

export default NavLink;
