import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <img className={styles.footer__logo} alt={'footerLogo'} />
    </div>
  );
};

export default Footer;
