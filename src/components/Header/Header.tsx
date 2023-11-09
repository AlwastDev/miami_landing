import styles from './Header.module.scss';
import { FC, useState } from 'react';
import { LowerHeader, UpperHeader } from './UI';

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleBurgerMenu = () => setIsOpen(!isOpen);

  const menuClass = isOpen ? styles.menuOpen : styles.menuClosed;

  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__body}>
          <UpperHeader handleBurgerMenu={handleBurgerMenu} />
          <LowerHeader />
        </div>
        <nav className={`${styles.sideMenu} ${menuClass}`}>
          <div className={styles.sideMenu__content}>
            <div className={styles.sideMenu__content__top}>
              <button className={styles.sideMenu__content__closeButton} onClick={handleBurgerMenu}>
                Close menu
              </button>
              <img className={styles.sideMenu__content__logo} alt={'logo'} />
            </div>
            <ul className={styles.sideMenu__content__menu}>
              <li className={styles.sideMenu__content__menuItem}>
                <a href="#Home" className={styles.sideMenu__content__link}>
                  Home
                </a>
              </li>
              <li className={styles.sideMenu__content__menuItem}>
                <a href="#AboutUs" className={styles.sideMenu__content__link}>
                  About us
                </a>
              </li>
              <li className={styles.sideMenu__content__menuItem}>
                <a href="#Gallery" className={styles.sideMenu__content__link}>
                  Gallery
                </a>
              </li>
              <li className={styles.sideMenu__content__menuItem}>
                <a href="#Testimonials" className={styles.sideMenu__content__link}>
                  Testimonials
                </a>
              </li>
              <li className={styles.sideMenu__content__menuItem}>
                <a href="#Contacts" className={styles.sideMenu__content__link}>
                  Contacts
                </a>
              </li>
            </ul>
            <div className={styles.sideMenu__content__contactInfo}>
              <a className={styles.sideMenu__content__phoneNumber}>+1 234 555-55-55</a>
              <a href="tel: +1 234 555-55-55  " className={styles.sideMenu__content__callToOrder}>
                Call to order
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
