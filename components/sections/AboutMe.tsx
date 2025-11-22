import Image from 'next/image';
import styles from 'styles/sections/aboutme.module.scss';

const AboutMe = () => {
  return (
    <section id='about' className={styles.aboutSection}>
      <h1>About Me</h1>
      <div className={styles.inner}>
        <div className={styles.text}>
          <p>Hi, I’m Assumpta 👋</p>
          <p>
            I’m a Product Manager who loves turning ideas into real solutions
            that make life easier for people. My role is all about connecting
            the dots between users, design, and technology. I spend my time
            understanding what people need, working with designers to shape
            great experiences, and collaborating with engineers to bring
            products to life.
          </p>
          <p>
            At the heart of it, I make sure that the products I work on are
            useful, easy to use, and aligned with both user needs and business
            goals. Think of me as the bridge that brings together big ideas and
            the practical steps to make them happen.
          </p>
          <p>
            Here are a few skills I am proud to havee honed over the course of
            my career:
          </p>
          <ul>
            <li>Product development</li>
            <li>Agile methodologies</li>
            <li>Empathy and Tenacity</li>
            <li>Problem solving and Analysis</li>
            <li>Creativity and Organizational skills</li>
            <li>Customer focus/Relations</li>
            <li>Competitive analysis</li>
            <li>Team collaboration</li>
            <li>Scrum</li>
            <li>Product roadmapping</li>
            <li>Market research</li>
            <li>Product strategies</li>
          </ul>
        </div>
        <div className={styles.image}>
          <div className={styles.imageWrapper}>
            {/* <Image
              src='/assumpta-circle.png'
              alt='My Image'
              width={300}
              height={300}
            /> */}
            {/* <Image
              src='/testing-brittanychiang.avif'
              alt='My Image'
              width={300}
              height={300}
            /> */}
            <Image
              src='/assumpta.jpg'
              alt='My Image'
              width={300}
              height={410}
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
