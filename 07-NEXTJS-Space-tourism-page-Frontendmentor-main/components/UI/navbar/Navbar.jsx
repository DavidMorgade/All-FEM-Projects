import styles from './Navbar.module.scss';
import NavLink from './NavLink';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <NavLink href="/" number="00" text="Home" />
        <NavLink href="/destination" number="01" text="Destination" />
        <NavLink href="/crew" number="02" text="Crew" />
        <NavLink href="/technology" number="03" text="Technology" />
      </ul>
    </nav>
  );
};
export default Navbar;
