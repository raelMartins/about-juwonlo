import { useState, useEffect } from 'react';
import styles from 'styles/sections/employmenthistory.module.scss';
import EmploymentDetails from './EmploymentDetails';

const EmploymentHistory = () => {
  const [tab, setTab] = useState('heritengine');
  const [index, setIndex] = useState(0);
  const [companies] = useState([
    'heritengine',
    'trustesse',
    'daba',
    'betechified',
    'cwito'
  ]);

  const changeTab = (selected: string) => {
    setTab(selected);
    const ind = companies.indexOf(selected);
    document.documentElement.setAttribute('style', `--tab-number: ${ind}`);
    const oldsection = document.getElementById(`${tab}-tasks`);
    const newsection = document.getElementById(`${selected}-tasks`);

    console.log(oldsection, newsection);

    if (tab === selected) {
      return;
    }

    oldsection ? (oldsection.style.opacity = '0') : null;
    setTimeout(() => {
      oldsection ? (oldsection.style.display = `none`) : null;
      newsection ? (newsection.style.display = `block`) : null;
      setTimeout(() => {
        newsection ? (newsection.style.opacity = '1') : null;
      }, 10);
    }, 150);

    setIndex(ind);
  };
  useEffect(() => {
    const section = document.getElementById(`${tab}-tasks`);
    section ? (section.style.display = `block`) : null;
    setTimeout(() => {
      section ? (section.style.opacity = '1') : null;
    }, 10);
  }, []);

  const activeTab = {
    color: `var(--green)`,
    backgroundColor: `var(--light-navy)}`
  };

  return (
    <section id='jobs' className={styles.employmentHistorySection}>
      <h1>Where I’ve Worked</h1>
      <div className={styles.innerContent}>
        <div className={styles.theWhere}>
          <div className={styles.employmentList}>
            <span
              style={index === 0 ? activeTab : {}}
              onClick={() => changeTab('heritengine')}
            >
              Heritengine
            </span>
            <span
              style={index === 1 ? activeTab : {}}
              onClick={() => changeTab('trustesse')}
            >
              Trustesse
            </span>
            <span
              style={index === 2 ? activeTab : {}}
              onClick={() => changeTab('daba')}
            >
              Daba
            </span>
            <span
              style={index === 3 ? activeTab : {}}
              onClick={() => changeTab('betechified')}
            >
              Betechified
            </span>
            <span
              style={index === 4 ? activeTab : {}}
              onClick={() => changeTab('cwito')}
            >
              CWITO
            </span>
            <div className={`${styles.indicator}`}></div>
          </div>
        </div>
        <div className={styles.theWhat}>
          <EmploymentDetails
            tasks={[
              'Spearheaded the development of Heritengine, achieving organizational goals. a designed focused platform aimed at empowering creatives with modern tools and resources',
              'Defining the Product Vision, Roadmap and feature prioritization through collaboration and research.'
            ]}
            title='Product Manager'
            company='Heritengine'
            timePeriod='July 2025 - Present'
            url='https://heritengine.com'
          />
          <EmploymentDetails
            tasks={[
              'Effective collaboration with Cross-Functional teams',
              'Sprint planning and execution.',
              'Implementing product vision, goals and priorities across the development cycle.',
              'Manage internal communication, ensuring the team is aligned.'
            ]}
            title='Associate Product Manager'
            company='Trustesse'
            timePeriod='June 2025 - Present'
            url='https://trustesse.com'
          />

          <EmploymentDetails
            tasks={[
              'Improve course availability, platform usability and learner retention.',
              'Effective collaboration with engineering, design and operations teams to deliver impactful, data driven product experience',
              'Review figma designs to ensure better user experience and functionality'
            ]}
            title='Associate Product Manager'
            company='Daba'
            timePeriod='Feb 2025 - May 2025'
            url='https://www.daba.school/'
          />
          <EmploymentDetails
            tasks={[
              `Develop and test new features/products to ensure they meet the customers' needs and provide a great user experience.`,
              'Conduct user interviews, surveys and questionnaires, market research, and competitive analysis to identify user pain points, needs, trends, and opportunities for product innovation.',
              'Develop product requirements, ensuring features meet user needs and business objectives.',
              'Develop use cases, map out user experiences, and highlight challenges to identify pain points in the user journey.'
            ]}
            title='Product Manager Intern'
            company='Betechified'
            timePeriod='June 2024 - Aug 2024 '
            url='https://betechified.com/'
          />
          <EmploymentDetails
            tasks={[
              'Organize Scrum activities; Sprint planning, weekly stand-ups, sprint reviews and retrospectives',
              'Identifying areas for continous improvement to enhance productivity and encourage best practices for long term success.'
            ]}
            title='Scrum Master'
            company='CWITO'
            timePeriod='Feb 2025 - May 2025'
            url='https://cwito.com/'
          />
        </div>
      </div>
    </section>
  );
};

export default EmploymentHistory;
