/** @jsx jsx */
import { jsx, Box, Flex } from 'theme-ui'
import { Image } from '../images'
import ParsedContent from '../../utils/ParsedContent'

const ProjectItem = ({ project }) => {
  const {
    title,
    projectFields: { projectUrl, description },
    featuredImage,
    projectTags,
    id,
  } = project

  return (
    <Box className="project" key={id}>
      <Flex className="projectWrap">
        <a href={projectUrl} target="_blank" rel="noopener noreferrer">
          <Flex className="image">
            <Image img={featuredImage} />
          </Flex>
        </a>

        <h4 className="projectTitle">
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: 'inherit' }}
          >
            {title}
          </a>
        </h4>
        <Flex className="tags">
          {projectTags?.nodes?.map((term) => (
            <span className="project-tag" key={term.id}>
              {term.name}
            </span>
          ))}
        </Flex>
        {description && (
          <Flex className="description">
            <ParsedContent content={description} />
          </Flex>
        )}
        <Flex className="button">
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ variant: 'buttons.primary.small' }}
          >
            Visit Live Demo
          </a>
        </Flex>
      </Flex>
    </Box>
  )
}

export default ProjectItem
