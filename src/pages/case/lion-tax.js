import React from 'react'
import styled from 'styled-components'

import CaseLayout from '../../components/CaseLayout'
import Text from '../../components/Text'

import liontaxCover from '../../img/projects/lion-tax.png'

const Link = styled.a`
  color: ${props => props.color};
  text-decoration: none;
`

const LionTax = () => (
  <CaseLayout
    logo={liontaxCover}
    title="Lion Tax"
    color="#FF8525"
    content={
      <>
        <h3>Lion Calendar</h3>
        <Text>
          We developed a calendar system for expatriates to control their time stayed on countries. Allowing a better
          management that mitigate tax/fees/fines due to extent time.
          <br />
          <Link color="#FF8525" target="_blank" href="https://lion.tax/servicos/lion-calendar/">
            See it alive
          </Link>
        </Text>
        <hr />
        <h3>Carne Lion</h3>

        <Text>
          State of the art tax calculator. We developed, using the most advanced tools, an easy to use tax calculator
          and bill generator for tax eligible workers.
          <br />
          <Link color="#FF8525" target="_blank" href="https://lion.tax/servicos/carne-lion/">
            See it alive
          </Link>
        </Text>
        <hr />
        <h3>IRPRONTO</h3>

        <Text>
          AI system that read files from a variety sources and generate the yearly Brazilian income tax.
          <br />
          <Link color="#FF8525" target="_blank" href="https://lion.tax/">
            See it alive
          </Link>
        </Text>
      </>
    }
  />
)

export default LionTax
