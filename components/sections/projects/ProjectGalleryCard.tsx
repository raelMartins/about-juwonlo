import { Box, Center, Flex, Text } from '@chakra-ui/react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { Project } from 'utils/types';
import styles from 'styles/sections/projects/projectgallerycard.module.scss';

export const ProjectGalleryCard = ({
  project,
  index
}: {
  project: Project;
  index: number;
}) => {
  const project_media_length = project?.media?.length || 1;
  const project_media = [...(project?.media || [])]?.reverse();
  return (
    <Flex
      className={styles.projectGalleryCard}
      minH={`38.2rem`}
      position={`relative`}
      mb={`10rem`}
      gap={`3rem`}
      direction={{ base: `column`, lg: `row` }}
    >
      <Box
        className={styles.projectMedia}
        flex={`1`}
        position={`relative`}
        maxW={{ base: `100%`, lg: `70%` }}
        ml={{ base: `auto`, lg: index % 2 == 1 ? 'auto' : '0rem' }}
        mr={{ base: `auto`, lg: index % 2 == 1 ? '0rem' : 'auto' }}
        w={{ base: `100%`, lg: `70%` }}
        aspectRatio={{ base: `16 / 9` }}
        height={{ base: `30rem`, lg: `auto` }}
      >
        {project_media?.map((el, i) => (
          <Center
            flexDir={`column`}
            key={i}
            className={styles.embed_container}
            style={{
              top: `${(25 * i) / (project_media_length - 1 || 0)}%`,
              left:
                index % 2 == 1
                  ? 'auto'
                  : `${(25 * i) / (project_media_length - 1 || 0)}%`,
              right:
                index % 2 == 1
                  ? `${(25 * i) / (project_media_length - 1 || 0)}%`
                  : 'auto'
            }}
          >
            {el.title && (
              <Text
                className={styles.image_title}
                display={`flex`}
                flexWrap={`wrap`}
                gap={`1rem`}
              >
                {el.title}{' '}
                {el?.demo && (
                  <a href={el?.demo} rel='noopener noreferrer' target='_blank'>
                    <FiExternalLink />
                  </a>
                )}
              </Text>
            )}
            <embed
              src={el?.url}
              style={{
                backgroundColor: '#111111'
              }}
            />
          </Center>
        ))}
      </Box>

      <Box
        as='a'
        href={project.url}
        rel='noopener noreferrer'
        target='_blank'
        className={styles.projectDescription}
        position={{ base: `relative`, lg: `absolute` }}
        left={{ base: `auto`, lg: index % 2 == 1 ? '0rem' : 'auto' }}
        right={{ base: `auto`, lg: index % 2 == 1 ? 'auto' : '0rem' }}
        backgroundColor={{ base: `var(--light-navy)`, lg: `transparent` }}
      >
        <p className={styles.caption}>Featured Project</p>
        <h3 className={styles.projectTitle}>
          <a href={project.url} rel='noopener noreferrer' target='_blank'>
            {project.name}
          </a>
        </h3>
        <div className={styles.description}>
          <p dangerouslySetInnerHTML={{ __html: project.description }}></p>
        </div>
        <ul className={styles.projectTechList}>
          {project.technologies.map((tech, i) => (
            <li key={i}>{tech}</li>
          ))}
        </ul>
        <div className={styles.links}>
          {project.github && (
            <a href={project.github} rel='noopener noreferrer' target='_blank'>
              <FiGithub />
            </a>
          )}
          <a href={project.url} rel='noopener noreferrer' target='_blank'>
            <FiExternalLink />
          </a>
        </div>
      </Box>
    </Flex>
  );
};
