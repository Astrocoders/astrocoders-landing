import React from 'react'
import styled from 'styled-components'

import { withIntl } from '../i18n'
import PageWrapper from '../components/PageWrapper'
import Title from '../components/Title'
import Text from '../components/Text'
import Wrapper from '../components/Wrapper'
import HGroup from '../components/HGroup'
import TeamMember from '../components/TeamMember'

import galaxyBg from '../img/galaxy.jpg'

const ContactWrapper = styled.section`
  padding: 50px 0;
`

const Team = styled(HGroup)`
  background-image: url(${galaxyBg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`

const CasesPage = () => (
  <PageWrapper isHome={false}>
    <ContactWrapper>
      <Wrapper alignItems="center" justifyContent=" center">
        <Title align="center" marginBottom="100px">
          Join Us
        </Title>
        <Text marginBottom="50px">
          We have a young team that is part of the business. This brings motivation and focus in each project, making it
          part of a collection effort, as a team, to exceed the next goal of excellence.
        </Text>
        <Title align="center" marginBottom="100px">
          Our Team
        </Title>
        <Team>
          <TeamMember
            profilePicture="https://avatars0.githubusercontent.com/u/4806269?s=460&v=4"
            name="Guilherme Decampo"
            // eslint-disable-next-line
            role="Head of Business Development"
            github="guilhermedecampo"
          />
          <TeamMember
            profilePicture="https://avatars3.githubusercontent.com/u/1283200?s=460&v=4"
            name="Gabriel Rubens"
            // eslint-disable-next-line
            role="Head of Research and Development"
            github="grsabreu"
          />
          <TeamMember
            profilePicture="https://avatars3.githubusercontent.com/u/16995184?s=460&v=4"
            name="George Lima"
            // eslint-disable-next-line
            role="Fullstack JavaScript Developer"
            github="georgelima"
          />
          <TeamMember
            profilePicture="https://avatars0.githubusercontent.com/u/17956325?s=400&v=4"
            name="Medson Oliveira"
            // eslint-disable-next-line
            role="Fullstack JavaScript Developer"
            github="medson10"
          />
          <TeamMember
            profilePicture="https://avatars0.githubusercontent.com/u/8146889?s=460&v=4"
            name="Eliabe Junior"
            // eslint-disable-next-line
            role="Fullstack JavaScript Developer"
            github="eliabejr"
          />
        </Team>
      </Wrapper>
    </ContactWrapper>
  </PageWrapper>
)

export default withIntl(CasesPage)
