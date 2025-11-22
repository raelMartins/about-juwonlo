import styles from 'styles/sections/contactme.module.scss';

const ContactMe = () => {
  return (
    <section id='contact' className={styles.contactMeSection}>
      <h1>What’s Next?</h1>
      <h2>Get In Touch</h2>
      <p>
        I’m currently looking for new opportunities. If you think I&apos;d be a
        good fit for your team, my inbox is always open. Or if you just have a
        question or just want to say hi, feel free to message me and I&apos;ll
        get back to you!
      </p>
      <a
        className='emailLink'
        href='mailto:valerieogechi@gmail.com'
        rel='noopener noreferrer'
        target='_blank'
      >
        Say Hello
      </a>
    </section>
  );
};

export default ContactMe;
