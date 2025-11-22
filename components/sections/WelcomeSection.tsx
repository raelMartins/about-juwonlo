import Link from 'next/link';
import styles from '../../styles/sections/welcomesection.module.scss';

const WelcomeSection = () => {
  return (
    <section className={styles.welcomeSection}>
      <h3>Hi, my name is</h3>
      <h1>Assumpta Obasi.</h1>
      <h2>I ensure your favourite products work as they should.</h2>
      <p>
        I&apos;m a Product Manager, meaning I am in charge of developing and
        managing the life cycle of a product, usually from conception till
        completion, through market research, prioritization, product development
        and execution. The goal is always to deliver a product that not only
        meets user needs but also achieves company set objectives and creates
        value wherever I work.
      </p>
      <Link className={styles.viewMyProjects} href='/#projects'>
        Check out what I&apos;ve worked on!
      </Link>
    </section>
  );
};

export default WelcomeSection;
