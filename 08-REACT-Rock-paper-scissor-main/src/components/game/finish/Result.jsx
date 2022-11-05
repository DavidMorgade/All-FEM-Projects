import styles from './Result.module.css';

const Result = (props) => {
  return <p className={`${styles.result} `}>{props.result}</p>;
};

export default Result;
