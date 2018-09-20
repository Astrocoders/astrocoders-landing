import React from 'react'
import styled from 'styled-components'

import HGroup from './HGroup'
import Text from './Text'

import theme from '../utils/theme'
import { Link } from '../i18n'

const ProjectWrapper = styled(HGroup)`
  color: #fff;
  border-bottom: 1px solid #565656;
  padding: 70px 0 50px;
  width: 100%;

  a {
    text-decoration: none;
  }
  @media (max-width: 960px) {
    flex-direction: column;
  }
`
const ProjectNumber = styled.h3`
  font-size: 3rem;
`

const ProjectTitle = styled.h3`
  color: ${theme.colors.primary};
  margin: 0 50px;
  font-size: 3em;
  font-weight: 300;
  text-transform: uppercase;
`

const ProjectOpenSource = ({ number, title, description, link }) => (
  <ProjectWrapper>
    <ProjectNumber>{number}</ProjectNumber>
    <Link to={link}>
      <ProjectTitle>{title}</ProjectTitle>
    </Link>
    <Text>{description}</Text>
  </ProjectWrapper>
)

export default ProjectOpenSource
