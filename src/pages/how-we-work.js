import React from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'gatsby-plugin-intl'

import PageWrapper from '../components/PageWrapper'
import Title from '../components/Title'
import Wrapper from '../components/Wrapper'
import VGroup from '../components/VGroup'
import HGroup from '../components/HGroup'

import theme from '../utils/theme'

import galaxyBg from '../img/galaxy.jpg'
import check from '../img/check-circle.svg'

const Content = styled.section`
  padding: 50px 0;
`

const Timeline = styled.ul`
  color: #fff;
  background-image: url(${galaxyBg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  list-style-type: none;
  margin: 0 auto 100px;
  padding: 70px 0 60px;
  position: relative;
`

const Process = styled(HGroup)`
  align-items: center;
  cursor: pointer;
  font-family: 'Open Sans';
  margin-bottom: 40px;
  transition: 0.2s;
  width: 100%;

  @media (max-width: 960px) {
    flex-direction: column;
    margin-left: 30px;
  }

  @media (min-width: 960px) {
    &:nth-child(odd) {
      flex-direction: row-reverse;

      h3 {
        text-align: left;
      }

      & .content {
        text-align: right;
        padding-right: 30px;
        width: 50%;
      }
    }

    &:nth-child(even) {
      text-align: left;
      margin-left: 0;

      h3 {
        text-align: right;
      }

      & .content {
        text-align: left;
        padding-left: 30px;
        width: 50%;
      }
    }

    &:after {
      right: 50%;
      width: 12px;
      content: '';
      height: 12px;
      display: block;
      border-radius: 50%;
      margin-right: -6px;
      position: absolute;
      background-color: ${theme.colors.primary};
    }

    &:first-child > .content,
    &:hover > .content {
      opacity: 1;
    }
  }
`

const ProcessTitle = styled.h3`
  margin: 0;
  padding: 30px 0;
  width: 100%;

  @media (min-width: 960px) {
    padding: 30px;
    width: 50%;
  }
`

const ProcessDescription = styled.div`
  transition: all 0.2s ease-in-out;

  @media (min-width: 960px) {
    opacity: 0;
  }
`

const VerticalLine = styled.div`
  top: 10px;
  width: 3px;
  height: 100%;
  display: block;
  position: absolute;
  margin-left: -1.5px;
  animation-name: growDown;
  background-color: ${theme.colors.primary};

  &:before {
    top: 0;
    content: '';
    width: 18px;
    height: 18px;
    display: block;
    border-radius: 50%;
    margin-left: -7px;
    position: absolute;
    background: ${theme.colors.primary};
  }

  &:after {
    background-image: url(${check});
    background-size: cover;
    bottom: -35px;
    content: '';
    width: 36px;
    height: 36px;
    display: block;
    margin-left: -16px;
    position: absolute;
  }

  @media (min-width: 960px) {
    left: 50%;
  }
`

const HowWeWork = () => (
  <PageWrapper isHome={false}>
    <Content>
      <Wrapper alignItems="center" justifyContent=" center">
<<<<<<< HEAD
        <Title align="center" marginBottom="100px">
          <FormattedMessage id="howWeWork" />
=======
        <Title align="center" marginBottom="100px" withStripe={true}>
          How we Work
>>>>>>> 0c8005c8eae3c00d421cf6e0d30af205089dc176
        </Title>
        <VGroup>
          <Timeline>
            <Process>
              <ProcessTitle>
                <FormattedMessage id="processOneTitle" />
              </ProcessTitle>
              <ProcessDescription className="content">
                <FormattedMessage id="processOneText" />
              </ProcessDescription>
            </Process>
            <Process>
              <ProcessTitle>
                <FormattedMessage id="processTwoTitle" />
              </ProcessTitle>
              <ProcessDescription className="content">
                <FormattedMessage id="processTwoText" />
              </ProcessDescription>
            </Process>
            <Process>
              <ProcessTitle>
                <FormattedMessage id="processThreeTitle" />
              </ProcessTitle>
              <ProcessDescription className="content">
                <FormattedMessage id="processThreeText" />
              </ProcessDescription>
            </Process>
            <Process>
              <ProcessTitle>
                <FormattedMessage id="processFourTitle" />
              </ProcessTitle>
              <ProcessDescription className="content">
                <FormattedMessage id="processFourText" />
              </ProcessDescription>
            </Process>
            <Process>
              <ProcessTitle>
                <FormattedMessage id="processFiveTitle" />
              </ProcessTitle>
              <ProcessDescription className="content">
                <FormattedMessage id="processFiveText" />
              </ProcessDescription>
            </Process>
            <VerticalLine />
          </Timeline>
        </VGroup>
      </Wrapper>
    </Content>
  </PageWrapper>
)

export default HowWeWork
