import styles from './UpperHeader.module.scss';

const UpperHeader = () => {
  return (
    <div className={styles.upperHeader}>
      <button className={styles.burgerButton} />
      <img className={styles.logoImg} alt="logoMiami" />
      <button className={styles.phoneButton} />
    </div>
  );
};

export default UpperHeader;
