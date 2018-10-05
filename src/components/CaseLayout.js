import React from 'react'
import styled from 'styled-components'

import PageWrapper from './PageWrapper'
import Title from './Title'
import Wrapper from './Wrapper'

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

const CaseLayout = ({ bgColor, cover, title, titleColor, content }) => (
  <PageWrapper isHome={false}>
    <ProjectCover bgColor={bgColor}>
      <ProjectImage src={cover} />
      <Title color={titleColor || '#000'} weight="700" align="center">
        {title}
      </Title>
    </ProjectCover>
    <Wrapper marginTop="150px" marginBottom="150px" alignItems="">
      {content}
    </Wrapper>
  </PageWrapper>
)

export default CaseLayout
