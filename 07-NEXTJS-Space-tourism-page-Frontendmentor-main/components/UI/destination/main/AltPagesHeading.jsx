import styles from './PlanetSwiper.module.scss';

const AltPagesHeading = (props) => {
  return (
    <h1
      style={{
        padding: props.padding,
        gridColumn: props.column,
        justifySelf: props.align,
      }}
      className={styles.section__heading}
    >
      <span className={styles.span}>{props.page}</span> {props.text}
    </h1>
  );
};

export default AltPagesHeading;
