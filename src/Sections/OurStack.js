import React from 'react'
import styled from 'styled-components'
import Wrapper from '../components/Wrapper'

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
`

const OurStack = () => (
    <OurStackWrapper id="ourStack">
      <Wrapper alignItems="center" direction="row" justifyContent="space-between" wrap="wrap">
        <img src={ocamlLogo} alt="OCaml"/>
        <img src={reasonLogo} alt="ReasonML"/>
        <img src={jsLogo} alt="JavaScript"/>
        <img src={graphqlLogo} alt="GraphQL"/>
        <img src={apolloLogo} alt="Apollo"/>
        <img src={rnLogo} alt="React Native"/>
        <img src={styledLogo} alt="Styled Components"/>
        <img src={webpackLogo} alt="Webpack"/>
        <img src={mongoLogo} alt="MongoDB"/>
        <img src={meteorLogo} alt="Meteor"/>
      </Wrapper>
    </OurStackWrapper>
  )

export default OurStack
