import React from 'react'

import CaseLayout from '../../components/CaseLayout'
import Text from '../../components/Text'

import cleanioCover from '../../img/projects/cleanio.png'

const Cleanio = () => (
  <CaseLayout
    logo={cleanioCover}
    color="#294A70"
    title="Cleanio"
    content={
      <Text>
        We developed the whole backend that runs the service, web applications & mobile APIs. Company was sold to
        Zipnet.
      </Text>
    }
  />
)

export default Cleanio
