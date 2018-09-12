import styled from 'styled-components'

export default styled.span`
  color: ${props => props.color || '#fff'};
  font-family: Roboto;
  font-style: normal;
  font-weight: ${props => props.weight || '400'};
  line-height: 150%;
  margin-top: ${props => props.marginTop || props.margin || 0};
  margin-bottom: ${props => props.marginBottom || props.margin || 0};
  margin-right: ${props => props.marginRight || props.margin || 0};
  margin-left: ${props => props.marginLeft || props.margin || 0};
  font-size: ${props => props.fontSize || '1.2em'};
  text-align: ${props => props.align};

  em {
    color: #835FE2;
    font-style: normal;
  }
`