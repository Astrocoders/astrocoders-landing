import styled from 'styled-components'

export default styled.h2`
  color: ${props => props.color || '#fff'};
  font-family: Ubuntu;
  font-style: normal;
  font-weight: ${props => props.fontWeight || '400'};
  line-height: normal;
  margin-top: ${props => props.marginTop || props.margin || 0};
  margin-bottom: ${props => props.marginBottom || props.margin || '10px'};
  margin-right: ${props => props.marginRight || props.margin || 0};
  margin-left: ${props => props.marginLeft || props.margin || 0};
  font-size: ${props => props.fontSize || '2em'};
  text-align: ${props => props.textAlign || 'inherit'};
  text-transform: ${props => props.textTransform || 'none'};

  em {
    color: #835FE2;
    font-style: normal;
  }
`