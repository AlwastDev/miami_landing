import styles from './Title.module.scss';
import { FC } from 'react';

const Title: FC<{ text: string }> = ({ text }) => {
  return (
    <>
      <h2>{text}</h2>
      <img className={styles.coronaIcon} alt="coronaIcon" />
    </>
  );
};

export default Title;
