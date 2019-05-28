import React from 'react'
import styled from 'styled-components'
import Title from './Title'
import Text from './Text'
import VGroup from './VGroup'

const ProductTestimonialWrapper = styled.div`
  align-items: flex-start;
  color: #fff;
  display: flex;
  flex-direction: row;
  padding: 20px;
  width: 100%;
`

const Avatar = styled.img`
  border-radius: 50%;
  width: 120px;
  height: 120px;
  margin-right: 30px;
`

const Link = styled.a`
  text-decoration: none;
`

const ProductTestimonial = ({ name, company, quote, link, photo }) => (
  <ProductTestimonialWrapper>
    <Avatar src={photo} alt={`Astrocoders Testimonials from ${name}`} />
    <VGroup alignItems="flex-start">
      <Link href={link} target="_blank">
        <Title Size="1.8rem" fontWeight="300">
          {company}
        </Title>
      </Link>
      <Title weight="300" size="1.2rem">
        {name}
      </Title>
      <Text weight="300" marginTop="1.4rem">
        {quote}
      </Text>
    </VGroup>
  </ProductTestimonialWrapper>
)

export default ProductTestimonial
