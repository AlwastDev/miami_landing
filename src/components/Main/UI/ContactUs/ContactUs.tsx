import styles from './ContactUs.module.scss';
import { Title } from '../../../../UI';

const ContactUs = () => {
  return (
    <section>
      <div className={styles.container}>
        <Title text={'Contact Us'} />
      </div>
    </section>
  );
};

export default ContactUs;
