import React from 'react'
import styled from 'styled-components'
import Title from '../components/Title'
import Text from '../components/Text'

const TestimonialWrapper = styled.div`
  align-items: center;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  width: 100%;
`

const Avatar = styled.img`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  margin: 40px 0;
`

const Testimonial = ({ name, company, quote, link, photo }) => (
  <TestimonialWrapper>
    <Avatar src={photo} alt="Astrocoders Testimonials Person" alt={company}/>
    <a href={link} target="_blank">
      <Title fontSize="1.8em" fontWeight="300" textAlign="center">{company}</Title>
    </a>
    <Title fontWeight="300" textAlign="center">{name}</Title>
    <Text align="center" weight="300">{quote}</Text>
  </TestimonialWrapper>
)

export default Testimonial