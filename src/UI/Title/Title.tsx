import styles from './Title.module.scss';
import { FC } from 'react';
import { ITitle } from './types.ts';

const Title: FC<ITitle> = ({ text }) => {
  return (
    <div className={styles.title}>
      <h2 className={styles.title__text}>{text}</h2>
      <img className={styles.title__icon} alt="coronaIcon" />
    </div>
  );
};

export default Title;
