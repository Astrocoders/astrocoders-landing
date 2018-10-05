import React from 'react'

import CaseLayout from '../../components/CaseLayout'
import Text from '../../components/Text'

import liontaxCover from '../../img/projects/lion-tax.png'

const LionTax = () => (
  <CaseLayout
    cover={liontaxCover}
    title="Lion Tax"
    content={
      <>
        <h1>Lion Calendar</h1>
        <Text>
          We developed a calendar system for expatriates to control their time stayed on countries. Allowing a better
          management that mitigate tax/fees/fines due to extent time.
        </Text>
        <hr />
        <h1>Carne Lion</h1>

        <Text>
          State of the art tax calculator. We developed, using the most advanced tools, an easy to use tax calculator
          and bill generator for tax eligible workers.{' '}
        </Text>
        <hr />
        <h1>IRPRONTO</h1>

        <Text>AI system that read files from a variety sources and generate the yearly Brazilian income tax </Text>
      </>
    }
  />
)

export default LionTax
