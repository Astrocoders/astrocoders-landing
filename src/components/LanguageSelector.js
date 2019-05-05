import React from 'react'
import PropTypes from 'prop-types'
import { IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl'
import styled from 'styled-components'

import theme from '../utils/theme'

const Wrapper = styled.div`
  @media (max-width: 960px) {
    display: ${p => (p.hideOnMobile ? 'none' : 'block')};
    margin: 15px;
  }
`

const LanguageLink = styled.a`
  color: ${p => p.color};
  cursor: pointer;
  text-transform: uppercase;

  &:not(:last-child) {
    &:after {
      content: '/';
      color: rgba(255, 255, 255, 0.37);
      font-size: 10px;
      margin: 10px;
      vertical-align: middle;
    }
  }
`

const LanguageSelector = ({ hideOnMobile }) => {
  return (
    <Wrapper hideOnMobile={hideOnMobile}>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            <LanguageLink
              key={language}
              onClick={() => changeLocale(language)}
              color={currentLocale === language ? theme.colors.accent : theme.colors.primary}
            >
              {language}
            </LanguageLink>
          ))
        }
      </IntlContextConsumer>
    </Wrapper>
  )
}

LanguageSelector.defaultProps = {
  hideOnMobile: false,
}

LanguageSelector.propTypes = {
  hideOnMobile: PropTypes.bool,
}

export default LanguageSelector
