import { Container } from '../../../../../src/UI';
import styles from './Gallery.module.scss';
import { Title } from '../../../../UI';

const Gallery = () => {
  return (
    <section>
      <Container>
        <Title text={'Gallery'} />
        <div className={styles.gridGallery1}>
          <img className={`${styles.gallery} ${styles.gallery_item1}`} alt="gallery1" />
          <img className={`${styles.gallery} ${styles.gallery_item2}`} alt="gallery2" />
        </div>
        <p className={styles.text}>
          <span>Marina Palms</span> / North Miami Beach, FL 33162
        </p>
        <div className={styles.gridGallery2}>
          <img className={`${styles.gallery} ${styles.gallery_item3}`} alt="gallery3" />
          <img className={`${styles.gallery} ${styles.gallery_item4}`} alt="gallery4" />
        </div>
        <p className={styles.text}>
          <span>Edition Residens</span> / Miami Beach, FL 33139
        </p>
        <div className={styles.gridGallery3}>
          <img className={`${styles.gallery} ${styles.gallery_item5}`} alt="gallery5" />
          <img className={`${styles.gallery} ${styles.gallery_item6}`} alt="gallery6" />
        </div>
        <p className={styles.text}>
          <span>Faena House</span> / Miami Beach, FL 33140
        </p>
        <button className={styles.button}>View all</button>
      </Container>
    </section>
  );
};

export default Gallery;
