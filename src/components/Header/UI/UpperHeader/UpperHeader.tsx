import styles from './UpperHeader.module.scss';
import { FC } from 'react';
import useWindowWidth from '../../../../hooks/useWindowWidth.ts';
import { tablet } from '../../../../static/screens.ts';

interface UpperHeaderProps {
  handleBurgerMenu: () => void;
}

const UpperHeader: FC<UpperHeaderProps> = ({ handleBurgerMenu }) => {
  const windowWidth = useWindowWidth();

  return (
    <>
      <div className={styles.upperHeader}>
        <a className={styles.upperHeader__burgerButton} onClick={handleBurgerMenu} />
        <img className={styles.upperHeader__logoImg} alt="logoMiami" />
        <div className={styles.upperHeader__phoneNumber}>
          {windowWidth > tablet && <p className={styles.upperHeader__phoneNumber__text}>+1 123 555-55-55</p>}
          <a className={styles.upperHeader__phoneNumber__button} href="tel: +1 123 555-55-55">
            +1 123 555-55-55
          </a>
        </div>
      </div>
    </>
  );
};

export default UpperHeader;
