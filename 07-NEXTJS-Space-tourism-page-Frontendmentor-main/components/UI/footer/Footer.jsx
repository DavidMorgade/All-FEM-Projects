import styles from './Footer.module.scss';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link href="/destination">
        <button className={styles.footer__button}>Explore</button>
      </Link>
    </footer>
  );
};

export default Footer;
