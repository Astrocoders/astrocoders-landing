import React from 'react'
import styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types'

import VGroup from './VGroup'

import theme from '../utils/theme'

const gradient = keyframes`
  0% {
    background-position: 0% 50%
  }
  50% {
    background-position: 100% 50%
  }
  100% {
    background-position: 0% 50%
  }
`

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

const NameTitle = styled.h2`
  color: #fff;
  font-family: ${theme.fonts.title};
  font-size: 1.4em;
  font-weight: 300;
  margin-top: 30px;
`

const RoleTitle = styled.h3`
  animation: ${gradient} 10s ease infinite;
  background-image: linear-gradient(-45deg, ${theme.colors.primary}, ${theme.colors.accent});
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: ${theme.fonts.title};
  font-size: 0.8em;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-align: center;
`

const TeamMember = ({ name, color, profilePicture, role, github }) => (
  <TeamMemberWrapper>
    <Avatar src={profilePicture} alt={name} />
    <NameTitle>
      <Link href={'https://github.com/' + github} target="_blank">
        {name}
      </Link>
    </NameTitle>
    <RoleTitle>{role}</RoleTitle>
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
