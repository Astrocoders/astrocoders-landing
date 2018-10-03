import React from 'react'
import styled from 'styled-components'
import { GoStar as StarIcon } from 'react-icons/go'
import Emoji from 'react-emoji-render'

import HGroup from './HGroup'
import Text from './Text'

import theme from '../utils/theme'

const ProjectWrapper = styled(HGroup)`
  color: #fff;
  border-bottom: 1px solid #565656;
  justify-content: space-between;
  padding: 70px 0 50px;
  width: 100%;

  a {
    text-decoration: none;
  }
  @media (max-width: 960px) {
    align-items: center;
    flex-direction: column;
  }
`
const ProjectNumber = styled.h3`
  font-size: 2rem;
  width: 30%;

  svg {
    font-size: 70%;
    margin-right: 5px;
    margin-top: -8px;
  }

  iframe {
    margin: 10px auto;
  }

  @media (max-width: 960px) {
    text-align: center;
    width: 100%;
  }
`

const ProjectTitle = styled.h3`
  color: ${theme.colors.primary};
  font-size: 2em;
  font-weight: 300;
  text-transform: uppercase;
  text-align: left;
  @media (min-width: 960px) {
    width: 100%;
  }
`

const Link = styled.a`
  color: inherit;
  text-decoration: none;
`

const ProjectDescription = styled(Text)`
  @media (min-width: 960px) {
    width: 100%;
  }
`

class ProjectOpenSource extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      url: '',
      description: '',
      stars: '',
    }
  }

  fetchProfile(repoUrl) {
    let url = `https://api.github.com/repos/Astrocoders/${repoUrl}`
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          url: data.html_url,
          description: data.description,
          stars: data.stargazers_count,
        })
      })
      .catch(error => console.log('Oops! Something went wrong'))
  }

  componentDidMount() {
    this.fetchProfile(this.props.name)
  }

  render() {
    const repo = this.state

    return (
      <ProjectWrapper>
        <ProjectNumber>
          <StarIcon />
          {repo.stars}
          <iframe
            title="stars"
            src={
              'https://ghbtns.com/github-btn.html?user=astrocoders&repo=' +
              this.props.name +
              '&type=star&count=false&size=large'
            }
            frameBorder="0"
            scrolling="0"
            width="100%"
            height="30px"
          />
        </ProjectNumber>
        <ProjectTitle>
          <Link href={repo.url} target="_blank">
            {this.props.name}
          </Link>
        </ProjectTitle>
        <ProjectDescription>
          <Emoji text={repo.description} />
        </ProjectDescription>
      </ProjectWrapper>
    )
  }
}

export default ProjectOpenSource
