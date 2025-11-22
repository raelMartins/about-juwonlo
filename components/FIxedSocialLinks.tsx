import {
  FiGithub,
  FiInstagram,
  FiTwitter,
  FiLinkedin,
  FiCodepen,
  FiPhoneCall
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import styles from '../styles/fixedsociallinks.module.scss';

const FixedSocialLinks = () => {
  return (
    <div className={styles.verticalContainer}>
      <ul>
        <li>
          <a
            href='tel:2348038964249'
            aria-label='Phone'
            target='_blank'
            rel='noreferrer'
          >
            <FiPhoneCall />
          </a>
        </li>
        <li>
          <a
            href='https://www.instagram.com/ms.lerie/'
            aria-label='Instagram'
            target='_blank'
            rel='noreferrer'
          >
            <FiInstagram />
          </a>
        </li>
        <li>
          <a
            href='https://x.com/ValerieOgechi'
            aria-label='Twitter'
            target='_blank'
            rel='noreferrer'
          >
            <FiTwitter />
          </a>
        </li>
        <li>
          <a
            href='https://www.linkedin.com/in/assumpta-obasi'
            aria-label='Linkedin'
            target='_blank'
            rel='noreferrer'
          >
            <FiLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://wa.me/2348038964249?text=Hi Assumpta, I'd love to chat"
            aria-label='Codepen'
            target='_blank'
            rel='noreferrer'
          >
            <FaWhatsapp />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FixedSocialLinks;
