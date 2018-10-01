import React from 'react'
import styled from 'styled-components'

const ButtonWrapper = styled.button`
  align-self: ${props => props.alignSelf || 'inherit'};
  background-color: rgba(105, 95, 226, 0.47);
  border-radius: 30px;
  border: none;
  color: #fff;
  cursor: pointer;
  font-family: Ubuntu;
  font-weight: normal;
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

export default Button
