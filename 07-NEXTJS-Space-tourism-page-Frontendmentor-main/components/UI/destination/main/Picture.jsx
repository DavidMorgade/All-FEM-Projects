import styles from './Planet.module.scss';
import Image from 'next/image';

const Picture = (props) => {
  return (
    <div className={`${styles.image} image ${props.full}`}>
      <Image
        alt="destination pic"
        style={props.style}
        className={props.full}
        src={props.image}
      />
    </div>
  );
};

export default Picture;
