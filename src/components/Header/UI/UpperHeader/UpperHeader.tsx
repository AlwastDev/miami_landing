import styles from './UpperHeader.module.scss';

const UpperHeader = () => {
  return (
    <div className={styles.upperHeader}>
      <a className={styles.upperHeader__burgerButton} />
      <img className={styles.upperHeader__logoImg} alt="logoMiami" />
      <div className={styles.upperHeader__phoneNumber}>
        <a className={styles.upperHeader__phoneNumber__text}>+1 123 555-55-55</a>
        <a className={styles.upperHeader__phoneNumber__button} href="tel: +1 123 555-55-55" />
      </div>
    </div>
  );
};

export default UpperHeader;
