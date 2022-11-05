import styles from './Headings.module.scss';

const NameHeading = (props) => {
  return (
    <h1
      style={{
        margin: props.margin + 'rem',
        textAlign: props.align,
        width: props.width,
        alignSelf: props.gridAlign,
      }}
      className={styles.name}
    >
      {props.text}
    </h1>
  );
};

export default NameHeading;
