import { Fragment } from 'react';
import styles from './PlayerText.module.css';

const PlayerText = (props) => {
  const textStyle = props.type === 'human' ? 'textHuman' : 'textBrowser';
  return (
    <Fragment>
      <p className={`${styles[textStyle]} ${styles.text} ${props.animation}`}>
        {props.text}
      </p>
    </Fragment>
  );
};

export default PlayerText;
