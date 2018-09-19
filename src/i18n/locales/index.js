/* eslint-disable global-require */

const localeData = [...require('react-intl/locale-data/en'), ...require('react-intl/locale-data/br')]

module.exports = {
  localeData,
  languages: [{ value: 'en', text: 'English' }, { value: 'br', text: 'Português (Brasil)' }],
}
