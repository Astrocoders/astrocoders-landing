import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
  align-items: center;
  background-color: #000;
  display: flex;
  margin-top: 100px;
`

const MapWrapper = styled.div`
  height: 400px;
  width: 100%;
`

const Footer = () => (
    <FooterWrapper>
      <MapWrapper id="map"></MapWrapper>
    </FooterWrapper>
  )

export default Footer