import styled from 'styled-components'

export default styled.div`
  align-items: ${props => props.alignItems || 'flex-start'};
  display: flex;
  flex-direction: ${props => props.direction || 'column'};
  flex-wrap: ${props => props.wrap};
  justify-content: ${props => props.justifyContent || 'flex-start'};
  margin: 0 auto;
  max-width: 1200px;
  width: 85vw;
`