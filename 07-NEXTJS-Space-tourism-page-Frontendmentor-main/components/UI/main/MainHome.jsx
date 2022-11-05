import styles from './MainHome.module.scss';

const MainHome = () => {
  return (
    <main className={styles.main}>
      <h5 className={styles.main__title}>So, you want to travel to</h5>
      <h1 className={styles.main__heading}>SPACE</h1>
      <p className={styles.main__text}>
        {' '}
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
    </main>
  );
};

export default MainHome;
