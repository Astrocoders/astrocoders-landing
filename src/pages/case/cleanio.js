import React from 'react'
import styled from 'styled-components'

import PageWrapper from '../../components/PageWrapper'
import Title from '../../components/Title'
import Wrapper from '../../components/Wrapper'
import Text from '../../components/Text'

import cleanioCover from '../../img/projects/cleanio.svg'

const ProjectCover = styled.div`
  align-items: center;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 126px;
  padding: 80px 0;
  width: 100%;
`

const ProjectImage = styled.img`
  width: 150px;
`

const Cleanio = () => (
  <PageWrapper isHome={false}>
    <ProjectCover>
      <ProjectImage src={cleanioCover} />
      <Title color="#000" weight="700" align="center">
        Cleanio
      </Title>
    </ProjectCover>
    <Wrapper marginTop="150px" marginBottom="150px" alignItems="">
      <Text>
        We developed the whole backend that runs the service, web applications & mobile APIs. Company was sold to
        Zipnet.
      </Text>
    </Wrapper>
  </PageWrapper>
)

export default Cleanio
