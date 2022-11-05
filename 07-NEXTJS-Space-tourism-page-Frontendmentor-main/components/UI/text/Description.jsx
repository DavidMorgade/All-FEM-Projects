import styles from './Headings.module.scss';

const Description = (props) => {
  return (
    <p
      style={{ margin: props.margin + 'rem', width: props.width }}
      className={styles.description}
    >
      {props.text}
    </p>
  );
};

export default Description;
