import styles from './Header.module.scss';
import { FC } from 'react';
import { Container } from '../../UI';
import { UpperHeader, LowerHeader } from './UI';

const Header: FC = () => {
  return (
    <>
      <header className={styles.background}>
        <Container>
          <div className={styles.contentHeader}>
            <UpperHeader />
            <LowerHeader />
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
