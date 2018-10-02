/* eslint-disable global-require */

const localeData = [...require('react-intl/locale-data/en'), ...require('react-intl/locale-data/br')]

module.exports = {
  localeData,
  // just English for now
  languages: [{ value: 'en', text: 'English' }],
}
