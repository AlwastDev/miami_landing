import styles from './UpperHeader.module.scss';

const UpperHeader = () => {
  return (
    <div className={styles.upperHeader}>
      <button className={styles.upperHeader__burgerButton} />
      <img className={styles.upperHeader__logoImg} alt="logoMiami" />
      <button className={styles.upperHeader__phoneButton} />
    </div>
  );
};

export default UpperHeader;
