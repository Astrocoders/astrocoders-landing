import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
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

const TeamMember = ({ name, color, profilePicture, role, github }) => (
  <TeamMemberWrapper>
    <Avatar src={profilePicture} alt={name} />
    <Title color={color} size="1.4em" fontWeight="400" align="left" weight="700" marginTop="30px">
      <Link href={'https://github.com/' + github} target="_blank">
        {name}
      </Link>
    </Title>
    <Title color={color} size="1em" weight="300" marginBottom="30px">
      {role}
    </Title>
  </TeamMemberWrapper>
)

TeamMember.defaultProps = {
  name: '',
  color: '#fff',
  profilePicture: 'https://i1.wp.com/grueneroadpharmacy.com/wp-content/uploads/2017/02/user-placeholder-1.jpg?ssl=1)',
  role: '',
  github: '',
}

TeamMember.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  profilePicture: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
}

export default TeamMember
