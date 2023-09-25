import { Container } from '../../../../UI';
import styles from './BasicInformation.module.scss';

const BasicInformation = () => {
  return (
    <section>
      <Container>
        <div className={styles.contentWrapper}>
          <div className={styles.content}>
            <h3 className={styles.textLeft}>
              Miami best <br /> Real estate <br />
              <span>here</span>
            </h3>
          </div>
          <div className={styles.content}>
            <h3 className={styles.textRightUpper}>Over 50 years experience in love.</h3>
            <p className={styles.textRightLower}>
              Mazel and VA Tsukkerman in his "Analysis of musical works." Pointillism, which originated in the music of
              the early twentieth century, microforms, found a distant historical. <br />
              <br /> The market leader in real estate since 2003. Awards Real Estate Company, 2010, 2011, 2013. More
              than 200 satisfied customers premium segment. We focus only on new buildings and high-level doskanalno
              know this area better than other specialists.
              <br /> Working directly with developers - so have more useful information about the profitable deals.{' '}
              <br /> <br />{' '}
              <b>
                We will never be late! <br /> Guaranteed secure transaction - 100%
              </b>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BasicInformation;
