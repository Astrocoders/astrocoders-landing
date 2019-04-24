import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import theme from '../utils/theme'

const Title = styled.h2`
  color: ${props => props.color || '#fff'};
  font-family: ${theme.fonts.title};
  font-style: normal;
  font-weight: ${props => props.weight};
  line-height: normal;
  letter-spacing: 3px;
  margin-top: ${props => props.marginTop || props.margin || 0};
  margin-bottom: ${props => props.marginBottom || props.margin || '10px'};
  margin-right: ${props => props.marginRight || props.margin || 0};
  margin-left: ${props => props.marginLeft || props.margin || 0};
  font-size: ${props => props.size};
  text-align: ${props => (props.withStripe ? 'center' : 'inherit')};
  text-transform: ${props => props.transform || 'uppercase'};
  position: relative;
  z-index: 3;

  em {
    color: ${theme.colors.primary};
    font-style: normal;
  }

  &:before {
    color: #000;
    content: attr(data-text);
    display: block;
    margin-left: -4px;
    margin-top: 4px;
    z-index: -1;
    position: absolute;
  }
  &:after {
    background-image: -webkit-linear-gradient(-45deg, ${theme.colors.primary} 1%, ${theme.colors.accent} 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    content: attr(data-text);
    display: block;
    margin-left: -6px;
    margin-top: -38px;
    z-index: -2;
    position: absolute;
  }
`

const Stripe = styled.div`
  display: block;
  background: ${theme.colors.accent};
  height: 2px;
  margin-top: ${props => props.marginTop || props.margin || '10px'};
  margin-bottom: ${props => props.marginBottom || props.margin || '50px'};
  margin-right: ${props => props.marginRight || props.margin || 'auto'};
  margin-left: ${props => props.marginLeft || props.margin || 'auto'};
  width: 50px;
`

const TitleWrapper = ({
  value,
  align,
  color,
  size,
  weight,
  withStripe,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
}) => (
  <>
    <Title data-text={value} align={align} color={color} size={size} weight={weight}>
      {value}
    </Title>

    {withStripe && (
      <Stripe marginBottom={marginBottom} marginLeft={marginLeft} marginRight={marginRight} marginTop={marginTop} />
    )}
  </>
)

Title.defaultProps = {
  align: 'inherit',
  value: '',
  color: '#fff',
  size: '2.4em',
  weight: '700',
  withStripe: false,
  marginBottom: 0,
  marginLeft: 0,
  marginRight: 0,
  marginTop: 0,
}

Title.propTypes = {
  align: PropTypes.string,
  value: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  weight: PropTypes.string,
  withStripe: PropTypes.bool,
  marginBottom: PropTypes.string,
  marginLeft: PropTypes.string,
  marginRight: PropTypes.string,
  marginTop: PropTypes.string,
}

export default TitleWrapper
