import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  min-height: 230px;
  margin-bottom: 20px;
`

const Item = styled.img`
  position: absolute;
  transform: translateY(${p => 40 * p.index + 'px'}) translateX(${p => 40 * p.index + 'px'});
  transition: all 0.2s;
  z-index: ${p => p.zIndex};
  max-width: 270px;
`

const BuildingBlockItem = ({ items }) => {
  const [state, setState] = useState(items)

  return (
    <Container>
      {items.map((src, index) => (
        <Item
          src={src}
          index={state.indexOf(src)}
          zIndex={Math.abs(state.indexOf(src) - 3)}
          onClick={() => setState([src, ...state.filter(c => c !== src)])}
        />
      ))}
    </Container>
  )
}

export default BuildingBlockItem
