import 'react-testing-library/cleanup-after-each'
import 'jest-dom/extend-expect'
import 'jest-localstorage-mock'

import fetchMock from 'jest-fetch-mock'

global.fetch = fetchMock
