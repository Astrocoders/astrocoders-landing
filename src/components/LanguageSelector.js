import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Select = styled.select`
  background: transparent;
  border-color: transparent;
  border-radius: 0;
  color: ${props => props.color};
  font-family: Roboto;
  padding: 10px !important;
  margin-left: 30px;
`

class LanguageSelector extends Component {
  static contextTypes = {
    language: PropTypes.object,
    color: PropTypes.string,
  }

  state = {
    value: '',
    color: '',
  }

  componentDidMount() {
    const { language } = this.context

    this.setState({
      value: language.locale || language.detected,
    })
  }

  handleChange = event => {
    const { language } = this.context
    const { originalPath } = language
    const { value } = event.target

    if (value === this.state.value) {
      return
    }

    this.setState({ value }, () => {
      localStorage.setItem('language', value)
      window.location.href = `/${value}${originalPath}`
    })
  }

  render() {
    const { language } = this.context
    const { languages } = language
    const { value } = this.state

    if (!value) {
      return null
    }

    return (
      <Select color={this.props.color} value={value} onChange={this.handleChange}>
        {languages.map(({ value, text }) => (
          <option key={value} value={value}>
            {text}
          </option>
        ))}
      </Select>
    )
  }
}

export default LanguageSelector
