import React from 'react'
import styled from 'styled-components'
import HGroup from './HGroup'
import Wrapper from './Wrapper'

import Github from 'react-icons/lib/io/social-github'
import Instagram from 'react-icons/lib/io/social-instagram-outline'
import Twitter from 'react-icons/lib/io/social-twitter'
import VGroup from './VGroup'
import Map from './Map'

const FooterWrapper = styled.footer`
  justify-content: center;
  background-color: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
`

const SocialLinks = styled(HGroup)`
  color: #fff;
  font-size: 24px;
  justify-content: space-between;
  width: 200px;

  a {
    color: inherit;

    &:hover {
      color: #835fe2;
    }
  }

  @media (max-width: 960px) {
    width: 100%;
  }
`

const Copyrights = styled(VGroup)`
  align-items: center;
  justify-content: center;
  width: calc(80% - 200px);

  img {
    margin-top: 20px;
    width: 24px;
  }

  @media (max-width: 960px) {
    margin-top: 30px;
    text-align: center;
    width: 100%;
  }
`

const center = { lat: -23.4989234, lng: -47.4748664 }
const mapProps = {
  options: {
    zoom: 15,
    center,
    styles: [
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [
          {
            color: '#193341',
          },
        ],
      },
      {
        featureType: 'landscape',
        elementType: 'geometry',
        stylers: [
          {
            color: '#2c5a71',
          },
        ],
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [
          {
            color: '#29768a',
          },
          {
            lightness: -37,
          },
        ],
      },
      {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [
          {
            color: '#406d80',
          },
        ],
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [
          {
            color: '#406d80',
          },
        ],
      },
      {
        elementType: 'labels.text.stroke',
        stylers: [
          {
            visibility: 'on',
          },
          {
            color: '#3e606f',
          },
          {
            weight: 2,
          },
          {
            gamma: 0.84,
          },
        ],
      },
      {
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#ffffff',
          },
        ],
      },
      {
        featureType: 'administrative',
        elementType: 'geometry',
        stylers: [
          {
            weight: 0.6,
          },
          {
            color: '#1a3541',
          },
        ],
      },
      {
        elementType: 'labels.icon',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [
          {
            color: '#2c5a71',
          },
        ],
      },
    ],
  },
  onMount: map => {
    new window.google.maps.Marker({
      position: center,
      map,
      title: 'Astro Base',
    })
  },
}

const Footer = () => (
  <FooterWrapper>
    <Map id="contactMap" {...mapProps} />
    <Wrapper>
      <HGroup paddingTop="30px" paddingBottom="30px" wrap="wrap">
        <SocialLinks>
          <a href="https://github.com/Astrocoders" target="_blank">
            <Github />
          </a>
          <a href="https://instagram.com/astrocoders" target="_blank">
            <Instagram />
          </a>
          <a href="https://instagram.com/astrocoders" target="_blank">
            <Twitter />
          </a>
        </SocialLinks>
        <Copyrights>Copyright 2018 © Astrocoders Desenvolvimento LTDA</Copyrights>
      </HGroup>
    </Wrapper>
  </FooterWrapper>
)

export default Footer
