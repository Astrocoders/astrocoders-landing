import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 20px;
  min-height: 230px;
  width: 100%;
`

const Item = styled.img`
  border-radius: 10px;
  box-shadow: 1px 5px 20px rgba(0, 0, 0, 0.25);
  max-width: 270px;
  position: absolute;
  transition: all 0.2s;
  transform: translateY(${p => 40 * p.index + 'px'}) translateX(${p => 40 * p.index + 'px'});
  z-index: ${p => p.zIndex};

  @media (max-width: 960px) {
    max-width: 250px;
  }
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
