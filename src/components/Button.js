import React from 'react'
import styled from 'styled-components'

const ButtonWrapper = styled.button`
  align-self: ${props => props.alignSelf || 'inherit'};
  background-color: rgba(105, 95, 226, .47);
  border-radius: 30px;
  border: none;
  color: #fff;
  cursor: pointer;
  font-family: Ubuntu;
  font-weight: normal;
  outline: none;
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

const Button = ({ link, theme, raised, alignSelf, children }) => (
  <ButtonWrapper alignSelf={alignSelf} theme={theme} raised={raised}>
    {link ? <a href={link}>{children}</a> : children}
  </ButtonWrapper>
)

export default Button