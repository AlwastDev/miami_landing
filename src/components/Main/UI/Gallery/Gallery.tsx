import styles from './Gallery.module.scss';
import { Title } from '@UI/index.ts';

const Gallery = () => {
  return (
    <section>
      <div className={styles.gallery}>
        <Title text={'Gallery'} />
        <div className={styles.gallery__row1}>
          <img className={styles.gallery__item1} alt="gallery1" />
          <img className={styles.gallery__item2} alt="gallery2" />
        </div>
        <p className={styles.gallery__location}>
          <a href="https://goo.gl/maps/iYndxpFFacZNnjCW6" target={'_blank'}>
            Marina Palms
          </a>{' '}
          / North Miami Beach, FL 33162
        </p>
        <div className={styles.gallery__row2}>
          <img className={styles.gallery__item3} alt="gallery3" />
          <img className={styles.gallery__item4} alt="gallery4" />
        </div>
        <p className={styles.gallery__location}>
          <a href="https://goo.gl/maps/VhmdqSPVmb4489pL7" target={'_blank'}>
            Edition Residens
          </a>{' '}
          / Miami Beach, FL 33139
        </p>
        <div className={styles.gallery__row3}>
          <img className={styles.gallery__item5} alt="gallery5" />
          <img className={styles.gallery__item6} alt="gallery6" />
        </div>
        <p className={`${styles.gallery__location} ${styles.gallery__location__last}`}>
          <a href="https://goo.gl/maps/VhmdqSPVmb4489pL7" target={'_blank'}>
            Faena House
          </a>{' '}
          / Miami Beach, FL 33140
        </p>
        <button className={styles.gallery__viewButton}>View all</button>
      </div>
    </section>
  );
};

export default Gallery;
