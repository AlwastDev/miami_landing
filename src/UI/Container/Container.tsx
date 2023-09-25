import styles from './Container.module.scss';
import { FC } from 'react';
import { IContainer } from "./types.ts";

const Container: FC<IContainer> = ({ children }) => {
  return (
    <>
      <div className={styles.mainContainer}>{children}</div>
    </>
  );
};

export default Container;
