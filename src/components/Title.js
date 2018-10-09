import styled from 'styled-components'
import PropTypes from 'prop-types'
import theme from '../utils/theme'

const Title = styled.h2`
  color: ${props => props.color || '#fff'};
  font-family: ${theme.fonts.title};
  font-style: normal;
  font-weight: ${props => props.weight};
  line-height: normal;
  margin-top: ${props => props.marginTop || props.margin || 0};
  margin-bottom: ${props => props.marginBottom || props.margin || '10px'};
  margin-right: ${props => props.marginRight || props.margin || 0};
  margin-left: ${props => props.marginLeft || props.margin || 0};
  font-size: ${props => props.size};
  text-align: ${props => (props.withStripe ? 'center' : 'inherit')};
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

Title.defaultProps = {
  align: 'inherit',
  color: '#fff',
  size: '2em',
  weight: '400',
  withStripe: false,
  marginBottom: 0,
  marginLeft: 0,
  marginRight: 0,
  marginTop: 0,
}

Title.propTypes = {
  align: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  weight: PropTypes.string,
  withStripe: PropTypes.bool,
  marginBottom: PropTypes.string,
  marginLeft: PropTypes.string,
  marginRight: PropTypes.string,
  marginTop: PropTypes.string,
}

export default Title
