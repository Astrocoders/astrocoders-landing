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

  @media (max-width: 960px) {
    align-items: center;
    flex-direction: column;

    h2 {
      margin-left: auto;
      margin-right: auto;
    }

    span {
      text-align: center;
    }
  }
`

const Avatar = styled.img`
  border-radius: 50%;
  width: 120px;
  height: 120px;
  margin-right: 30px;

  @media (max-width: 960px) {
    margin-bottom: 30px;
  }
`

const Link = styled.a`
  color: inherit;
  text-decoration: none;
`

const ProductTestimonial = ({ name, company, quote, link, photo }) => (
  <ProductTestimonialWrapper>
    <Avatar src={photo} alt={`Astrocoders Testimonials from ${name}`} />
    <VGroup alignItems="flex-start">
      <Title size="1.4rem" fontWeight="300">
        <Link href={link} target="_blank">
          {company}
        </Link>
      </Title>
      <Title weight="400" size="1rem">
        {name}
      </Title>
      <Text weight="300" size="0.8rem">
        {quote}
      </Text>
    </VGroup>
  </ProductTestimonialWrapper>
)

export default ProductTestimonial
