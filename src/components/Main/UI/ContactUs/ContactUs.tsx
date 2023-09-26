import styles from './ContactUs.module.scss';
import { Title } from '../../../../UI';

const ContactUs = () => {
  return (
    <section>
      <Title text={'Contact Us'} />
      <div className={styles.contactUs}>
        <div className={`${styles.contactUs__section} ${styles.contactUs__leftContent}`}>
          <div>
            <p className={styles.contactUs__sectionTitle}>Phone</p>
            <p className={styles.contactUs__sectionText}>+1 234 5555-55-55</p>
          </div>
          <div className={styles.contactUs__leftContent__email}>
            <p className={styles.contactUs__sectionTitle}>Email</p>
            <p className={styles.contactUs__sectionText}>hello@miami.com</p>
          </div>
        </div>
        <div className={`${styles.contactUs__section} ${styles.contactUs__leftContent}`}>
          <p className={styles.contactUs__sectionTitle}>Address</p>
          <p className={styles.contactUs__sectionText}>
            400 first ave. n. <br /> suite 700 Minneapolis, MN 55401
          </p>
        </div>
        <div className={styles.contactUs__rightContent}>
          <input type="text" className={styles.contactUs__rightContent__nameInput} placeholder={'Name'} />
          <input type="email" className={styles.contactUs__rightContent__emailInput} placeholder={'Email'} />
          <textarea className={styles.contactUs__rightContent__messageTextArea} placeholder={'Message'} />
          <button className={styles.contactUs__rightContent__consultationButton}>Consultation</button>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
