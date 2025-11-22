import styles from '../styles/iconsvg.module.scss';

const IconSVG = () => {
  return (
    <svg height='111' width='97.6' className={styles.myLogo}>
      <polygon
        id='myHex'
        className={styles.myHex}
        points='48.3,5 5,30 5,80 48.3,105 91.6,80 91.6,30 48.3,5'
        strokeLinejoin='round'
        strokeLinecap='round'
      />
      <polyline
        className={styles.myEm}
        points='32,72 48,38 64,72'
        strokeWidth={`4`}
      />
      <polyline
        className={styles.myEm}
        points='36,60 48,65 60,60'
        strokeWidth={`4`}
      />
    </svg>
  );
};

export default IconSVG;
