import styles from './Title.module.scss';
import { FC } from 'react';
import { ITitle } from "./types.ts";

const Title: FC<ITitle> = ({ text }) => {
  return (
    <>
      <h2 className={styles.secondText}>{text}</h2>
      <img className={styles.coronaIcon} alt="coronaIcon" />
    </>
  );
};

export default Title;
