import React from 'react'
import styled from 'styled-components'

import PageWrapper from '../components/PageWrapper'
import Title from '../components/Title'
import Wrapper from '../components/Wrapper'
import VGroup from '../components/VGroup'
import HGroup from '../components/HGroup'

import theme from '../utils/theme'

import galaxyBg from '../img/galaxy.jpg'
import check from '../img/check-circle.svg'
import astroserver from '../img/astro-server.png'

const Content = styled.section`
  padding: 50px 0;
`

const ServerIcon = styled.img`
  display: block;
  margin: 20px auto;
  width: 150px;
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

const LaunchTitle = styled.h3`
  align-self: center;
  background-image: -webkit-linear-gradient(-45deg, ${theme.colors.primary} 1%, ${theme.colors.accent} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: ${theme.fonts.title};
  font-size: 2.5em;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-align: center;
`

const HowWeWork = () => (
  <PageWrapper isHome={false}>
    <Content>
      <Wrapper alignItems="center" justifyContent=" center">
        <Title align="center" marginBottom="100px" withStripe={true}>
          Financial Building Blocks
        </Title>
        <VGroup>
          <ServerIcon src={astroserver} />
          <Timeline>
            <Process>
              <ProcessTitle>We undestand your needs</ProcessTitle>
              <ProcessDescription className="content">
                We accept projects only with customers that see value in the work and are really excited to built
                excellent financial systems. Within that in mind the ultimate goal is a long and healthier partnership.
              </ProcessDescription>
            </Process>
            <Process>
              <ProcessTitle>We build unbreakable code</ProcessTitle>
              <ProcessDescription className="content">
                We accept projects only with customers that see value in the work and are really excited to built
                excellent financial systems. Within that in mind the ultimate goal is a long and healthier partnership.
              </ProcessDescription>
            </Process>
            <Process>
              <ProcessTitle>State of art in XYZ integrations</ProcessTitle>
              <ProcessDescription className="content">
                We accept projects only with customers that see value in the work and are really excited to built
                excellent financial systems. Within that in mind the ultimate goal is a long and healthier partnership.
              </ProcessDescription>
            </Process>
            <Process>
              <ProcessTitle>State of art in XYZ integrations</ProcessTitle>
              <ProcessDescription className="content">
                We accept projects only with customers that see value in the work and are really excited to built
                excellent financial systems. Within that in mind the ultimate goal is a long and healthier partnership.
              </ProcessDescription>
            </Process>
            <VerticalLine />
          </Timeline>
          <LaunchTitle>Launch!</LaunchTitle>
        </VGroup>
      </Wrapper>
    </Content>
  </PageWrapper>
)

export default HowWeWork
