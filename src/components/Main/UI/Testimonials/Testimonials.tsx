import styles from './Testimonials.module.scss';
import { Title } from '../../../../UI';

const Testimonials = () => {
  return (
    <section>
      <div className={styles.testimonials}>
        <Title text={'Testimonials'} />
        <div className={styles.testimonials__grid}>
          <div>
            <img className={styles.testimonials__avatar1} alt="photo1" />
            <h3 className={styles.testimonials__title}>Leslie Mckinney</h3>
            <p className={styles.testimonials__position}>CEO</p>
            <p className={styles.testimonials__description}>
              Nice work, Certificates National Association of Realtors (USA)
            </p>
          </div>
          <div>
            <img className={styles.testimonials__avatar2} alt="photo2" />
            <h3 className={styles.testimonials__title}>Scarlett Hawkins</h3>
            <p className={styles.testimonials__position}>Senior Vice President</p>
            <p className={styles.testimonials__description}>
              My soul is illuminated by an unearthly joy, as these beautiful spring morning, which I enjoy with all my
              heart
            </p>
          </div>
          <div>
            <img className={styles.testimonials__avatar3} alt="photo3" />
            <h3 className={styles.testimonials__title}>Max Henry</h3>
            <p className={styles.testimonials__position}>Chief Design Officer</p>
            <p className={styles.testimonials__description}>
              When my lovely valley of steam rises and half-day sun is above an impermeable
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
