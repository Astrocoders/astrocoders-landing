import React from 'react'
import { render, cleanup } from 'react-testing-library'

import AboutUs from './AboutUs'

afterEach(cleanup)

describe('AboutUs', () => {
  it('should show about us section', () => {
    const { queryByTestId } = render(<AboutUs />)

    expect(queryByTestId('AboutUsSection')).toBeInTheDocument()
  })
})
