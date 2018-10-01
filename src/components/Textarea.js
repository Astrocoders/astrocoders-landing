import React from 'react'
import styled from 'styled-components'

import theme from '../utils/theme'

const FieldWrapper = styled.div`
  margin-bottom: ${props => props.marginBottom || '20px'};
  margin-right: ${props => props.marginRight || '10px'};
  margin-left: ${props => props.marginLeft || '10px'};
  margin-top: ${props => props.marginTop || '20px'};
`

const Input = styled.textarea`
  background: #fff;
  border: none;
  border-radius: 3px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.08);
  color: #252a34;
  display: block;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Arial, sans-serif;
  margin: 10px 0;
  min-height: 100px;
  padding: 15px;
  resize: none;
  transition: all 0.2s;
  width: 100%;
  -webkit-appearance: none;
`

const Label = styled.label`
  color: ${theme.colors.primary};
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Arial, sans-serif;
  font-weight: 400;
`

const HelperText = styled.span`
  color: ${theme.colors.primary};
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Arial, sans-serif;
  font-size: 0.7rem;
  padding-left: 3px;
`

const Textarea = ({
  name,
  type,
  label,
  placeholder,
  required,
  helperText,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
}) => (
  <FieldWrapper marginBottom={marginBottom} marginLeft={marginLeft} marginRight={marginRight} marginTop={marginTop}>
    {!label ? null : <Label for={name}>{label}</Label>}
    <Input name={name} type={type} placeholder={placeholder} required={required} />
    {!helperText ? null : <HelperText>{helperText}</HelperText>}
  </FieldWrapper>
)

export default Textarea
