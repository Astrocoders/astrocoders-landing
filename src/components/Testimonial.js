import React from 'react'
import styled from 'styled-components'
import Title from './Title'
import Text from './Text'

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

const Link = styled.a`
  text-decoration: none;
`

const Testimonial = ({ name, company, quote, link, photo }) => (
  <TestimonialWrapper>
    <Avatar src={photo} alt={`Astrocoders Testimonials from ${name}`} />
    <Link href={link} target="_blank">
      <Title Size="1.8rem" fontWeight="300" align="center" marginBottom="0">
        {company}
      </Title>
    </Link>
    <Title weight="300" size="1.2rem" align="center">
      {name}
    </Title>
    <Text align="center" weight="300" marginTop="1.4rem">
      {quote}
    </Text>
  </TestimonialWrapper>
)

export default Testimonial
