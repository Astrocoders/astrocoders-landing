import React from 'react'
import styled from 'styled-components'

import Title from './Title'
import VGroup from './VGroup'

const TeamMemberWrapper = styled(VGroup)`
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;

  @media (min-width: 960px) {
    flex: 0 0 33%;
  }
`

const Avatar = styled.img`
  border-radius: 50%;
  height: 150px;
  width: 150px;
`

const Link = styled.a`
  color: inherit;
  text-decoration: none;
`

const TeamMember = ({ name, profilePicture, role, github }) => (
  <TeamMemberWrapper>
    <Avatar src={profilePicture} alt={name} />
    <Title size="1.4em" fontWeight="400" align="left" weight="700" marginTop="30px">
      <Link href={'https://github.com/' + github} target="_blank">
        {name}
      </Link>
    </Title>
    <Title size="1em" weight="300" marginBottom="30px">
      {role}
    </Title>
  </TeamMemberWrapper>
)

export default TeamMember
