import styles from './Headings.module.scss';

const RankHeading = (props) => {
  return <h2 className={styles.rank}>{props.text}</h2>;
};

export default RankHeading;
