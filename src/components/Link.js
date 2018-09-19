import styled from 'styled-components'
import { Link } from '../i18n'
import theme from '../utils/theme'

export default styled(Link)`
  color: ${props => props.color || theme.colors.primary};
  cursor: pointer;
  font-weight: ${props => props.fontWeight || '400'};
  font-family: ${props => props.fontFamily || theme.fonts.text};
  text-decoration: none;
`
