import React from 'react'
import styled from 'styled-components'
import { withIntl } from '../../i18n'

import PageWrapper from '../../components/PageWrapper'
import Title from '../../components/Title'
import Wrapper from '../../components/Wrapper'
import Text from '../../components/Text'

import zuraCover from '../../img/projects/zura.svg'

const ProjectCover = styled.div`
  align-items: center;
  background-color: #70ccac;
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
      <ProjectImage src={zuraCover} />
      <Title weight="700" align="center">
        Lion Tax
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
