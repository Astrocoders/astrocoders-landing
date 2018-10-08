import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ButtonWrapper = styled.button`
  align-self: ${props => props.alignSelf || 'inherit'};
  background-color: ${props => (props.raised ? 'transparent' : props.theme)};
  border-radius: 30px;
  border: ${props => (props.raised ? '2px solid' : 'none')};
  border-color: ${props => (props.raised ? props.theme : 'transparent')};
  color: ${props => (props.raised ? props.theme : '#fff')};
  cursor: pointer;
  font-family: Ubuntu;
  font-weight: ${props => (props.raised ? '700' : 'normal')};
  outline: none;
  margin-bottom: ${props => props.marginBottom};
  margin-right: ${props => props.marginRight};
  margin-left: ${props => props.marginLeft};
  margin-top: ${props => props.marginTop};
  padding: 15px 25px;
  touch-action: manipulation;
  text-align: center;
  transition: all 0.17s ease-in-out;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  a {
    color: inherit;
    font-size: 18px;
    text-decoration: none;
  }
`

const Button = ({ link, theme, raised, alignSelf, children, marginBottom, marginLeft, marginRight, marginTop }) => (
  <ButtonWrapper
    alignSelf={alignSelf}
    theme={theme}
    raised={raised}
    marginBottom={marginBottom}
    marginLeft={marginLeft}
    marginRight={marginRight}
    marginTop={marginTop}
  >
    {link ? <a href={link}>{children}</a> : children}
  </ButtonWrapper>
)

Button.defaultProps = {
  alignSelf: 'inherit',
  theme: 'rgba(105, 95, 226, 0.47)',
  raised: false,
  marginBottom: 0,
  marginLeft: 0,
  marginRight: 0,
  marginTop: 0,
}

Button.propTypes = {
  alignSelf: PropTypes.string,
  theme: PropTypes.string.isRequired,
  raised: PropTypes.string,
  marginBottom: PropTypes.string,
  marginLeft: PropTypes.string,
  marginRight: PropTypes.string,
  marginTop: PropTypes.string,
}

export default Button
