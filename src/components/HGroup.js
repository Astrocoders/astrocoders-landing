import styled from 'styled-components'

export default styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: ${props => props.wrap || 'no-wrap'};
  width: ${props => props.width || '100%'};
  align-items: ${props => props.alignItems || 'flex-start'};
  justify-content: ${props => props.justifyContent || 'flex-start'};
  padding-top: ${props => props.paddingTop || props.padding || 0};
  padding-bottom: ${props => props.paddingBottom || props.padding || 0};
  padding-left: ${props => props.paddingLeft || props.padding || 0};
  padding-right: ${props => props.paddingRight || props.padding || 0};
  margin-top: ${props => props.marginTop || props.margin || 0};
  margin-bottom: ${props => props.marginBottom || props.margin || 0};
  margin-right: ${props => props.marginRight || props.margin || 0};
  margin-left: ${props => props.marginLeft || props.margin || 0};

  @media (max-width: 960px) {
    flex-direction: ${props => (props.columnOnMobile ? 'column' : 'row')};
  }
`
