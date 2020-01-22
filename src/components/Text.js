import styled from 'styled-components'
import theme from '../utils/theme'

export default styled.span`
  color: ${theme.colors.primary};
  font-family: Roboto;
  font-style: normal;
  font-weight: ${props => props.weight || '300'};
  line-height: 1.8em;
  margin-top: ${props => props.marginTop || props.margin || 0};
  margin-bottom: ${props => props.marginBottom || props.margin || 0};
  margin-right: ${props => props.marginRight || props.margin || 0};
  margin-left: ${props => props.marginLeft || props.margin || 0};
  font-size: ${props => props.size || '1.2em'};
  text-align: ${props => props.align};

  em {
    color: #835fe2;
    font-style: normal;
  }

  @media (min-width: 960px) {
    line-height: 2em;
    word-spacing: 0.15em;
  }
`
