import React from 'react'

import CaseLayout from '../../components/CaseLayout'
import Text from '../../components/Text'

import cleanioCover from '../../img/projects/cleanio.svg'

const Cleanio = () => (
  <CaseLayout
    cover={cleanioCover}
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
