import React from 'react'
import styled from 'styled-components'

import CaseLayout from '../../components/CaseLayout'
import Text from '../../components/Text'

import zuraCover from '../../img/projects/zura.svg'

const OList = styled.ol`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  line-height: 1.8em;
`

const ZuraHealth = () => (
  <CaseLayout
    bgColor="#70ccac"
    cover={zuraCover}
    title="Zura Health"
    titleColor="#fff"
    content={
      <>
        <Text>We developed a multi-program education system with complete features</Text>
        <OList>
          <li>content drip for phases/lessons</li>
          <li>users / coaches management</li>
          <li>payment management for users and company</li>
          <li>video calls meetings management</li>
          <li>analytics widgets managment</li>
          <li>news feed</li>
          <li>extra curriculum assets management</li>
          <li>Community feature</li>
          <li>Messaging 1:1</li>
          <li>Notifications</li>
          <li>Discounts</li>
        </OList>
      </>
    }
  />
)

export default ZuraHealth
