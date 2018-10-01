import React from 'react'
import styled from 'styled-components'
import { withIntl } from '../../i18n'

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

const ProjectImagesRow = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const ProjectImage = styled.img`
  max-width: 200px;
`

const Cleanio = () => (
  <PageWrapper isHome={false}>
    <ProjectCover>
      <ProjectImage src={cleanioCover} />
      <Title color="#000" weight="700" align="center">
        Cleanio
      </Title>
    </ProjectCover>
    <Wrapper marginTop="150px" alignItems="">
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id omnis possimus asperiores amet, ea nostrum aut et
        ducimus quia neque quisquam excepturi, dignissimos cum, iure saepe facilis qui voluptas mollitia? Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Id omnis possimus asperiores amet, ea nostrum aut et ducimus quia
        neque quisquam excepturi, dignissimos cum, iure saepe facilis qui voluptas mollitia?
      </Text>
    </Wrapper>
  </PageWrapper>
)

export default withIntl(Cleanio)
