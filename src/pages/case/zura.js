import React from 'react'
import styled from 'styled-components'

import CaseLayout from '../../components/CaseLayout'
import Text from '../../components/Text'

import zuraCover from '../../img/projects/zura.png'

const OList = styled.ol`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  line-height: 1.8em;
`

const ZuraHealth = () => (
  <CaseLayout color="#70ccac" logo={zuraCover} title="Zura Health" content={<Text margin="auto">Zura 🚀 </Text>} />
)

export default ZuraHealth
