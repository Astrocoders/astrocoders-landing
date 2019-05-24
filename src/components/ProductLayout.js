import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import TextLoop from 'react-text-loop'

import PageWrapper from './PageWrapper'
import Title from './Title'
import Text from './Text'
import Wrapper from './Wrapper'

import theme from '../utils/theme'

import galaxy from '../img/fbb-bg.jpg'

const ProjectCover = styled.div`
  align-items: center;
  background-attachment: fixed;
  background-blend-mode: hard-light;
  background-color: #000;
  background-size: cover;
  background-image: url(${galaxy});
  background-repeat: no-repeat;
  background-position: left center;
  background-origin: content-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px 0;
  width: 100%;
`

const ProjectImage = styled.img`
  width: 80px;
  margin-bottom: 30px;
`

const ProjectTitle = styled(Title)`
  color: #fff;
  font-size: 2.2em;
  text-transform: uppercase;
`

const ProjectSubtitle = styled(Text)`
  color: rgba(255, 255, 255, 0.8);
  font-weight: 300;
  font-size: 0.9em;
`

const ProjectContent = styled(Wrapper)`
  margin-top: 30px;
  margin-bottom: 30px;

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
  margin: 100px auto;

  span {
    padding-left: 10px;
    padding-right: 10px;
    color: ${theme.colors.primary};
    font-weight: 700;
  }
`

const ProductLayout = ({ color, logo, title, subtitle, content }) => (
  <PageWrapper isHome={false}>
    <ProjectCover bgColor={color}>
      <ProjectImage src={logo} />
      <ProjectTitle color={color}>{title}</ProjectTitle>
      <ProjectSubtitle color={color}>{subtitle}</ProjectSubtitle>
    </ProjectCover>
    <ProjectContent color={color}>
      {content}
      <CTA>
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

ProductLayout.propTypes = {
  content: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
}

ProductLayout.defaultProps = {
  color: theme.colors.primary,
  logo: '',
}

export default ProductLayout
