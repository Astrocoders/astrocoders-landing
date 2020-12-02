import React from 'react'
import styled from 'styled-components'
import { FormattedMessage, FormattedHTMLMessage } from 'gatsby-plugin-intl'

import PageWrapper from '../components/PageWrapper'
import Title from '../components/Title'
import Text from '../components/Text'
import Wrapper from '../components/Wrapper'
import HGroup from '../components/HGroup'
import TeamMember from '../components/TeamMember'

const ContactWrapper = styled.section`
  padding: 50px 0;
`

const Team = styled(HGroup)`
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`

const JoinUsPage = () => (
  <PageWrapper>
    <ContactWrapper>
      <Wrapper alignItems="center" justifyContent=" center">
        <Title align="center" transform="uppercase" withStripe marginBottom="50px">
          <FormattedMessage id="joinUs" />
        </Title>
        <Text align="left" marginBottom="50px">
          <FormattedHTMLMessage id="joinUsText" />
        </Text>
        <Title align="center" transform="uppercase" withStripe marginBottom="50px">
          <FormattedMessage id="ourTeam" />
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
            github="fakenickels"
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
        </Team>
      </Wrapper>
    </ContactWrapper>
  </PageWrapper>
)

export default JoinUsPage
