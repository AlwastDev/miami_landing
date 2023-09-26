import styles from './Header.module.scss';
import { FC } from 'react';
import { LowerHeader, UpperHeader } from './UI';

const Header: FC = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__body}>
          <UpperHeader />
          <LowerHeader />
        </div>
      </header>
    </>
  );
};

export default Header;
