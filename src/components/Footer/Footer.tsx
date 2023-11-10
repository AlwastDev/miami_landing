import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img className={styles.footer__logo} alt={'footerLogo'} />
    </footer>
  );
};

export default Footer;
