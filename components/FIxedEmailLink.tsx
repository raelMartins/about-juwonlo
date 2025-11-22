import styles from '../styles/fixedemaillink.module.scss';

const FixedEmailLink = () => {
  return (
    <div className={styles.verticalContainer}>
      <div className={styles.emailWrapper}>
        <a href='mailto:valerieogechi@gmail.com'>valerieogechi@gmail.com</a>
      </div>
    </div>
  );
};

export default FixedEmailLink;
