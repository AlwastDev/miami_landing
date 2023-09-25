import styles from './Testimonials.module.scss';
import { Container, Title } from '../../../../UI';

const Testimonials = () => {
  return (
    <section>
      <Container>
        <Title text={'Testimonials'} />
        <div className={styles.grid}>
          <div>
            <img className={styles.grid_img_item1} alt="photo1" />
            <h4>Leslie Mckinney</h4>
            <p className={styles.positionText}>CEO</p>
            <p className={styles.descriptionText}>Nice work, Certificates National Association of Realtors (USA)</p>
          </div>
          <div>
            <img className={styles.grid_img_item2} alt="photo2" />
            <h4>Scarlett Hawkins</h4>
            <p className={styles.positionText}>Senior Vice President</p>
            <p className={styles.descriptionText}>
              My soul is illuminated by an unearthly joy, as these beautiful spring morning, which I enjoy with all my
              heart
            </p>
          </div>
          <div>
            <img className={styles.grid_img_item3} alt="photo3" />
            <h4>Max Henry</h4>
            <p className={styles.positionText}>Chief Design Officer</p>
            <p className={styles.descriptionText}>
              When my lovely valley of steam rises and half-day sun is above an impermeable
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
