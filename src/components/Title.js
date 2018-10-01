import styled from 'styled-components'

import theme from '../utils/theme'

export default styled.h2`
  color: ${props => props.color || '#fff'};
  font-family: Ubuntu;
  font-style: normal;
  font-weight: ${props => props.weight || '700'};
  line-height: normal;
  margin-top: ${props => props.marginTop || props.margin || 0};
  margin-bottom: ${props => props.marginBottom || props.margin || '10px'};
  margin-right: ${props => props.marginRight || props.margin || 0};
  margin-left: ${props => props.marginLeft || props.margin || 0};
  font-size: ${props => props.size || '2em'};
  text-align: ${props => props.align || 'inherit'};
  text-transform: ${props => props.transform || 'none'};

  em {
    color: ${theme.colors.primary};
    font-style: normal;
  }

  &:after {
    content: '';
    display: ${props => (props.withStripe ? 'block' : 'none') || 'none'};
    background: ${theme.colors.primary};
    height: 4px;
    margin: 10px auto;
    width: 30px;
  }
`
