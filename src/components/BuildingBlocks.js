import React from 'react'

import Wrapper from '../components/Wrapper'
import Title from '../components/Title'
import Text from '../components/Text'

import { FormattedMessage } from 'react-intl'

const BuildingBlocks = () => (
  <Wrapper alignItems="center">
    <Title align="center" marginBottom="30px" transform="uppercase" withStripe>
      Building Blocks
    </Title>
    <Text align="center">
      <FormattedMessage id="buildingBlocksDescription" />
    </Text>
  </Wrapper>
)

export default BuildingBlocks
