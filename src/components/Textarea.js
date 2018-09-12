import React from 'react'
import styled from 'styled-components'

const FieldWrapper = styled.div`
  margin-top: ${props => props.marginTop || '30px'};
  margin-bottom: ${props => props.marginBottom || '20px'};
  margin-right: ${props => props.marginRight};
  margin-left: ${props => props.marginLeft};
  width: 100%;

  textarea:focus~label, textarea:not(:placeholder-shown)~label {
    font-size: 1em;
    transform: translateY(-30px);
  }

  textarea:focus~.form-bar,
  textarea:not(:placeholder-shown)~.form-bar {
    transform: scaleX(5);
  }

  textarea::placeholder {opacity:0}
  textarea:focus::placeholder {opacity:1}
`

const Input = styled.textarea`
  background: transparent;
  border: none;
  border-bottom: 1px solid #ccc;
  border-radius: 0;
  display: block;
  font-family: Open Sans,sans-serif;
  outline:none;
  min-height: 100px;
  padding: 5px 10px;
  position: relative;
  resize: none;
  transition: all .2s;
  width: 100%;
  z-index: 1;

  &:invalid {
    box-shadow: none;
  }
`

const Label = styled.label`
  color: #835FE2;
  font-size: 1em;
  margin-top: -100px;
  position: absolute;
  transition: .2s;
  z-index: 0;

  @media (max-width: 960px) {
    font-size: 1.4em;
  }
`

const HelperText = styled.span`
  color: #252a34;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Arial, sans-serif;
  font-size: 0.7rem;
  padding-left: 3px;
`

const InputBar = styled.i`
  height: 2px;
  width: 20%;
  background: #835FE2;
  display: block;
  margin: -6px auto 0;
  transform: scaleX(0);
  transition: all .45s;
  position: relative;
  z-index: 2;
`

const FormField = ({
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
    <Input name={name} type={type} placeholder={placeholder} required={required} />
    {!label ? null : <Label for={name}>{label}</Label>}
    <InputBar className="form-bar"/>
    {!helperText ? null : <HelperText>{helperText}</HelperText>}
  </FieldWrapper>
)

export default FormField