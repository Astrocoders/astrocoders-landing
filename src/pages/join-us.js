import React from 'react'
import styled from 'styled-components'

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
        <Title align="center" transform="uppercase" withStripe={true} marginBottom="50px">
          join us
        </Title>
        <Text marginBottom="50px">
          Over the years we have developed our own way to deal and help with each other. We like to enable dreams and
          let each team member to be the most they can be. Our environment is relaxed and built over trust.
          <br /> We ❤ people that knows how to search on search-engines and are independent. Every thought, question and
          doubt matter for us and we encorage everyone to participate into core decisions.
          <br />
          <br />
          If you liked what you read above please contact us! We would love to meet you (in-person or online).
        </Text>
        <Title align="center" transform="uppercase" withStripe={true} marginBottom="50px">
          our team
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
          <TeamMember
            profilePicture="https://avatars0.githubusercontent.com/u/6414876?s=460&v=4"
            name="Yuri Jean Fabris"
            // eslint-disable-next-line
            role="Fullstack JavaScript Developer"
            github="yurijean"
          />
          <TeamMember
            profilePicture="https://avatars1.githubusercontent.com/u/11946020?s=460&v=4"
            name="Jefferson Carvalho"
            // eslint-disable-next-line
            role="Fullstack JavaScript Developer"
            github="JeffersonCarvalh0"
          />
        </Team>
      </Wrapper>
    </ContactWrapper>
  </PageWrapper>
)

export default CasesPage
