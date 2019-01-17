import styled from 'styled-components'
import { Link as L } from '@reach/router'
import PropTypes from 'prop-types'
import theme from '../utils/theme'

const Link = styled(L)`
  color: ${props => props.color};
  cursor: pointer;
  font-family: ${props => props.fontFamily || theme.fonts.text};
  font-weight: ${props => props.fontWeight || '400'};
  text-decoration: none;
`

Link.propTypes = {
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  fontWeight: PropTypes.string,
  to: PropTypes.string.isRequired,
}

Link.defaultProps = {
  color: theme.colors.primary,
  fontFamily: theme.fonts.text,
  fontWeight: '400',
  to: '',
}

export default Link
