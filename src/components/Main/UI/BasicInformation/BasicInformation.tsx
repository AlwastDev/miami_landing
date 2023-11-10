import styles from './BasicInformation.module.scss';
import { scrollUp } from '@static/smoothScrollUp.ts';

const BasicInformation = () => {
  return (
    <section>
      <div className={styles.basicInformation}>
        <div className={styles.basicInformation__leftContent}>
          <h2 className={styles.basicInformation__mainTitle}>
            Miami's Finest <br /> Real Estate <br />
            <span onClick={() => scrollUp()}>Here</span>
          </h2>
        </div>
        <div className={styles.basicInformation__rightContent}>
          <h3 className={styles.basicInformation__subTitle}>Over 50 Years of Expertise in Real Estate</h3>
          <br />
          <p className={styles.basicInformation__description}>
            Mazel and VA Tsukkerman in his "Analysis of musical works." Pointillism, which originated in the music of
            the early twentieth century, microforms, found a distant historical. <br />
            <br /> The market leader in real estate since 2003. Awards Real Estate Company, 2010, 2011, 2013. More than
            200 satisfied customers in the premium segment. We focus exclusively on new developments and have
            unparalleled expertise in this area. <br /> Working directly with developers allows us to provide you with
            the most up-to-date and profitable deals. <br /> <br />{' '}
            <b>
              We are always on time! <br /> Guaranteed Secure Transactions - 100%
            </b>
          </p>
        </div>
      </div>
    </section>
  );
};

export default BasicInformation;
