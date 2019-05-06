import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import TextLoop from 'react-text-loop'

import PageWrapper from './PageWrapper'
import Title from './Title'
import Wrapper from './Wrapper'

import theme from '../utils/theme'

const ProjectCover = styled.div`
  align-items: center;
  background-color: ${props => props.bgColor || '#fff'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 80px 0;
  width: 100%;
`

const ProjectImage = styled.img`
  width: 150px;
`

const ProjectTitle = styled(Title)`
  background-color: #fff;
  color: ${props => props.color};
  font-family: ${theme.fonts.caseTitle};
  font-size: 3em;
  padding: 20px;
  margin-bottom: -120px;
`

const ProjectContent = styled(Wrapper)`
  h3 {
    &:after {
      content: '';
      display: block;
      background: ${props => props.color};
      height: 4px;
      margin-top: 10px;
      width: 30px;
    }
  }
`

const CTA = styled(Title)`
  font-family: ${theme.fonts.caseTitle};

  span {
    padding-left: 10px;
    padding-right: 10px;
    color: ${theme.colors.primary};
    font-weight: 700;
  }
`

const CaseLayout = ({ color, logo, title, content }) => (
  <PageWrapper isHome={false}>
    <ProjectCover bgColor={color}>
      <ProjectImage src={logo} />
      <ProjectTitle color={color}>{title}</ProjectTitle>
    </ProjectCover>
    <ProjectContent marginTop="150px" color={color}>
      {content}
      <CTA marginTop="100px">
        Ready to
        <TextLoop interval={2000} mask>
          <span>start</span>
          <span>continue</span>
          <span>improve</span>
        </TextLoop>
        your business? Contact us!
      </CTA>
    </ProjectContent>
  </PageWrapper>
)

CaseLayout.propTypes = {
  content: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

CaseLayout.defaultProps = {
  color: theme.colors.primary,
  logo: '',
  title: '',
}

export default CaseLayout
