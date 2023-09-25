import styles from './Container.module.scss';
import { FC, ReactNode } from 'react';

const Container: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <div className={styles.mainContainer}>{children}</div>
    </>
  );
};

export default Container;
