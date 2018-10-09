import React from 'react'
import styled from 'styled-components'
import Wrapper from './Wrapper'

import ocamlLogo from '../img/ocaml.png'
import reasonLogo from '../img/re.png'
import jsLogo from '../img/javascript.png'
import graphqlLogo from '../img/graphql.png'
import apolloLogo from '../img/apollo.png'
import rnLogo from '../img/react-native.png'
import styledLogo from '../img/styled.png'
import webpackLogo from '../img/webpack.png'
import mongoLogo from '../img/mongodb.png'
import meteorLogo from '../img/meteor.png'

const OurStackWrapper = styled.section`
  align-items: center;
  background-color: #000;
  display: flex;
  padding-bottom: 50px;

  @media (max-width: 960px) {
    & > div {
      justify-content: normal;
    }
  }
`

const StackLogo = styled.div`
  display: flex;
  @media (max-width: 960px) {
    flex: 0 0 20%;
    margin-bottom: 20px;
  }
`

const StackLogoImg = styled.img`
  filter: grayscale(100%);
  transition: all 0.4s;

  &:hover {
    filter: grayscale(0%);
  }

  @media (max-width: 960px) {
    padding-left: 10px;
    height: 57px;
  }
`

const OurStack = () => (
  <OurStackWrapper id="ourStack">
    <Wrapper alignItems="center" direction="row" justifyContent="space-between" wrap="wrap">
      <StackLogo>
        <StackLogoImg src={ocamlLogo} alt="OCaml" title="OCaml" />
      </StackLogo>
      <StackLogo>
        <StackLogoImg src={reasonLogo} alt="ReasonML" title="ReasonML" />
      </StackLogo>
      <StackLogo>
        <StackLogoImg src={jsLogo} alt="JavaScript" title="JavaScript" />
      </StackLogo>
      <StackLogo>
        <StackLogoImg src={graphqlLogo} alt="GraphQL" title="GraphQL" />
      </StackLogo>
      <StackLogo>
        <StackLogoImg src={apolloLogo} alt="Apollo" title="Apollo" />
      </StackLogo>
      <StackLogo>
        <StackLogoImg src={rnLogo} alt="React Native" title="React Native" />
      </StackLogo>
      <StackLogo>
        <StackLogoImg src={styledLogo} alt="Styled Components" title="Styled Components" />
      </StackLogo>
      <StackLogo>
        <StackLogoImg src={webpackLogo} alt="Webpack" title="Webpack" />
      </StackLogo>
      <StackLogo>
        <StackLogoImg src={mongoLogo} alt="MongoDB" title="MongoDB" />
      </StackLogo>
      <StackLogo>
        <StackLogoImg src={meteorLogo} alt="Meteor" title="Meteor" />
      </StackLogo>
    </Wrapper>
  </OurStackWrapper>
)

export default OurStack
