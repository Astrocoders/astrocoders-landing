import React from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'

import { withIntl } from '../i18n'
import Navbar from '../components/Navbar'
import PageWrapper from '../components/PageWrapper'

const CasesPage = () => <PageWrapper isHome={false} />

export default withIntl(CasesPage)
