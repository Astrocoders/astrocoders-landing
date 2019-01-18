import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { navigate } from '@reach/router'

import theme from '../utils/theme'

const CaseCover = styled.div`
  align-items: center;
  background-color: ${props => props.color || '#fff'};
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  overflow: hidden;
  margin: 10px;
  width: 100%;
  height: 300px;
`

const Image = styled.img`
  display: block;
  height: auto;
  width: 160px;
`

const Case = ({ color, company, link, cover }) => (
  <CaseCover onClick={() => navigate(`/case/${link}`)} color={color}>
    <Image src={cover} alt={company} />
  </CaseCover>
)

Case.propTypes = {
  color: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  company: PropTypes.string,
  link: PropTypes.string.isRequired,
}

Case.defaultProps = {
  color: theme.colors.primary,
  company: 'Astrocoders Project',
}

export default Case
